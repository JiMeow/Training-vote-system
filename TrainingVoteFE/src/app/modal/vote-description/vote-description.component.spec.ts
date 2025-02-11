import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDescriptionComponent } from './vote-description.component';

describe('VoteDescriptionComponent', () => {
  let component: VoteDescriptionComponent;
  let fixture: ComponentFixture<VoteDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
