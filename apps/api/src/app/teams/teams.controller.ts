import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
  ) {}

  @Get()
  async getTeams(): Promise<Team[]> {
    return this.teamsService.getTeams();
  }

}
