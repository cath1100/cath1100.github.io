// src/app/about/about.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-about', // This is how you'd use this component: <app-about></app-about>
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true
})
export class AboutComponent {

  // You can define properties here to use in your HTML
  pageTitle: string = 'Welcome to My Website!';

  constructor() { }

}
