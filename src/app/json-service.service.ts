import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get<any>('../assets/IND.geo.json');
  }
}
