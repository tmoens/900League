import { EntityRepository, Repository } from 'typeorm';
import { Team } from './team.entity';

@EntityRepository(Team)
export class TeamsRepository extends Repository<Team> {
  constructor() {
    super();
  }

  async findByNames(name: string, shortName: string): Promise<Team> {
    return await this.findOne({where: {name, shortName}});
  }

}
