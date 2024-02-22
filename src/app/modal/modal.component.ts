import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../job.service';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  filterLocation: string = '';
  filterFullTime: boolean = false;
  showModal: boolean = false;
  isDarkMode: boolean = false;

  constructor(public jobService: JobService, private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }


  getDarkModeClass(): string {
    return this.isDarkMode ? 'dark-mode' : 'light-mode';
  }

  @Output()
  filterApplied = new EventEmitter<{location: string, fullTime: boolean }>()

  setModalOpen() {
    this.showModal = true
  }

  applyFilteredJobs() {
    this.filterApplied.emit({ location: this.filterLocation, fullTime: this.filterFullTime })
    this.jobService.isModalOpen = false
  }
}
