import { Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// Typescript does not allow enums with values as objects.
// The following is a clever workaround from the internet...
export class GuiTools {
  static readonly STANDINGS  = new GuiTools(
    'standings',
    'Standings');
  static readonly SCHEDULE  = new GuiTools(
    'schedule',
    'Schedule');
  static readonly TEAMS = new GuiTools(
    'teams',
    'Team Browser');

  // private to disallow creating other instances than the static ones above.
  private constructor(
    public readonly route: string,
    public readonly display_name: any,
  ) {
  }

  // If you talk about a particular tool without specifying an attribute, you get it's route.
  toString() {
    return this.route;
  }
}

@Injectable({
  providedIn: 'root'
})

export class AppStateService {
  private _activeTool$: BehaviorSubject<GuiTools> = new BehaviorSubject<GuiTools>(GuiTools.STANDINGS);
  public get activeTool$() { return this._activeTool$; }
  public get activeTool() { return this.activeTool$.value; }


  constructor() {}

  setActiveTool(tool: GuiTools) {
    this._activeTool$.next(tool);
  }

}
