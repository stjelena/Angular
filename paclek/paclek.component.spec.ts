import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaclekComponent } from './paclek.component';

describe('PaclekComponent', () => {
  let component: PaclekComponent;
  let fixture: ComponentFixture<PaclekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaclekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaclekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
