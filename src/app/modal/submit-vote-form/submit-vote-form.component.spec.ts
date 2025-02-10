import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitVoteFormComponent } from './submit-vote-form.component';

describe('SubmitVoteFormComponent', () => {
  let component: SubmitVoteFormComponent;
  let fixture: ComponentFixture<SubmitVoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitVoteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitVoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
