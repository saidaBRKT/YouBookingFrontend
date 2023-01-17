import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberDisponibleComponent } from './chamber-disponible.component';

describe('ChamberDisponibleComponent', () => {
  let component: ChamberDisponibleComponent;
  let fixture: ComponentFixture<ChamberDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamberDisponibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
