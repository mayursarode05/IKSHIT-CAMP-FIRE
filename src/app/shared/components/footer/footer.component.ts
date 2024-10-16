import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fa = { faFacebook, faTwitter, faInstagram, faLinkedinIn, faLinkedin }

  isVisible: boolean = false;
  // value: any;  //we can store the value of the given ratings by the user
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollTop > 100; // Adjust the scroll position as needed
  }
  scrollToTop(): void {   // for the
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
