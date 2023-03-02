import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColLComponent } from './col-l.component';

describe('ColLComponent', () => {
  let component: ColLComponent;
  let fixture: ComponentFixture<ColLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
