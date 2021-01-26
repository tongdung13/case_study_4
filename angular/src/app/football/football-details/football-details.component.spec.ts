import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballDetailsComponent } from './football-details.component';

describe('FootballDetailsComponent', () => {
  let component: FootballDetailsComponent;
  let fixture: ComponentFixture<FootballDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
