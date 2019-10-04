import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

constructor(private http: HttpClient) { }
  get(link: string) {
    return this.http.get('localhost:5000/').toPromise();
  }
}
