import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSuggestionsComponent } from './liste-suggestions.component';

describe('ListeSuggestionsComponent', () => {
  let component: ListeSuggestionsComponent;
  let fixture: ComponentFixture<ListeSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSuggestionsComponent]
    });
    fixture = TestBed.createComponent(ListeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
