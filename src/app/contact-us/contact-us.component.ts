import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Output() isOpenEvent = new EventEmitter<Boolean>();
  isOpen: boolean = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  // Listen for 'Escape' key press to close the modal if it's open
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.isOpen) {
      this.closeModal();
    }
  }
}
