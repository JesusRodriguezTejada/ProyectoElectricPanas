import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorCodigosComponent } from './generador-codigos.component';

describe('GeneradorCodigosComponent', () => {
  let component: GeneradorCodigosComponent;
  let fixture: ComponentFixture<GeneradorCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorCodigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
