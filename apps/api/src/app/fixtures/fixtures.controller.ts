import { Controller, Get } from '@nestjs/common';
import { FixturesService } from './fixtures.service';
import { FixtureDTO, StandingsRowDTO } from '@dg-league/api-interfaces';

@Controller('fixtures')
export class FixturesController {  constructor(
  private readonly fixturesService: FixturesService,
) {}

  @Get('/schedule')
  async getSchedule(): Promise<FixtureDTO[]> {
    return this.fixturesService.getSchedule();
  }

  @Get('/standings')
  async getStandings(): Promise<StandingsRowDTO[]> {
    return this.fixturesService.getStandings();
  }
}
