import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {
  activeTab: string = 'vision'; // Default to 'Vision'

  // Method to set the active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}