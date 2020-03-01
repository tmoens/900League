import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../teams/team.entity';
import { Team2FixtureRepository } from './team2fixture.repository';
import { Fixture } from '../fixtures/fixture.entity';
import { Team2Fixture } from './team2fixture.entity';

@Injectable()
export class Team2fixtureService {
  constructor(
    @InjectRepository(Team2FixtureRepository) private readonly repo: Team2FixtureRepository,
  ) {}

  create(team: Team, fixture: Fixture, role: string): Promise<Team2Fixture> {
    const t2f: Team2Fixture = new Team2Fixture();
    t2f.fixture = fixture;
    t2f.team = team;
    t2f.role = role;
    return this.repo.save(t2f);
  }

}
