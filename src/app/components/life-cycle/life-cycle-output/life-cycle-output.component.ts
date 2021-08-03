import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-output',
  templateUrl: './life-cycle-output.component.html',
  styleUrls: ['./life-cycle-output.component.scss'],
})
export class LifeCycleOutputComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input() count: number;

  constructor() {
    console.log('output: constructor');
  }

  ngOnChanges(): void {
    console.log('output: ngOnChanges');
  }

  ngOnInit(): void {
    console.log('output: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('output: ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('output: ngOnDestroy');
  }
}
