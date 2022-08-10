import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorFormComponent } from './servidor-form.component';

describe('CategoryFormComponent', () => {
  let component: ServidorFormComponent;
  let fixture: ComponentFixture<ServidorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
