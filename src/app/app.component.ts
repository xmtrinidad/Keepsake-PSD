import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mobileNavActive = false;
  navItems = ['HOME', 'ABOUT US', 'OUR WORKS', 'JOURNAL', 'CONTACT'];
  socialIcons: {icon: string, color: string}[] = [
    {
      icon: 'fas fa-rss',
      color: '#fbaa56',
    },
    {
      icon: 'fab fa-facebook',
      color: '#667eb7',
    },
    {
      icon: 'fab fa-twitter',
      color: '#6cc1eb',
    },
    {
      icon: 'fab fa-pinterest',
      color: '#da535b',
    },
  ];

  ngOnInit() {
    if (window.innerWidth >= 768) {
      this.mobileNavActive = true;
    }
  }

  onMobileMenuClick() {
    this.mobileNavActive = this.mobileNavActive !== true;
  }
  onResize(event) {
    const isBreakPoint = event.target.innerWidth >= 768;
    if (this.mobileNavActive && !isBreakPoint) {
      return;
    }
    this.mobileNavActive = event.target.innerWidth >= 768;
  }


}
