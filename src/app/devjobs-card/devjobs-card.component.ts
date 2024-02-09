import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devjobs-card.component.html',
  styleUrl: './devjobs-card.component.css'
})
export class DevjobsCardComponent {

  // @Input()
  // title: string;
}
