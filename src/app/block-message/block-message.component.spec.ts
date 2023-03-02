import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMessageComponent } from './block-message.component';

describe('BlockMessageComponent', () => {
  let component: BlockMessageComponent;
  let fixture: ComponentFixture<BlockMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
