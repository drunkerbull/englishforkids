import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskWrapperComponent } from 'src/modules/shared/src/components/task-wrapper/task-wrapper.component';
import { TestManagerService } from 'src/modules/shared/src/services/test-manager/test-manager.service';
import { WordListComponent } from 'src/modules/shared/src/components/word-list/word-list.component';
import { ExamTaskComponent } from 'src/modules/shared/src/components/exam-task/exam-task.component';
import { HeaderProgressComponent } from './components/header-progress/header-progress.component';
import { LessonStep } from 'src/modules/shared/src/services/test-manager/test-manager.interface';

@Component({
  selector: 'english-test-home-page',
  standalone: true,
  template: `
    <div class="flex w-2/3 flex-col">
      <div
        class="rounded-md bg-white p-2 border-b-4 border-[#eaeaea] w-full flex flex-col justify-center items-center"
      >
        <english-test-header-progress></english-test-header-progress>
      </div>
      <div class="p-2 min-h-[250px] rounded-md bg-white">
        <div class="lesson-wrapper">
          <h2 class="text-md mb-2 font-bold">
            {{ testManagerService.currentStepData()?.desc }}
          </h2>
          <div class="tasks">
            @switch (testManagerService.currentStepData()?.type) {
            @case("lesson") { @for (task of lessonStep().tasks; track task.url)
            {
            <english-test-task-wrapper
              [task]="task"
            ></english-test-task-wrapper>
            } } @case ("exam") {
            <english-test-exam-task></english-test-exam-task>
            } }
          </div>
          <button
            class="disabled:bg-stone-600 disabled:opacity-30 flex py-2 m-2 ml-auto px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            (click)="nextStep()"
            [disabled]="!testManagerService.isNextStepBtnEnable()"
          >
            Go to next step
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex p-2 w-1/3 border-l-4 rounded-md bg-white border-[#eaeaea] flex-col min-h-full "
    >
      <english-test-word-list
        [words]="testManagerService.words()"
      ></english-test-word-list>
    </div>
  `,
  styles: `
    :host {
      @apply flex w-full mb-auto
    }
  `,
  imports: [
    CommonModule,
    TaskWrapperComponent,
    WordListComponent,
    ExamTaskComponent,
    HeaderProgressComponent,
  ],
})
export class HomePageComponent {
  testManagerService = inject(TestManagerService);
  lessonStep = computed(
    () => this.testManagerService.currentStepData() as LessonStep
  );
  nextStep() {
    this.testManagerService.nextStep();
  }
}
