import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarModule } from './top-bar/top-bar.module';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeamComponent } from './team/team.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatchScoreEntryComponent } from './match-score-entry/match-score-entry.component';
import { FixtureEditComponent } from './fixture-edit/fixture-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    ScheduleComponent,
    TeamComponent,
    MatchScoreEntryComponent,
    FixtureEditComponent,
  ],
  imports: [
    TopBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [
    FixtureEditComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
