import { Component, OnInit } from '@angular/core';
import { AppStateService, GuiTools } from '../app-state.service';

@Component({
  selector: 'dg-league-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  guiTools = GuiTools;

  constructor(
    public appStateService: AppStateService,
  ) { }

  ngOnInit(): void {
  }

}
