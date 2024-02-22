import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Jobs } from '../model/jobsdata';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ModalComponent],
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