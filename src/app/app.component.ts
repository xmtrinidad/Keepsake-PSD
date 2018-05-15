import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems = ['HOME', 'ABOUT US', 'OUR WORKS', 'JOURNAL', 'CONTACT'];
}
