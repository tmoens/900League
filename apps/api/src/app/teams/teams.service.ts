import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamsRepository } from './teams.repository';
import { Team } from './team.entity';
import { TeamDTO, TeamPlayerDTO } from '@dg-league/api-interfaces';

@Injectable()
export class TeamsService {
  constructor(
  @InjectRepository(TeamsRepository) private readonly repo: TeamsRepository,
  ) {}

  async createOrFetch(name: string, shortName: string): Promise<Team>{
    let team: Team = await this.repo.findByNames(name, shortName);
    if (team) {
      return team;
    }
    team = new Team();
    team.shortName = shortName;
    team.name = name;
    return this.repo.save(team);
  }

  async getTeams(): Promise<Team[]> {
    return await this.repo.find({relations: ['roster', 'roster.player', 'schedule']});
  }

  async findById(id: string): Promise<Team> {
    return this.repo.findOne({ where: {id}});
  }

}
