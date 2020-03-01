import { Controller, HttpException, HttpStatus,   Post, Req, UploadedFile,  UseInterceptors } from '@nestjs/common';
import * as csv from 'csvtojson';
import { FileInterceptor } from '@nestjs/platform-express';
import { DataLoaderService } from './data-loader.service';

@Controller('data-loader')
export class DataLoaderController {

  constructor(
    private readonly dataLoaderService: DataLoaderService,
  ) {
  }

  @Post('teamsAndRosters')
  @UseInterceptors(FileInterceptor('file',
    {dest: 'uploads'}))
  async importTeamsAndRosters(@Req() request, @UploadedFile() file) {
    // Check the validity of the file.
    const expectedHeaders: string[] = [
      'teamName',	'teamShortName',	'firstName', 'lastName',	'pdgaNumber',	'rating',	'rationale',
    ];

    // Note that if I call this from Postman, or my Angular client with the exact
    // same file, the mimetype of the file  comes in as "text/csv" in the first
    // case and "application/vnd.ms-excel" in the second.
    if (file.mimetype !== 'text/csv' && file.mimetype !== 'application/vnd.ms-excel') {
      throw new HttpException('Bad file type: ' + file.mimetype, HttpStatus.NOT_ACCEPTABLE);
    }

    // arguably this should be done in the service, but it is async
    // and I was having trouble throwing an exception from there in such
    // a way that this function could always return before the heavy loading
    // got going.
    const rows: any[] = await csv()
      .fromFile(file.path )
      .on('header', (headers) => {
        for (const header of expectedHeaders) {
          if (headers.indexOf(header) < 0) {
            throw new HttpException('Roster file did not include column: ' + header,
              HttpStatus.NOT_ACCEPTABLE);
          }
        }
      });
    await this.dataLoaderService.loadTeamsAndRosters(rows);
  }

  @Post('fixtures')
  @UseInterceptors(FileInterceptor('file',
    {dest: 'uploads/schedules'}))
  async importFixtures(@Req() request, @UploadedFile() file) {
    // Check the validity of the file.
    const rows: any[] = await csv()
      .fromFile(file.path );
    await this.dataLoaderService.loadFixtures(rows);
  }
}
