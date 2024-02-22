import { Component, OnInit } from '@angular/core';
import { Jobs } from '../model/jobsdata'; ;
import { JobService } from '../job.service'; ;
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'job-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css'
})
export class JobInfoComponent implements OnInit{
  jobInfo: Jobs = {} as Jobs;
  loading: boolean = false
  error: string = ''

  constructor( private jobService: JobService, 
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let id: string | null = param.get('id')
        if(id !== null) {
          this.getJobInfo(id)
        }
      }
    )
  }

  getJobInfo(id: string) {
    this.loading = true;
    this.jobService.getJobs().subscribe({
      next: (jobs) => {
        const job = jobs.find(job => job.id === id);
        if (job) {
          this.jobInfo = job;
        } else {
          this.error = 'Whoops... 😒 No jobs found.';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error
        this.loading = false
      }
    });
  }

  redirect(site: string) {
    window.location.href = site
  }

  extractDomainName(url: string): string {
    const domain = url.split('//')[1].split('/')[0];
    return domain;
  }
}
