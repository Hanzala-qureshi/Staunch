import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  slides = [
    {
      title: 'Staffing and Resource Augmentation',
      description: 'Our values define Staunch Consulting Solution...',
      backgroundImage: '../../assets/hero1.jpg',
    },
    {
      title: 'Support and Maintenance',
      description: 'We guide you in delivering excellence...',
      backgroundImage: '../../assets/hero2.jpg',
    },
    {
      title: 'Quality Assurance and Testing',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero3.jpg',
    },
    {
      title: 'Software Development',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero4.jpg',
    },
    {
      title: 'Industry 4.0 Services',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero5.jpg',
    },
    {
      title: 'Strategic Consulting and Advisory',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero6.jpg',
    },
    {
      title: 'Agile Transformation Consulting',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero7.jpg',
    },
    {
      title: 'Business Processing Outsourcing',
      description: 'Trust in every IT solution...',
      backgroundImage: '../../assets/hero8.jpg',
    },
  ];

  currentSlide = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
  getSlideTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }
}
