import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Team2Fixture } from '../team2fixture/team2fixture.entity';
import { IFixture } from '@dg-league/api-interfaces';

@Entity()
export class Fixture implements IFixture{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column({
    nullable: true,
  })
  location: string;

  // Unscheduled, Scheduled, Completed, Postponed not sure yet
  @Column()
  state: string;

  @OneToMany('Team2Fixture', 'fixture')
  participants: Team2Fixture[];
}
