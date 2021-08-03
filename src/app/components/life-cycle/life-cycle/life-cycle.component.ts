import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.count += 1;
  }

  subtract() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }
}
