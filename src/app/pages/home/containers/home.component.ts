import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos$: Observable<
    {
      id: number;
      title: string;
      userId: number;
      completed: boolean;
    }[]
  >;

  constructor(private api: ApiService) {
    this.todos$ = this.api.get('/todos');
    this.todos$.subscribe(console.log);
  }

  ngOnInit(): void {}
}
