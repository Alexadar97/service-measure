import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverPreviewComponent } from './approver-preview.component';

describe('ApproverPreviewComponent', () => {
  let component: ApproverPreviewComponent;
  let fixture: ComponentFixture<ApproverPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
