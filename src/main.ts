import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // <-- New function
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // <-- Injects routing into the app
  ]
}).catch((err) => console.error(err));
