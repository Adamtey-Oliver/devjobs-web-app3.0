// import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NgZone } from '@angular/core';

// @Component({
//   selector: 'filter-bar',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './filter-bar.component.html',
//   styleUrl: './filter-bar.component.css'
// })
// export class FilterBarComponent {
//   isMobile: boolean = false;

//   // Filter
// isFilterActive: boolean = false;
// isSearchActive: any;
// constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
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

// // Search Btn

// toggleSearch(): void {
//   if (this.isMobile) {
//     this.isSearchActive = !this.isSearchActive;
//     this.cdr.detectChanges();
//   } else {
//     console.log('Search Button Clicked');
//   }
// }
  
//   searchQuery: any;

//   @HostListener('window:resize', ['$event'])
//   onResize(event: any): void {
//     this.checkMobileView();
//   }

//   ngOnInit(): void {
//     this.checkMobileView();
//   }

//   checkMobileView(): void {
//     this.isMobile = window.innerWidth <= 480;
//   }

//   handleMobileFilter(filterType: string): void {
//     console.log(`Clicked on ${filterType} icon in mobile view`);
//   }
// }


import { ChangeDetectorRef, Component, HostListener, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZone } from '@angular/core';

@Component({
  selector: 'filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @Output() filterChanged = new EventEmitter<{ filterLocation: string, filterText: string }>();

  isMobile: boolean = false;
  isFilterActive: boolean = false;
  isSearchActive: any;
  filterLocation: string = '';
  filterText: string = '';

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
    this.checkScreenWidth();

    window.addEventListener('resize', () => {
      this.ngZone.run(() => {
        this.checkScreenWidth();
        this.cdr.detectChanges();
      });
    });
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleFilter() {
    this.isFilterActive = !this.isFilterActive;
    this.cdr.detectChanges();
  }

  toggleSearch(): void {
    if (this.isMobile) {
      this.isSearchActive = !this.isSearchActive;
      this.cdr.detectChanges();
    } else {
      console.log('Search Button Clicked');
    }
  }

  applyFilters(): void {
    // Emit the event with the filter values
    this.filterChanged.emit({ filterLocation: this.filterLocation, filterText: this.filterText });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkMobileView();
  }

  ngOnInit(): void {
    this.checkMobileView();
  }

  checkMobileView(): void {
    this.isMobile = window.innerWidth <= 480;
  }

  handleMobileFilter(filterType: string): void {
    console.log(`Clicked on ${filterType} icon in mobile view`);
  }
}
