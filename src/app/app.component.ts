import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component'; // <-- 1. Import NavigationComponent
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [         // <-- 3. Import dependencies directly
    CommonModule,
    RouterOutlet,    // <-- Needed for <router-outlet>
    RouterLink,      // <-- Needed for [routerLink]
    RouterLinkActive, // <-- Needed for [routerLinkActive]
    NavigationComponent, // <-- Import NavigationComponent
    AboutComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
  currentDate: Date = new Date();
}
