import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuclideanAlgorithmComponent } from './euclidean-algorithm.component';

describe('EuclideanAlgorithmComponent', () => {
  let component: EuclideanAlgorithmComponent;
  let fixture: ComponentFixture<EuclideanAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuclideanAlgorithmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuclideanAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
