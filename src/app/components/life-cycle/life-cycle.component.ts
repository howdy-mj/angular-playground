import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnInit {
  val: number = 0;

  constructor() {
    console.log('constructor');
    console.log('constructor: this.val', this.val);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('ngOnInit: this.val', this.val);
  }

  plus() {
    this.val += 1;
  }

  abstract() {
    this.val -= 1;
  }
}
