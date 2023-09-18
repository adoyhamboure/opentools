import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowGeneratorComponent } from './box-shadow-generator.component';

describe('BoxShadowGeneratorComponent', () => {
  let component: BoxShadowGeneratorComponent;
  let fixture: ComponentFixture<BoxShadowGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxShadowGeneratorComponent],
    });
    fixture = TestBed.createComponent(BoxShadowGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
