import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  isMobile: boolean = false;

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
    // Implement your logic when clicking the filter or search icons in mobile view
    console.log(`Clicked on ${filterType} icon in mobile view`);
  }
}
