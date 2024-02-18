import { Component, InputSignal, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../../services/test-manager/test-manager.interface';

@Component({
  selector: 'english-test-word-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4 class="text-lg font-bold mb-2">Word list:</h4>
    <ul>
      @for (word of words(); track word.text) {
      <li>
        <span class="font-bold">{{ word.text }}</span>
        -
        {{ word.translate }}
      </li>
      } @empty {
      <li>List empty</li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class WordListComponent {
  words: InputSignal<Word[]> = input.required();
}
