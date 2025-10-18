// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // <-- Make sure this is imported

export const routes: Routes = [
  {
    path: '', // <-- This is the "home" route
    component: HomeComponent // <-- It points to HomeComponent
  }
  // ... other routes
];
