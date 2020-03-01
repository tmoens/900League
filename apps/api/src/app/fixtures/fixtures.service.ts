import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FixturesRepository } from './fixtures.repository';
import { Fixture } from './fixture.entity';
import { FixtureRoles, FixtureDTO, StandingsRowDTO, FixtureState } from '@dg-league/api-interfaces';
import { Team2Fixture } from '../team2fixture/team2fixture.entity';

@Injectable()
export class FixturesService {
  constructor(
    @InjectRepository(FixturesRepository) private readonly repo: FixturesRepository,
  ) {}

  create(dateString: string): Promise<Fixture> {
    const fixture = new Fixture();
    fixture.date = new Date(dateString);
    fixture.state = FixtureState.SCHEDULED;
    return this.repo.save(fixture);
  }

  // A schedule is the set of all the fixtures in a league.
  // TODO Could get a schedule for a specific team too, I guess.
  async getSchedule(): Promise<FixtureDTO[]> {
    const fixtures: Fixture[] = await this.repo.find({
      relations: ['participants', 'participants.team'],
      order: {
        date: "ASC",
      }
    });
    // for the benefit of the client we convert the database query result
    // to a more client friendly ScheduleDTO
    const schedule: FixtureDTO[] = [];
    for (const fixture of fixtures) {
      const f: any = {};
      f.date = fixture.date;
      f.id = fixture.id;
      f.location = fixture.location;
      f.state = fixture.state;
      for (const p of fixture.participants) {
        if (p.role === FixtureRoles.HOME) {
          f.homeTeam = p.team;
          f.homePoints = p.points;
        } else {
          f.awayTeam = p.team;
          f.awayPoints = p.points;
        }
      }
      schedule.push(f);
    }
    return schedule;
  }

  async getStandings(): Promise<StandingsRowDTO[]>{
    const standingsBuilder: {[index: string]: StandingsRowDTO} = {};
    const fixtures: Fixture[] = await this.repo.find( {
      relations: ['participants', 'participants.team'],
      where: {state: FixtureState.COMPLETED}
    });
    for (const fixture of fixtures) {
      let homeTeam: Team2Fixture;
      let awayTeam: Team2Fixture;
      for (const participant of fixture.participants) {
        if (FixtureRoles.HOME === participant.role) {
          homeTeam = participant;
        } else {
          awayTeam = participant;
        }
        if (!standingsBuilder[participant.teamId]) {
          standingsBuilder[participant.teamId] = {
            teamName: participant.team.name,
            teamId: participant.teamId,
            pointsAgainst: 0,
            pointsFor: 0,
            numberPlayed: 0,
            rating: 0,
          }
        }
      }
      standingsBuilder[homeTeam.teamId].numberPlayed++;
      standingsBuilder[homeTeam.teamId].pointsFor += homeTeam.points;
      standingsBuilder[homeTeam.teamId].pointsAgainst += awayTeam.points;
      standingsBuilder[homeTeam.teamId].rating =
        standingsBuilder[homeTeam.teamId].pointsFor /(standingsBuilder[homeTeam.teamId].pointsFor + standingsBuilder[homeTeam.teamId].pointsAgainst);
      standingsBuilder[awayTeam.teamId].numberPlayed++;
      standingsBuilder[awayTeam.teamId].pointsFor += awayTeam.points;
      standingsBuilder[awayTeam.teamId].pointsAgainst += homeTeam.points;
      standingsBuilder[awayTeam.teamId].rating =
        standingsBuilder[awayTeam.teamId].pointsFor /(standingsBuilder[awayTeam.teamId].pointsFor + standingsBuilder[awayTeam.teamId].pointsAgainst);
    }
    return Object.keys(standingsBuilder).map( key => standingsBuilder[key]).sort((a, b) => {
       if (a.rating > b.rating) {return -1; }
       if (a.rating < b.rating) {return 1; }
       return b.pointsFor - a.pointsFor
     });
  }

}

