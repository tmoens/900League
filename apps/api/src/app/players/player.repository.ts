import { EntityRepository, Repository } from 'typeorm';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {
  constructor() {
    super();
  }

  async findByData(firstName: string, lastName: string, pdgaNumber: number): Promise<Player> {
    return await this.findOne({where: {firstName, lastName, pdgaNumber}});
  }

}
