import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeparatorComponent } from './view-separator.component';

describe('ViewSeparatorComponent', () => {
  let component: ViewSeparatorComponent;
  let fixture: ComponentFixture<ViewSeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSeparatorComponent],
    });
    fixture = TestBed.createComponent(ViewSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
