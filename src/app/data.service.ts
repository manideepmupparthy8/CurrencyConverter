import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class DataService {
      constructor(private http: HttpClient) {}
      // API_KEY = "d050f0b13e2ce7fb402736b978dc69cf";
      public getCurrency(){
        return this.http.get(`http://api.currencylayer.com/live?access_key=eb404e00522d96365bc3d7d9164b0350`); }
        // return this.http.get(`http://api.exchangeratesapi.io/v1/latest?access_key=fe4f857b84ec071e7a1d2fc3e8d6e3fe`);      }
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
