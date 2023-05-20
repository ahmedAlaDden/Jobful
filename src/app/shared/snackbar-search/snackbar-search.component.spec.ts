import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarSearchComponent } from './snackbar-search.component';

describe('SnackbarSearchComponent', () => {
  let component: SnackbarSearchComponent;
  let fixture: ComponentFixture<SnackbarSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarSearchComponent]
    });
    fixture = TestBed.createComponent(SnackbarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
