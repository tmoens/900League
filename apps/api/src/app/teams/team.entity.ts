import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IPlayer, IPlayer2Team, ITeam, ITeam2Fixture } from '@dg-league/api-interfaces';

@Entity()
export class Team implements ITeam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  shortName: string;

  @ManyToMany('Player', 'captaincies')
  captains: IPlayer[];

  @OneToMany('Player2Team', 'team')
  roster: IPlayer2Team[];

  @OneToMany('Team2Fixture', 'team')
  schedule: ITeam2Fixture[];
}
