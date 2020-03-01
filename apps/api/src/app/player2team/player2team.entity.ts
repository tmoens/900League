import { Column, Entity, ManyToOne } from 'typeorm';
import { Player } from '../players/player.entity';
import { Team } from '../teams/team.entity';
import { IPlayer, IPlayer2Team, ITeam } from '@dg-league/api-interfaces';
/**
 * This models the relationship between a player and a given incarnation of a team.
 *
 * It is not modeled like normal TypeORM relationships because the relationship
 * not only has references to a team and a player but also ancillary data that
 * pertains to the relationship.  E.g. the player's rating at the beginning
 * of the season.
 */

@Entity()

export class Player2Team implements IPlayer2Team {
  @Column({
    primary: true,
    nullable: false,
  })
  playerId: string;

  @Column({
    primary: true,
    nullable: false,
  })
  teamId: string;

  @ManyToOne('Player', 'teams',
    {cascade: true})
  player: IPlayer;

  @ManyToOne('Team', 'roster')
  team: ITeam;

  @Column({
    comment: 'The players rating for this team.',
  })
  rating: number;

  @Column({
    comment: 'The rationale for the rating.',
  })
  ratingRationale: string;
}
