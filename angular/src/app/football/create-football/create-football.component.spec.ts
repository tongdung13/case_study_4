import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFootballComponent } from './create-football.component';

describe('CreateFootballComponent', () => {
  let component: CreateFootballComponent;
  let fixture: ComponentFixture<CreateFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFootballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
