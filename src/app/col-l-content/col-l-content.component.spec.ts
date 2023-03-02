import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColLContentComponent } from './col-l-content.component';

describe('ColLContentComponent', () => {
  let component: ColLContentComponent;
  let fixture: ComponentFixture<ColLContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColLContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColLContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
