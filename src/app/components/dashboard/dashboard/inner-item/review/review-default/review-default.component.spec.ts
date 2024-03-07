import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDefaultComponent } from './review-default.component';

describe('ReviewDefaultComponent', () => {
  let component: ReviewDefaultComponent;
  let fixture: ComponentFixture<ReviewDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
