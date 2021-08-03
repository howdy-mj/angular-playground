import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleActionsComponent } from './life-cycle-actions.component';

describe('LifeCycleActionsComponent', () => {
  let component: LifeCycleActionsComponent;
  let fixture: ComponentFixture<LifeCycleActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
