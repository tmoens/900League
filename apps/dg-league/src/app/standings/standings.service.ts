import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StandingsRowDTO } from '@dg-league/api-interfaces';
import { LoaderService } from '../loader.service';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  private _all$: BehaviorSubject<StandingsRowDTO[]> = new BehaviorSubject<StandingsRowDTO[]>([]);
  get all(): StandingsRowDTO[] { return this._all$.value; }
  private indexedAll: {[key: string]: StandingsRowDTO};

  constructor(
    private loader: LoaderService,
  ){
    this.loadAll();
  }

  loadAll(){
    this.loader.getStandings().subscribe((data: StandingsRowDTO[]) => {
      this._all$.next(data);
    });
  }

  getFixture(id): StandingsRowDTO {
    return this.indexedAll[id];
  }
}
