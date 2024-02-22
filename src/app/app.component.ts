import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
import { HeaderContentComponent } from './header-content/header-content.component';
import { ThemeService } from './theme.service';
import { JobInfoComponent } from './job-info/job-info.component'; 
import { JobService } from './job.service';
import { Jobs } from './model/jobsdata';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevjobsCardComponent, HeaderContentComponent, FormsModule, JobInfoComponent, ModalComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  jobs: Jobs[] = [];
  filteredJobs: Jobs[] = [];
  isDarkMode: boolean = false;
  jobHeader!: HTMLElement;
  jobsInfoElements: NodeListOf<HTMLElement> | null = null;
  jobFooter: HTMLElement | null = null;
  companySiteButton!: HTMLButtonElement;
  modalOverlay!: HTMLElement;
  modalContainer!: HTMLElement;
  
  constructor(private jobService: JobService, private themeService: ThemeService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      (data) => {
        this.jobs = data;
        this.filteredJobs = [...this.jobs]; 
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );

    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.updateTheme();
    });
  }


  updateTheme() {
    const body = document.body;
    body.style.backgroundColor = this.isDarkMode ? '#121721' : '#F2F2F2';
    body.style.color = this.isDarkMode ? 'white' : 'black';

    const filterBar = document.querySelector('.filter-bar') as HTMLElement;
    if (filterBar) {
      filterBar.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
      filterBar.style.color = this.isDarkMode ? 'white' : 'black';
    }

    const jobsCard = document.querySelectorAll('.jobs-card') as NodeListOf<HTMLElement>;
    jobsCard.forEach((card) => {
      card.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
      card.style.color = this.isDarkMode ? 'white' : 'black';
    });


    // input field color
    const filtertext = document.querySelector('.filter-content .filter-text') as HTMLElement;
    if (filtertext) {
        filtertext.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
        filtertext.style.color = this.isDarkMode ? 'white' : 'black';
        filtertext.style.border = 'none'; 
        filtertext.style.caretColor = this.isDarkMode ? 'blue' : 'defaultCursorColor'; 
    }
    
    const filterlocation = document.querySelector('.filter-content .filter-location') as HTMLElement;
    if (filterlocation) {
        filterlocation.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
        filterlocation.style.color = this.isDarkMode ? 'white' : 'black';
        filterlocation.style.border = 'none';
        filterlocation.style.caretColor = this.isDarkMode ? 'blue' : 'defaultCursorColor'; 
    }


    this.companySiteButton = document.querySelector('.company-site') as HTMLButtonElement;

    if (this.companySiteButton) {
      // Sets initial styles
      this.companySiteButton.style.backgroundColor = this.isDarkMode ? '#6E8098' : '#F2F2F2';
      this.companySiteButton.style.color = this.isDarkMode ? 'white' : 'black';

      // Add hover styles
      this.companySiteButton.addEventListener('mouseover', () => {
        this.companySiteButton.style.backgroundColor = this.isDarkMode ? '#9DAEC2' : '#939BF4';
      });

      // Reset to initial styles on mouseout
      this.companySiteButton.addEventListener('mouseout', () => {
        this.companySiteButton.style.backgroundColor = this.isDarkMode ? '#6E8098' : '#F2F2F2';
      });
    }

    // Apply styles for .job-header
    this.jobHeader = document.querySelector('.job-header') as HTMLElement;
    if (this.jobHeader) {
      this.jobHeader.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
      this.jobHeader.style.color = this.isDarkMode ? 'white' : 'black';
    }


      // Apply styles for .jobs-info
    this.jobsInfoElements = document.querySelectorAll('.jobs-info') as NodeListOf<HTMLElement>;
    if (this.jobsInfoElements) {
      console.log('Found jobsInfo elements:', this.jobsInfoElements);
      this.jobsInfoElements.forEach((info) => {
        info.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
        info.style.color = this.isDarkMode ? 'white' : 'black';
      });
    } else {
      console.error('Could not find jobsInfo elements.');
    }


     // Apply styles for .jobs-footer
    this.jobFooter = document.querySelector('.jobs-footer') as HTMLElement;
    if (this.jobFooter) {
      this.jobFooter.style.backgroundColor = this.isDarkMode ? '#19202D' : '#F2F2F2';
      this.jobFooter.style.color = this.isDarkMode ? 'white' : 'black';
    }
 
  }

}
