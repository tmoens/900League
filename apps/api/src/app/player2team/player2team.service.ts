import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player2TeamRepository } from './player2Team.repository';
import { Player } from '../players/player.entity';
import { Team } from '../teams/team.entity';
import { Player2Team } from './player2team.entity';

@Injectable()
export class Player2teamService {
  constructor(
    @InjectRepository(Player2TeamRepository) private readonly repo: Player2TeamRepository,
  ) {}

  create(player: Player, team: Team, rating: number, rationale: string): Promise<Player2Team> {
    const p2t: Player2Team = new Player2Team();
    p2t.player = player;
    p2t.team = team;
    p2t.rating = rating;
    p2t.ratingRationale = rationale;
    return this.repo.save(p2t);
  }
}
