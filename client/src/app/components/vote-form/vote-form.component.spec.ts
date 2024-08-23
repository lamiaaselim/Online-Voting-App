import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteFormComponent } from './vote-form.component';

describe('VoteFormComponent', () => {
  let component: VoteFormComponent;
  let fixture: ComponentFixture<VoteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteFormComponent]
    });
    fixture = TestBed.createComponent(VoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
