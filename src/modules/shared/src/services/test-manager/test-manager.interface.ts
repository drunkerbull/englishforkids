import { StepType, TaskType } from './test-manager.enum';

export interface DB {
  steps: (LessonStep | ExamStep)[];
}
export interface LessonStep {
  id: number;
  name: string;
  type: StepType;
  desc: string;
  words: Word[];
  tasks: Task[];
}
export interface ExamStep {
  id: number;
  name: string;
  type: StepType;
  desc: string;
}

export interface Word {
  text: string;
  translate: string;
}
export interface Task {
  type: TaskType;
  url: string;
  subtitles: Subtitles;
  question: {
    title: string;
    answers: TaskAnswer[];
  };
}
export interface TaskAnswer {
  text: string;
  isRight: boolean;
}
export interface Subtitles {
  [b: number]: Subtitle;
}
export interface Subtitle {
  start: number;
  end: number;
  text: string;
}
export interface WordTask {
  title: string;
  translate: string;
  disableAnswers: boolean;
  answers: TaskAnswer[];
}
