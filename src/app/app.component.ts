import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component'; 
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
import { HeaderContentComponent } from './header-content/header-content.component';
import { ThemeService } from './theme.service';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevjobsCardComponent,
    FilterBarComponent, HeaderContentComponent, LoadMoreBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
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
  }
}
