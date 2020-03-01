import { EntityRepository, Repository } from 'typeorm';
import { Fixture } from './fixture.entity';

@EntityRepository(Fixture)
export class FixturesRepository extends Repository<Fixture> {
  constructor() {
    super();
  }
}
