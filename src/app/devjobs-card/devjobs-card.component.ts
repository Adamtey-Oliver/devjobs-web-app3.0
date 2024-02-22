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
import { FormsModule } from '@angular/forms';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterBarComponent, FormsModule, ModalComponent],
  templateUrl: './devjobs-card.component.html',
  styleUrls: ['./devjobs-card.component.css']
})
export class DevjobsCardComponent implements OnInit {


  jobs: Jobs[] = []
  loading: boolean = true
  error: string = ''
  filteredJobs: Jobs[] = [];
  filterTitle: string = ''
  filterLocation: string = ''
  fillterFullTime: boolean = false
// isFilterActive: any;


  ///delet

  // isMobile: boolean = false;
  // isFilterActive: boolean = false;
  // isSearchActive: any;
  //  toggleSearch(): void {
  //   this.isSearchActive = !this.isSearchActive;

  // }
//delet end


  constructor (public jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: (job) => {
        this.jobs = job
        this.filteredJobs = job
        this.loading = false 
      },
      error: (error) => {
        this.error = error
        this.loading = false
      }
    })
  }

  filterJobs(): void {
    this.filteredJobs = this.jobs.filter(job => {
      const titleMatch = job.position.toLowerCase().includes(this.filterTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(this.filterLocation.toLowerCase());
      const fullTimeMatch = !this.fillterFullTime || job.contract.toLowerCase() === 'full time';
      return titleMatch && locationMatch && fullTimeMatch;
    })
  }

  applyFilters(filters: { location: string, fullTime: boolean }): void {
    this.filterLocation = filters.location
    this.fillterFullTime = filters.fullTime
    this.filterJobs()
  }
}

//   jobs: Jobs = {} as Jobs;
//   loading: boolean = false
//   error: string = ''
// filteredJobs: any;

//   constructor(private jobService: JobService, private activatedRoute: ActivatedRoute,) 
//   {};
  

//   ngOnInit(): void {
//     this.activatedRoute.paramMap.subscribe(
//       (param) => {
//         let id: string | null = param.get('id')
//         if(id !== null) {
//           this.getJob(id)
//         }
//       }
//     )
//   }

//   getJob(id: string) {
//     throw new Error('Method not implemented.');
//   }

//   getJobDetails(id: string) {
//     this.loading = true;
//     this.jobService.getJobs().subscribe({
//       next: (jobs) => {
//         const job = jobs.find(job => job.id === id);
//         if (job) {
//           this.jobs = job;
//         } else {
//           this.error = 'Whoops... 😒 No jobs found.';
//         }
//         this.loading = false;
//       },
//       error: (error) => {
//         this.error = error
//         this.loading = false
//       }
//     });
//   }

//   redirect(site: string) {
//     window.location.href = site
//   }

//   extractDomainName(url: string): string {
//     const domain = url.split('//')[1].split('/')[0];
//     return domain;
//   }
// }
