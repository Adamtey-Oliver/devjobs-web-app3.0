import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevjobsCardComponent } from './devjobs-card.component';

describe('DevjobsCardComponent', () => {
  let component: DevjobsCardComponent;
  let fixture: ComponentFixture<DevjobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevjobsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevjobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
