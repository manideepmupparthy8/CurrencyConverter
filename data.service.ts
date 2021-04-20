import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class DataService {
      constructor(private http: HttpClient) {}
      API_KEY = "d050f0b13e2ce7fb402736b978dc69cf";
      public getCurrency(){
        return this.http.get(`http://data.fixer.io/api/latest?access_key=d050f0b13e2ce7fb402736b978dc69cf`);
      }
      get(url: string): Observable<any> {
        return this.http.get(url).pipe(map(res => res));
      }
      post(url: string, body: any) {
        console.log("service Hit", url);
        return this.http.post(url, body).pipe(map(res => res));
      }
      postTextResponse(url: string, body: any) {
        return this.http.post(url, body, { responseType: "text" }).pipe(map(res => res));
      }
      getTextResponse(url: string): Observable<any> {
        return this.http.get(url, { responseType: "text" }).pipe(map(res => res));
      }
    }
