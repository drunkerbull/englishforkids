import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamTaskComponent } from './exam-task.component';

describe('ExampTaskComponent', () => {
  let component: ExamTaskComponent;
  let fixture: ComponentFixture<ExamTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExamTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
