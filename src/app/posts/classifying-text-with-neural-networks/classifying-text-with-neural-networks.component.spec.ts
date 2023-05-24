import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyingTextWithNeuralNetworksComponent } from './classifying-text-with-neural-networks.component';

describe('ClassifyingTextWithNeuralNetworksComponent', () => {
  let component: ClassifyingTextWithNeuralNetworksComponent;
  let fixture: ComponentFixture<ClassifyingTextWithNeuralNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassifyingTextWithNeuralNetworksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ClassifyingTextWithNeuralNetworksComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
