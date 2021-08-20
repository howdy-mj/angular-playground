import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  title: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.data.pipe(pluck('title'));
    // this.title.subscribe(console.log);
  }
}
