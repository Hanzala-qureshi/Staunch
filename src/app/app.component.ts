import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionComponent } from './vision/vision.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    IndustriesComponent,
    SlickCarouselModule,
    ContactUsComponent,
    AboutUsComponent,
    VisionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'my-project';
  isOpen?: Boolean;
  @ViewChild('aboutus') aboutus!: ElementRef;

  scrollToSection(section: string) {
    if (section === 'section1') {
      this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setIsOpen($event: Boolean) {
    this.isOpen = $event;
  }
}
