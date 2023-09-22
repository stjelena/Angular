import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarprofilComponent } from './lekarprofil.component';

describe('LekarprofilComponent', () => {
  let component: LekarprofilComponent;
  let fixture: ComponentFixture<LekarprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekarprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
