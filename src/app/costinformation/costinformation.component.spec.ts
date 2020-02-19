import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostinformationComponent } from './costinformation.component';

describe('CostinformationComponent', () => {
  let component: CostinformationComponent;
  let fixture: ComponentFixture<CostinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
