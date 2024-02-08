import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevjobsHeaderComponent } from './devjobs-header.component';

describe('DevjobsHeaderComponent', () => {
  let component: DevjobsHeaderComponent;
  let fixture: ComponentFixture<DevjobsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevjobsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevjobsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
