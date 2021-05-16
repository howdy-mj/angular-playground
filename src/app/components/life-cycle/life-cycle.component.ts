import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy {
  val: number = 0;
  type: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  plus() {
    this.val += 1;
  }

  abstract() {
    this.val -= 1;
  }

  reset() {}
}
