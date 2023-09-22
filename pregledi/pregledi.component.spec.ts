import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreglediComponent } from './pregledi.component';

describe('PreglediComponent', () => {
  let component: PreglediComponent;
  let fixture: ComponentFixture<PreglediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreglediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreglediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
