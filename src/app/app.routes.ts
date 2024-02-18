import { Route } from '@angular/router';
import { HomePageComponent } from 'src/modules/pages/home-page/src/lib/home-page.component';
import { WelcomePageComponent } from 'src/modules/pages/welcome-page/src/lib/welcome-page.component';

export const appRoutes: Route[] = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
];
