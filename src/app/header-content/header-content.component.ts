import { Component } from '@angular/core';

@Component({
  selector: 'header-content',
  standalone: true,
  imports: [],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
  isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.style.backgroundColor = this.isDarkMode ? '#121721' : 'white';
    document.body.style.color = this.isDarkMode ? 'white' : '#121721';
  }
}
