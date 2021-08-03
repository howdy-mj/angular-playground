import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-text-directive',
  templateUrl: './text-directive.component.html',
  styleUrls: ['./text-directive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextDirectiveComponent implements OnInit {
  title = 'Angular 구조 및 사용법';

  constructor() {}

  ngOnInit(): void {}
}
