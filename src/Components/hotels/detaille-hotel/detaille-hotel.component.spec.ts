import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleHotelComponent } from './detaille-hotel.component';

describe('DetailleHotelComponent', () => {
  let component: DetailleHotelComponent;
  let fixture: ComponentFixture<DetailleHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailleHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
