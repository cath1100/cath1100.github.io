// src/app/home/home.component.ts

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home', // This is how you'd use this component: <app-home></app-home>
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // You can define properties here to use in your HTML
  pageTitle: string = 'Welcome to My Website!';

  constructor() { }

}
