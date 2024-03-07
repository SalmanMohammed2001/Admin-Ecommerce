import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDefaultComponent } from './discount-default.component';

describe('DiscountDefaultComponent', () => {
  let component: DiscountDefaultComponent;
  let fixture: ComponentFixture<DiscountDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
