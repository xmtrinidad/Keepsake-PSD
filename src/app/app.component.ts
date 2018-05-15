import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileNavActive = false;
  navItems = ['HOME', 'ABOUT US', 'OUR WORKS', 'JOURNAL', 'CONTACT'];

  onMobileMenuClick() {
    this.mobileNavActive = this.mobileNavActive !== true;
  }
}
