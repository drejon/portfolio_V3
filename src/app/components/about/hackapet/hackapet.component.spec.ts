import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackapetComponent } from './hackapet.component';

describe('HackapetComponent', () => {
  let component: HackapetComponent;
  let fixture: ComponentFixture<HackapetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackapetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
