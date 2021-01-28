import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFootballComponent } from './update-football.component';

describe('UpdateFootballComponent', () => {
  let component: UpdateFootballComponent;
  let fixture: ComponentFixture<UpdateFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFootballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
