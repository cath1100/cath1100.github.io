// src/app/navigation/navigation.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation', // This is how you'd use this component: <app-navigation></app-navigation>
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true
})
export class NavigationComponent {

  // You can define properties here to use in your HTML
  pageTitle: string = 'Welcome to My Website!';

  constructor() { }

}
