import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  filterLocation: string = ''
  filterFullTime: boolean = false
  showModal: boolean = false

  constructor(public jobService: JobService) {}

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
