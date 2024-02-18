import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerService } from '../../services/test-manager/test-manager.service';
import {
  TaskAnswer,
  Word,
  WordTask,
} from '../../services/test-manager/test-manager.interface';

@Component({
  selector: 'english-test-exam-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!isStarted()) {
    <h4>
      Read and remember the words from the "Word List". After that, you will
      need to translate the words in the test correctly
    </h4>
    <button
      class="py-2 m-2 px-5 inline-block bg-violet-500 hover:bg-violet-700 text-white font-semibold rounded-full shadow-md"
      (click)="startTest()"
    >
      Start
    </button>
    } @else {
    <div>
      @for (word of words(); track word.title) {
      <div class="my-2">
        <h3 class="font-bold">What is "{{ word.translate }}"?</h3>
        <div class="video-task-answers">
          @for (answer of word.answers; track answer.text) {
          <button
            class="disabled:bg-stone-600 disabled:opacity-30 py-2 m-2 px-5 inline-block  text-white font-semibold rounded-full shadow-md  "
            [disabled]="!answer.isRight ? word.disableAnswers : false"
            (click)="selectAnswer(word, answer)"
            [ngClass]="[
              word.disableAnswers && answer.isRight
                ? 'bg-green-700 hover:bg-green-700'
                : 'bg-violet-500 hover:bg-violet-700'
            ]"
          >
            {{ answer.text }}
          </button>
          }
        </div>
      </div>
      <hr />
      }
    </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ExamTaskComponent implements OnInit {
  words: WritableSignal<WordTask[]> = signal([]);
  isStarted = signal(false);
  testManagerService = inject(TestManagerService);
  ngOnInit(): void {}
  startTest() {
    this.isStarted.set(true);
    const words: Word[] = this.testManagerService.words();
    const wordTask = words.map(({ text, translate }, index) => {
      let cloneWords = [...words];
      cloneWords.splice(index, 1);
      cloneWords = cloneWords.sort(() => 0.5 - Math.random()); // shuffle array
      return {
        title: text,
        translate: translate,
        disableAnswers: false,
        answers: [
          { text, isRight: true },
          { text: cloneWords[0].text, isRight: false },
          { text: cloneWords[1].text, isRight: false },
        ].sort(() => 0.5 - Math.random()), // shuffle array
      };
    });
    this.words.set(wordTask);
    this.testManagerService.currentAnswersCount.set(0);
    this.testManagerService.words.set([]);
    this.testManagerService.countWordsRightsAnswers.set(wordTask.length);
  }
  selectAnswer(word: WordTask, answer: TaskAnswer) {
    if (answer.isRight && !word.disableAnswers) {
      word.disableAnswers = true;
      this.testManagerService.currentAnswersCount.update((v: number) => v + 1);
    }
  }
}
