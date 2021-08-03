import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleOutputComponent } from './life-cycle-output.component';

describe('LifeCycleOutputComponent', () => {
  let component: LifeCycleOutputComponent;
  let fixture: ComponentFixture<LifeCycleOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
