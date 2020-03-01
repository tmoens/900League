import { Component } from '@angular/core';
import { Message } from '@dg-league/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dg-league-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
