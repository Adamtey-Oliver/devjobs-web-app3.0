import { TestBed } from '@angular/core/testing';

import { DevJobsService } from './devjobs.service.service';

describe('DevjobsServiceService', () => {
  let service: DevJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
