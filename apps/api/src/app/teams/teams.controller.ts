import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamDTO } from '@dg-league/api-interfaces';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
  ) {}

  @Get()
  async getTeams(): Promise<TeamDTO[]> {
    return this.teamsService.getTeams();
  }

}
