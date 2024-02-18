import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import dbApp from './db';
import { LessonStep, ExamStep, DB, Word } from './test-manager.interface';
@Injectable({
  providedIn: 'root',
})
export class TestManagerService {
  db: WritableSignal<DB> = signal(dbApp);
  currentStepId = signal(0);
  words: WritableSignal<Word[]> = signal([]);
  countWordsRightsAnswers = signal(99);
  currentAnswersCount = signal(0);
  isNextStepBtnEnable = computed(() =>
    this.currentStepData()?.type === 'lesson'
      ? this.currentAnswersCount() ===
        (this.currentStepData() as LessonStep)?.tasks?.length
      : this.currentAnswersCount() === this.countWordsRightsAnswers()
  );
  headerCircles = computed(() =>
    this.db().steps.map(({ name, id }: LessonStep | ExamStep) => ({ name, id }))
  );
  currentStepData = computed(() =>
    this.db().steps.find(({ id }) => this.currentStepId() === id)
  );
  nextStep() {
    this.words.update((v: Word[]) => {
      return [
        ...v,
        ...((this.currentStepData() as LessonStep)?.words || []),
      ] as Word[];
    });
    this.currentStepId.update((v) => v + 1);
    this.currentAnswersCount.set(0);
    this.countWordsRightsAnswers.set(99);
  }
}
