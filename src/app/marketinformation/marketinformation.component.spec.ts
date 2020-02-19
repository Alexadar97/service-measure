import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketinformationComponent } from './marketinformation.component';

describe('MarketinformationComponent', () => {
  let component: MarketinformationComponent;
  let fixture: ComponentFixture<MarketinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
