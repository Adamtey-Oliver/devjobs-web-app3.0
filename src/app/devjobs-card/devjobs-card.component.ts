import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Jobs } from '../model/jobsdata';

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './devjobs-card.component.html',
  styleUrl: './devjobs-card.component.css'
})
export class DevjobsCardComponent implements OnInit {

  jobs: Jobs[] = [];
  filteredJobs: any;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
      this.jobService.getJobs().subscribe(job => {
        this.jobs = job
      })
  }
}
