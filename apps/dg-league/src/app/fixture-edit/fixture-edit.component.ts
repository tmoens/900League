import { Component, Inject, OnInit } from '@angular/core';
import { TeamService } from '../team/team.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FixtureDTO, TeamDTO } from '@dg-league/api-interfaces';

@Component({
  selector: 'dg-league-fixture-edit',
  templateUrl: './fixture-edit.component.html',
  styleUrls: ['./fixture-edit.component.css']
})
export class FixtureEditComponent implements OnInit {
  public dialogRef: MatDialogRef<FixtureEditComponent>;
  public fixture: FixtureDTO;
  public homeTeam: TeamDTO;
  public awayTeam: TeamDTO;
  public homeString: string;
  public awayString: string;

  constructor(
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      fixture: FixtureDTO;
    },
  ) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.fixture = this.data.fixture;
    this.homeTeam = this.teamService.getTeam(this.fixture.homeTeam.id);
    this.awayTeam = this.teamService.getTeam(this.fixture.awayTeam.id);
    this.homeString = JSON.stringify(this.homeTeam);
    this.awayString = JSON.stringify(this.awayTeam);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onRevert() {
    this.initialize();
  }

  onSave() {
    // TODO Actually save the scores
    this.dialogRef.close();
  }

}
