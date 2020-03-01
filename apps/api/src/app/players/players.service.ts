import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersRepository } from './player.repository';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersRepository) private readonly repo: PlayersRepository,
  ) {}

  async createOrFetch(firstName: string, lastName: string, pdgaNumber: number = null): Promise<Player> {
    let player: Player = await this.repo.findByData(firstName, lastName, pdgaNumber);
    if (player) { return player; }
    player = new Player();
    player.firstName = firstName;
    player.lastName = lastName;
    player.pdgaNumber = pdgaNumber;
    return this.repo.save(player);
  }

}
