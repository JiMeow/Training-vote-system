import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteReportFormComponent } from './vote-report-form.component';

describe('VoteReportFormComponent', () => {
  let component: VoteReportFormComponent;
  let fixture: ComponentFixture<VoteReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteReportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
