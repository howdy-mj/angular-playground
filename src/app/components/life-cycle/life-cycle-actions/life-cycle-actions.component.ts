import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-actions',
  templateUrl: './life-cycle-actions.component.html',
  styleUrls: ['./life-cycle-actions.component.scss'],
})
export class LifeCycleActionsComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Output() add = new EventEmitter();
  @Output() subtract = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {
    console.log('actions: constructor');
  }

  ngOnChanges(): void {
    console.log('actions: ngOnChanges');
  }

  ngOnInit(): void {
    console.log('actions: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('actions: ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('actions: ngOnDestroy');
  }

  onAdd() {
    this.add.emit();
  }

  onSubtract() {
    this.subtract.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
