import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManageComponent } from './create-manage.component';

describe('CreateManageComponent', () => {
  let component: CreateManageComponent;
  let fixture: ComponentFixture<CreateManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
