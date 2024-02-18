import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioTaskComponent } from './audio-task.component';

describe('AudioTaskComponent', () => {
  let component: AudioTaskComponent;
  let fixture: ComponentFixture<AudioTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
