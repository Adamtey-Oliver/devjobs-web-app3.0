// import { Component, Input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';  
// import { RouterLink } from '@angular/router';
// import { JobService } from '../job.service';
// import { Jobs } from '../model/jobsdata';

// @Component({
//   selector: 'devjobs-card',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './devjobs-card.component.html',
//   styleUrl: './devjobs-card.component.css'
// })
// export class DevjobsCardComponent implements OnInit {

//   jobs: Jobs[] = [];
//   filteredJobs: any;

//   constructor(private jobService: JobService) {}

//   ngOnInit(): void {
//       this.jobService.getJobs().subscribe(job => {
//         this.jobs = job
//       })
//   }
// }

// devjobs-card.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Jobs } from '../model/jobsdata';

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './devjobs-card.component.html',
  styleUrls: ['./devjobs-card.component.css']
})
export class DevjobsCardComponent implements OnInit {

  jobs: Jobs[] = [];
  filteredJobs: Jobs[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(job => {
      this.jobs = job;
      this.filteredJobs = [...this.jobs]; // Initialize filteredJobs with all jobs
    });
  }

  applyFilters(filters: { filterLocation: string, filterText: string }): void {
    // Custom filtering logic based on your data structure
    this.filteredJobs = this.jobs.filter(job => {
      // Implement your custom logic here, for example:
      return job.location.toLowerCase().includes(filters.filterLocation.toLowerCase()) &&
             (job.position.toLowerCase().includes(filters.filterText.toLowerCase()) ||
              job.company.toLowerCase().includes(filters.filterText.toLowerCase()));
    });
  }
}
