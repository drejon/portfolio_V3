import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyhedronComponent } from './polyhedron.component';

describe('PolyhedronComponent', () => {
  let component: PolyhedronComponent;
  let fixture: ComponentFixture<PolyhedronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolyhedronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolyhedronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
