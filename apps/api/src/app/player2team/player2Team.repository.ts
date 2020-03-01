import { EntityRepository, Repository } from 'typeorm';
import { Player2Team } from './player2team.entity';

@EntityRepository(Player2Team)
export class Player2TeamRepository extends Repository<Player2Team> {
  constructor() {
    super();
  }
}
