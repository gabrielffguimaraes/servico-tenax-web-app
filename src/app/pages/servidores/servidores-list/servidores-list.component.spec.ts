import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresListComponent } from './categories-list.component';

describe('CategoriesListComponent', () => {
  let component: ServidoresListComponent;
  let fixture: ComponentFixture<ServidoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
