import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://donatello.to/api/v1/me', {
      headers: {
        'X-Token': '07c7c0ce54cbe78160cd1a3488350740',
      },
    });
  }
}
