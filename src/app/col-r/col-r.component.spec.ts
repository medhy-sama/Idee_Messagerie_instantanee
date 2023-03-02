import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRComponent } from './col-r.component';

describe('ColRComponent', () => {
  let component: ColRComponent;
  let fixture: ComponentFixture<ColRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
