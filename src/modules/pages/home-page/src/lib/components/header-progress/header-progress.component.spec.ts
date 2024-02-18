import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderProgressComponent } from './header-progress.component';

describe('HeaderProgressComponent', () => {
  let component: HeaderProgressComponent;
  let fixture: ComponentFixture<HeaderProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
