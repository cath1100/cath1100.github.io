// src/app/navigation/navigation.component.ts

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navigation', // This is how you'd use this component: <app-navigation></app-navigation>
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
   imports: [         // <-- 3. Import dependencies directly
    RouterOutlet,    // <-- Needed for <router-outlet>
    RouterLink,      // <-- Needed for [routerLink]
    RouterLinkActive, // <-- Needed for [routerLinkActive]
  ],
  standalone: true
})
export class NavigationComponent {

  // You can define properties here to use in your HTML
  pageTitle: string = 'Welcome to My Website!';

  constructor() { }

}
