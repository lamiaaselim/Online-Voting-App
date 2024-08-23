import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceHomeComponent } from './audience-home.component';

describe('AudienceHomeComponent', () => {
  let component: AudienceHomeComponent;
  let fixture: ComponentFixture<AudienceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudienceHomeComponent]
    });
    fixture = TestBed.createComponent(AudienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
