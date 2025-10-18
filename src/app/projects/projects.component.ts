// src/app/projects/projects.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects', // This is how you'd use this component: <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true
})
export class ProjectsComponent {

  // You can define properties here to use in your HTML
  pageTitle: string = 'Welcome to My Website!';

  constructor() { }

}
