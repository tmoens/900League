import { Injectable } from '@angular/core';
import { FixtureDTO, FixtureState } from '@dg-league/api-interfaces';
import { LoaderService } from '../loader.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private _all$: BehaviorSubject<FixtureDTO[]> = new BehaviorSubject<FixtureDTO[]>([]);
  get all(): FixtureDTO[] { return this._all$.value; }
  private indexedAll: {[key: string]: FixtureDTO};

  constructor(
    private loader: LoaderService,
  ){
    this.loadAll();

    /* when the schedule is loaded make an indexed list for fast access */
    this._all$.subscribe( items => {
      this.indexedAll = {};
      items.map(item => {
        this.indexedAll[item.id] = item;
      });
    });
  }

  loadAll(){
    this.loader.getSchedule().subscribe((data: FixtureDTO[]) => {
      this._all$.next(data.map(f => {
        f.date = new Date(f.date);
        return f;
      }));
    })
  }

  getFixture(id): FixtureDTO {
    return this.indexedAll[id];
  }
}
