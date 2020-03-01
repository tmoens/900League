import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IPlayer, IPlayer2Team, ITeam } from '@dg-league/api-interfaces';

@Entity()
export class Player implements IPlayer{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  pdgaNumber: number;

  @ManyToMany('Team')
  @JoinTable()
  captaincies: ITeam[];

  @OneToMany('Player2Team', 'player')
  teams: IPlayer2Team[];
}
