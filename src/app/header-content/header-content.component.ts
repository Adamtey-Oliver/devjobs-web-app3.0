import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'header-content',
  standalone: true,
  imports: [],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
isDarkMode: any;
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
