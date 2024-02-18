import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from 'src/modules/pages/welcome-page/src/lib/welcome-page.component';

@Component({
  standalone: true,
  imports: [WelcomePageComponent, RouterModule],
  selector: 'english-test-root',
  template: ` <div
    class="min-w-[720px] max-w-[720px] flex items-center justify-center flex-col"
  >
    <router-outlet></router-outlet>
  </div>`,
  styles: `
  :host {
      @apply flex items-center justify-center py-2 min-h-screen	
    }`,
})
export class AppComponent {}
