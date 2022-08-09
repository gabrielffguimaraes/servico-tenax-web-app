import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresListComponent } from './setores-list.component';

describe('CategoriesListComponent', () => {
  let component: SetoresListComponent;
  let fixture: ComponentFixture<SetoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
