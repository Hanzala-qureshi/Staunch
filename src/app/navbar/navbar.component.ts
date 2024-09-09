import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedMenu = 'home'; // Default selected menu item is "Home"
  menuOpen = false; // Track the state of the menu (open/closed)

  // Method to scroll to a specific section and update the selected menu
  scrollTo(elementId: string) {
    // Scroll to the section smoothly
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Update the selected menu item
    this.selectedMenu = elementId;
  }

  // Method to toggle the menu state (open/close)
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
