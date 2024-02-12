import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component'; 
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
import { HeaderContentComponent } from './header-content/header-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevjobsCardComponent,
    FilterBarComponent, HeaderContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devjobs-web-app';

}
