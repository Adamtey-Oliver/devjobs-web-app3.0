import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'filter-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent { 
// filterLocation: string = ''
// filterFullTime: boolean = false
// showModal: boolean = false

// constructor(public jobService: JobService) {}

// @Output()
// filterApplied = new EventEmitter<{location: string, fullTime: boolean }>()

// setModalOpen() {
//   this.showModal = true
// }

// applyFilteredJobs() {
//   this.filterApplied.emit({ location: this.filterLocation, fullTime: this.filterFullTime })
//   this.jobService.isModalOpen = false
// }

}



// @Output() filterChanged = new EventEmitter<{ filterLocation: string, filterText: string }>();

  // isMobile: boolean = false;
  // isFilterActive: boolean = false;
  // isSearchActive: any;
  // filterLocation: string = '';
  // filterText: string = '';

  // constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone, private jobService: JobService) {
  //   this.checkScreenWidth();

  //   window.addEventListener('resize', () => {
  //     this.ngZone.run(() => {
  //       this.checkScreenWidth();
  //       this.cdr.detectChanges();
  //     });
  //   });
  // }

  // checkScreenWidth() {
  //   this.isMobile = window.innerWidth <= 768;
  // }

  // toggleFilter() {
  //   this.isFilterActive = !this.isFilterActive;
  //   this.cdr.detectChanges();
  // }

  // toggleSearch(): void {
  //   this.isSearchActive = !this.isSearchActive;
  //   this.cdr.detectChanges();
  //   this.handleSearch();
  // }

  // handleSearch(): void {
  //   if (this.filterLocation || this.filterText) {
  //     this.applyFilters();
  //   } else {
  //     console.log('No filters to apply');
  //   }
  // }

  // applyFilters(): void {
  //   this.filterChanged.emit({ filterLocation: this.filterLocation, filterText: this.filterText });
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any): void {
  //   this.checkMobileView();
  // }

  // ngOnInit(): void {
  //   this.checkMobileView();
  // }

  // checkMobileView(): void {
  //   this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint according to your needs
  // }

  // handleMobileFilter(filterType: string): void {
  //   console.log(`Clicked on ${filterType} icon in mobile view`);
  // }

// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { JobService } from '../job.service';

// @Component({
//   selector: 'filter-bar',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './filter-bar.component.html',
//   styleUrls: ['./filter-bar.component.css']
// })
// export class FilterBarComponent {
// filterText: any;
// toggleSearch() {
// throw new Error('Method not implemented.');
// }
// toggleFilter() {
// throw new Error('Method not implemented.');
// }
//   filterLocation: string = ''
//   filterFullTime: boolean = false
//   showModal: boolean = false
// isFilterActive: any;

//   constructor(public jobService: JobService) {}

//   @Output()
//   filterApplied = new EventEmitter<{location: string, fullTime: boolean }>()

//   setModalOpen() {
//     this.showModal = true
//   }

//   applyFilteredJobs() {
//     this.filterApplied.emit({ location: this.filterLocation, fullTime: this.filterFullTime })
//     this.jobService.isModalOpen = false
//   }
// }
