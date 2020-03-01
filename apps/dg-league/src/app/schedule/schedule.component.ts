import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { TeamService } from '../team/team.service';
import { AppStateService, GuiTools } from '../app-state.service';
import { FixtureDTO, FixtureState } from '@dg-league/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FixtureEditComponent } from '../fixture-edit/fixture-edit.component';

@Component({
  selector: 'dg-league-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  // Without the next line, the html template cannot reference the enum type.
  FixtureState = FixtureState;

  displayCols: string[] = ['date', 'time', 'home', 'away', 'result'];
  constructor(
    private appStateService: AppStateService,
    public readonly scheduleService: ScheduleService,
    private readonly teamService: TeamService,
    public editDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.appStateService.setActiveTool(GuiTools.SCHEDULE);
  }

  openDialog(item: FixtureDTO): void {
    const dialogRef = this.editDialog.open(FixtureEditComponent, {
      width: '500px',
      data: {fixture: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      // The schedule, the standings and other things may need refreshing at this point.
      // or at least the cashes need to be cleared and reloaded whenever.
    });

  }
}
