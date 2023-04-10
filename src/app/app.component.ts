import { Component, OnInit } from '@angular/core';
import { RequestsService } from './core/Requests/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'donate-widget';

  constructor(private requestsService: RequestsService) {}

  ngOnInit() {
    this.requestsService.getData().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
