import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerService } from 'src/modules/shared/src/services/test-manager/test-manager.service';

@Component({
  selector: 'english-test-header-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="text-xl font-bold">English for kids!</p>
    <div class="flex">
      @for (step of testManagerService.headerCircles(); track step.id) {
      <span
        class="border-2 border-violet-900 h-20 w-20 m-2 rounded-full text-center flex items-center justify-center"
        [ngClass]="{
          'text-white bg-violet-900':
            step.id === testManagerService.currentStepId()
        }"
      >
        {{ step.name }}
      </span>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeaderProgressComponent {
  testManagerService = inject(TestManagerService);
}
