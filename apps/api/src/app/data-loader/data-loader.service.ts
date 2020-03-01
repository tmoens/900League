import { Injectable } from '@nestjs/common';
import { PlayersService } from '../players/players.service';
import { TeamsService } from '../teams/teams.service';
import { Player2teamService } from '../player2team/player2team.service';
import { Team } from '../teams/team.entity';
import { Player } from '../players/player.entity';
import { Player2Team } from '../player2team/player2team.entity';
import { FixturesService } from '../fixtures/fixtures.service';
import { Fixture } from '../fixtures/fixture.entity';
import { Team2fixtureService } from '../team2fixture/team2fixture.service';
import { Team2FixtureState } from '../team2fixture/team2fixture.state';

export interface RosterRow {
  teamName: string;
  teamShortName: string;
  firstName: string;
  lastName: string;
  pdgaNumber: string;
  rating: string;
  rationale: string;
}

export interface FixtureRow {
  home: string;
  away: string;
  date: string;
}

@Injectable()
export class DataLoaderService {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly player2teamService: Player2teamService,
    private readonly playersService: PlayersService,
    private readonly fixturesService: FixturesService,
    private readonly team2fixtureService: Team2fixtureService,
  ) {
  }

  /**
   * import data for the teams as rows of
   * @param rows
   */
  async loadTeamsAndRosters(rows: RosterRow[]) {
    for (const row of rows) {
      console.log(JSON.stringify(row));
      const team: Team = await this.teamsService.createOrFetch(row.teamName, row.teamShortName);
      const player: Player = await this.playersService.createOrFetch(row.firstName, row.lastName, Number(row.pdgaNumber));
      const p2t: Player2Team = await this.player2teamService.create(player, team, Number(row.rating), row.rationale);
      console.log(JSON.stringify(p2t));
    }
  }

  async loadFixtures(rows: FixtureRow[]): Promise<boolean> {
    for (const row of rows) {
      console.log(JSON.stringify(row));
      const homeTeam: Team = await this.teamsService.findById(row.home);
      const awayTeam: Team = await this.teamsService.findById(row.away);
      const fixture: Fixture = await this.fixturesService.create(row.date);
      await this.team2fixtureService.create(homeTeam, fixture, Team2FixtureState.HOME);
      await this.team2fixtureService.create(awayTeam, fixture, Team2FixtureState.AWAY);
    }
    return true;
  }
}
