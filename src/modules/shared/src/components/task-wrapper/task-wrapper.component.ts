import { Component, InputSignal, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerService } from '../../services/test-manager/test-manager.service';
import { AudioTaskComponent } from '../audio-task/audio-task.component';
import { VideoTaskComponent } from '../video-task/video-task.component';
import {
  Task,
  TaskAnswer,
} from '../../services/test-manager/test-manager.interface';

@Component({
  selector: 'english-test-task-wrapper',
  standalone: true,
  template: `
    @switch (task().type) { @case ("video") {
    <english-test-video-task [task]="task()"></english-test-video-task> }
    @case("audio") {
    <english-test-audio-task [task]="task()"></english-test-audio-task> } }

    <div class="video-task">
      <h3 class="font-bold">{{ task().question.title }}</h3>
      <div class="video-task-answers">
        @for (answer of task().question.answers; track answer.text) {
        <button
          class="disabled:bg-stone-600 disabled:opacity-30 py-2 m-2 px-5 inline-block  text-white font-semibold rounded-full shadow-md  "
          [disabled]="!answer.isRight ? disableAnswers() : false"
          (click)="selectAnswer(answer)"
          [ngClass]="[
            disableAnswers() && answer.isRight
              ? 'bg-green-700 hover:bg-green-700'
              : 'bg-violet-500 hover:bg-violet-700'
          ]"
        >
          {{ answer.text }}
        </button>
        }
      </div>
    </div>
    <hr class="my-4" />
  `,
  styles: `
  :host {
    display: block;
  }
`,
  imports: [CommonModule, AudioTaskComponent, VideoTaskComponent],
})
export class TaskWrapperComponent {
  disableAnswers = signal(false);
  task: InputSignal<Task> = input.required();
  testManagerService = inject(TestManagerService);
  selectAnswer(answer: TaskAnswer) {
    if (answer.isRight && !this.disableAnswers()) {
      this.disableAnswers.set(true);
      this.testManagerService.currentAnswersCount.update((v: number) => v + 1);
    }
  }
}
