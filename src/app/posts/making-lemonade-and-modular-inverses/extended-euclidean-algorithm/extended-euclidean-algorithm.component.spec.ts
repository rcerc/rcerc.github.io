import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedEuclideanAlgorithmComponent } from './extended-euclidean-algorithm.component';

describe('ExtendedEuclideanAlgorithmComponent', () => {
  let component: ExtendedEuclideanAlgorithmComponent;
  let fixture: ComponentFixture<ExtendedEuclideanAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedEuclideanAlgorithmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtendedEuclideanAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
