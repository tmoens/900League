import { Injectable } from '@angular/core';
import { LoaderService } from '../loader.service';
import { TeamDTO } from '@dg-league/api-interfaces';

/**
 * This is a cache for teams in a league.
 * As a service it does not have and ngInit, initialization is performed in the constructor.
 */

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  _all: TeamDTO[] = [];
  indexedTeams: {[key: string]: TeamDTO};

  constructor(
    private loader: LoaderService,
  ){
    this.loadTeams()
  }

  loadTeams(){
    this.indexedTeams = {};
    this.loader.getTeams().subscribe((teams: TeamDTO[]) => {
      this._all = teams;
      teams.map((team) => this.indexedTeams[team.id] = team);
    })
  }

  getTeam(id): TeamDTO {
    return this.indexedTeams[id];
  }

  getFirstTeam(): TeamDTO {
    return this.all[0];
  }

  get all(): TeamDTO[] {
    return this._all;
  }
}
