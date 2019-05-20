import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('/assets/demo-data/get-process-details.json')
      .toPromise()
      .then((res: any) => <Car[]>res.data)
      .then((data) => { return data; });
  }
}
