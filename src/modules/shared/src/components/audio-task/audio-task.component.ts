import {
  AfterViewInit,
  Component,
  ElementRef,
  InputSignal,
  OnDestroy,
  ViewChild,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, fromEvent, tap } from 'rxjs';
import {
  Subtitle,
  Subtitles,
  Task,
} from '../../services/test-manager/test-manager.interface';

@Component({
  selector: 'english-test-audio-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <audio #p class="h-24">
      <source [src]="task().url" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    @if(showSubtitle()){
    <div class="flex p-2 items-center justify-center text-violet-700">
      {{ currentTextSubtitles() }}
    </div>
    }
    <div class="flex items-center justify-center">
      <button
        class="flex py-1 m-1 text-sm px-2 border-2 border-violet-500  font-semibold rounded-full shadow-md hover:bg-violet-700 hover:text-white"
        [ngClass]="[!p.paused ? 'bg-violet-700 text-white' : 'text-black']"
        (click)="p.paused ? p.play() : p.pause()"
      >
        Play/Pause
      </button>
      <button
        class="flex py-1 m-1 text-sm px-2 border-2  border-violet-500 text-black font-semibold rounded-full shadow-md hover:bg-violet-700 hover:text-white"
        (click)="p.currentTime = 0"
      >
        Reset
      </button>
      <button
        class="flex py-1 m-1 text-sm px-2 border-2  border-violet-500 font-semibold rounded-full shadow-md hover:bg-violet-700 hover:text-white"
        (click)="toggleSubtitles()"
        [ngClass]="[showSubtitle() ? 'bg-violet-700 text-white' : 'text-black']"
      >
        Subtitles
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
      @apply mb-2 p-2 border-2 border-violet-500 rounded-md
    }
  `,
})
export class AudioTaskComponent implements AfterViewInit, OnDestroy {
  // SAME VideoTaskComponent
  @ViewChild('p') player!: ElementRef<HTMLMediaElement>;
  task: InputSignal<Task> = input.required();
  showSubtitle = signal(false);
  currentTextSubtitles = signal('---');
  private bufferSub: Subtitle | undefined = undefined;
  private sub = new Subscription();
  ngAfterViewInit(): void {
    this.prepeareSubtitles();
  }
  prepeareSubtitles() {
    if (!this.task()?.subtitles) {
      return;
    }
    const timeSub = fromEvent(this.player.nativeElement, 'timeupdate')
      .pipe(
        tap((res: any) => {
          // I don't know interface. 'Event'?
          if (!this.showSubtitle()) {
            return;
          }
          const currentSecond = Math.floor(res.target.currentTime);
          const s = this.task()?.subtitles?.[currentSecond];
          if (s) {
            this.bufferSub = s;
          }
          if (this.bufferSub) {
            if (
              currentSecond >= this.bufferSub?.start &&
              currentSecond <= this.bufferSub?.end
            ) {
              this.currentTextSubtitles.set(this.bufferSub.text);
            } else {
              this.currentTextSubtitles.set('---');
              this.bufferSub = undefined;
            }
          }
        })
      )
      .subscribe();
    this.sub.add(timeSub);
  }
  toggleSubtitles() {
    if (this.showSubtitle()) {
      this.showSubtitle.set(false);
      this.currentTextSubtitles.set('---');
      this.bufferSub = undefined;
    } else {
      this.showSubtitle.set(true);
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
