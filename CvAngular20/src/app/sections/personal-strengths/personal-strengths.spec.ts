import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStrengths } from './personal-strengths';

describe('PersonalStrengths', () => {
  let component: PersonalStrengths;
  let fixture: ComponentFixture<PersonalStrengths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalStrengths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalStrengths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
