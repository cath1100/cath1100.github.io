// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // <-- Make sure this is imported
import { AboutComponent } from './about/about.component'; // <-- Make sure this is imported
import { ProjectsComponent } from './projects/projects.component'; // <-- Make sure this is imported

export const routes: Routes = [
  {
    path: '', // <-- This is the "home" route
    component: HomeComponent // <-- It points to HomeComponent
  },
  {
    path: 'about', // <-- This is the "about" route
    component: AboutComponent // <-- Make sure AboutComponent is imported
  },
  {
    path: 'projects', // <-- This is the "projects" route
    component: ProjectsComponent // <-- Make sure ProjectsComponent is imported
  }
  // ... other routes
];
