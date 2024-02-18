import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'english-test-welcome-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: ` <div class="text-center">
    <h1>Welcome to "English for kids"!</h1>
    <a
      [routerLink]="['/home']"
      class="py-2 m-2 px-5 inline-block bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
    >
      Let's start
    </a>
  </div>`,
  styles: `
    :host {
     
    }
  `,
})
export class WelcomePageComponent {}
