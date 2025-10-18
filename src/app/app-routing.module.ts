// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Import your components
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { NotFoundComponent } from './not-found/not-found.component';

// 2. Define your routes
const routes: Routes = [
  // When the URL is empty ('...github.io/'), show the HomeComponent
  { path: '', component: HomeComponent, title: 'Home Page' },

  // When the URL is '...github.io/about', show the AboutComponent
//   { path: 'about', component: AboutComponent, title: 'About Me' },

  // When the URL is '...github.io/contact', show the ContactComponent
//   { path: 'contact', component: ContactComponent, title: 'Contact' },

  // This is the "wildcard" route. If the URL matches nothing else,
  // show the NotFoundComponent.
  // **This MUST be the LAST route in the array.**
//   { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];

@NgModule({
  // 3. Register the routes with the Angular Router
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
