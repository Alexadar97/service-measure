import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleinformationComponent } from './vehicleinformation.component';

describe('VehicleinformationComponent', () => {
  let component: VehicleinformationComponent;
  let fixture: ComponentFixture<VehicleinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
