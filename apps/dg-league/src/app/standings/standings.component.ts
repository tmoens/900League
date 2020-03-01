import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team/team.service';
import { StandingsService } from './standings.service';
import { AppStateService, GuiTools } from '../app-state.service';

@Component({
  selector: 'dg-league-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  displayCols: string[] = ['team', 'numberPlayed', 'pointsFor', 'pointsAgainst', 'rating'];

  constructor(
    private appStateService: AppStateService,
    public readonly standingsService: StandingsService,
    private readonly teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.appStateService.setActiveTool(GuiTools.STANDINGS);
  }

}
