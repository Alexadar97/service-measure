import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListApproverComponent } from './request-list-approver.component';

describe('RequestListApproverComponent', () => {
  let component: RequestListApproverComponent;
  let fixture: ComponentFixture<RequestListApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
