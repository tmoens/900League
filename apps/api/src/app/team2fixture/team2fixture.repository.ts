import { EntityRepository, Repository } from 'typeorm';
import { Team2Fixture } from './team2fixture.entity';

@EntityRepository(Team2Fixture)
export class Team2FixtureRepository extends Repository<Team2Fixture> {
  constructor() {
    super();
  }
}
