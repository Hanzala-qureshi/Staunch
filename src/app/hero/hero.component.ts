import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subscription, timer } from 'rxjs';
import { ViewportScroller } from '@angular/common'; // Import ViewportScroller

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  private slideSubscription!: Subscription;

  constructor(private viewportScroller: ViewportScroller) {} // Inject ViewportScroller

  slides = [
    {
      title: 'Staffing and Resource Augmentation',
      description: 'Individual and personalized approach.',
      backgroundImage: '../../assets/hero1.jpg',
      targetId: 'staffing-and-resource-augmentation', // Add corresponding ID
    },
    {
      title: 'Support and Maintenance',
      description: 'Empowering businesses to achieve operational excellence.',
      backgroundImage: '../../assets/hero2.jpg',
      targetId: 'support-and-maintenance',
    },
    {
      title: 'Quality Assurance and Testing',
      description: 'We ensure your applications meet the highest quality user experiences.',
      backgroundImage: '../../assets/hero3.jpg',
      targetId: 'quality-assurance-and-testing',
    },
    {
      title: 'Software Development',
      description: 'Committed to delivering innovative, high-quality software solutions that drive business success.',
      backgroundImage: '../../assets/hero4.jpg',
      targetId: 'software-development',
    },
    {
      title: 'Industry 4.0 Services',
      description: 'Helping businesses harness the power of technology.',
      backgroundImage: '../../assets/hero5.jpg',
      targetId: 'industry-4-0-services',
    },
    {
      title: 'Strategic Consulting and Advisory',
      description: 'We offer unparalleled guidance to help you to unlock growth potential.',
      backgroundImage: '../../assets/hero6.jpg',
      targetId: 'strategic-consulting-and-advisory',
    },
    {
      title: 'Agile Transformation Consulting',
      description: 'We empower businesses to enhance their agility.',
      backgroundImage: '../../assets/hero7.jpg',
      targetId: 'agile-transformation-consulting',
    },
    {
      title: 'Business Processing Outsourcing',
      description: 'Partner with us to experience unparalleled service and support.',
      backgroundImage: '../../assets/hero8.jpg',
      targetId: 'business-processing-outsourcing',
    },
  ];

  currentSlide = 0;

  ngOnInit() {
    // Store the subscription
    this.slideSubscription = timer(0, 10000).subscribe(() => {
      this.nextSlide();
    });
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

  scrollToService(targetId: string) {
    // Scroll to the target section in the service component
    this.viewportScroller.scrollToAnchor(targetId);
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
    }
  }
}
