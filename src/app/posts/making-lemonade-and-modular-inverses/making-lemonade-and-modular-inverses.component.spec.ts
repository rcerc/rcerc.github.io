import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingLemonadeAndModularInversesComponent } from './making-lemonade-and-modular-inverses.component';

describe('MakingLemonadeAndModularInversesComponent', () => {
  let component: MakingLemonadeAndModularInversesComponent;
  let fixture: ComponentFixture<MakingLemonadeAndModularInversesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakingLemonadeAndModularInversesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      MakingLemonadeAndModularInversesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
