import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnnNlpComponent } from './rnn-nlp.component';

describe('RnnNlpComponent', () => {
  let component: RnnNlpComponent;
  let fixture: ComponentFixture<RnnNlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnnNlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnnNlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
