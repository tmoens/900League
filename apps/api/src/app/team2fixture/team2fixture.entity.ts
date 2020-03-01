import { Column, Entity, ManyToOne } from 'typeorm';
import { IFixture, ITeam, ITeam2Fixture } from '@dg-league/api-interfaces';

@Entity()

export class Team2Fixture implements ITeam2Fixture{
  @Column({
    primary: true,
    nullable: false,
  })
  teamId: string;

  @Column({
    primary: true,
    nullable: false,
  })
  fixtureId: string;

  // Home/Away/Host/Visitor  Uncomfortable about this.
  @Column()
  role: string;

  @Column({
    nullable: true,
  })
  points: number;
  // TODO add a roster, a partial score, points earned, win/loss etc.

  @ManyToOne('Fixture', 'participants',
    {cascade: true})
  fixture: IFixture;

  @ManyToOne('Team', 'schedule')
  team: ITeam;

}
