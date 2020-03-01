import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: StandingsComponent,
  },
  {
    path: 'standings',
    component: StandingsComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'teams',
    component: TeamComponent,
  },
  {
    path: 'teams/:id',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
