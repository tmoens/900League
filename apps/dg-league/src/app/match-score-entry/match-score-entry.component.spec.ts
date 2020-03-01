import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchScoreEntryComponent } from './match-score-entry.component';

describe('MatchScoreEntryComponent', () => {
  let component: MatchScoreEntryComponent;
  let fixture: ComponentFixture<MatchScoreEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchScoreEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchScoreEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
