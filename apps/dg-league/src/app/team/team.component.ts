import { Component, OnInit } from '@angular/core';
import { AppStateService, GuiTools } from '../app-state.service';
import { TeamService } from './team.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TeamDTO } from '@dg-league/api-interfaces';

@Component({
  selector: 'dg-league-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamColumns: string[] = ['team'];
  rosterColumns: string[] = ['name', 'pdgaNumber', 'rating'];
  selectedTeam: TeamDTO;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appStateService: AppStateService,
    public readonly teamService: TeamService,
  ) { }

  ngOnInit(): void {

    this.appStateService.setActiveTool(GuiTools.TEAMS);
    

    // use the route's paramMap to figure out the id of the item we are supposed to view.
    this.route.paramMap.subscribe((pm: ParamMap) => {
      const id = pm.get('id');
      if (id) {
        this. selectedTeam = this.teamService.getTeam(id);
      } else {
        this.router.navigate(['teams/' + this.teamService.getFirstTeam().id]);
      }
    });
    console.log (this.selectedTeam);
  }

  onSelect(item: TeamDTO) {
    this.router.navigate(['teams/' + item.id]);
  }

}
