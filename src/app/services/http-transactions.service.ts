import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTransactionsService {

  constructor(private http: HttpClient) { }

  processDetails = {
    hostname: '',
    path: '/assets/demo-data/get-process-details.json',
    method: 'GET',
    request: () => {
      const hostname = this.processDetails.hostname,
        path = this.processDetails.path;
      const url = hostname + path;
      const req = new HttpRequest('GET', url);
      return this.http.request(req);
    }
  };
}
