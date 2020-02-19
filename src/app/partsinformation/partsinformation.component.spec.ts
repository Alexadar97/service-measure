import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsinformationComponent } from './partsinformation.component';

describe('PartsinformationComponent', () => {
  let component: PartsinformationComponent;
  let fixture: ComponentFixture<PartsinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
