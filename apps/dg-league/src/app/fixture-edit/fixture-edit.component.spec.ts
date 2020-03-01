import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureEditComponent } from './fixture-edit.component';

describe('FixtureEditComponent', () => {
  let component: FixtureEditComponent;
  let fixture: ComponentFixture<FixtureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
