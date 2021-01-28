import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManageComponent } from './update-manage.component';

describe('UpdateManageComponent', () => {
  let component: UpdateManageComponent;
  let fixture: ComponentFixture<UpdateManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
