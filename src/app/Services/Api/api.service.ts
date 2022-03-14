import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly serverUrl = environment.serverUrl;

  //avem nevoie de HttpClient pentru a face requesturi. HttpClient este un serviciu care se injecteaza in contructor
  constructor(private readonly httpClient: HttpClient) {
  }

  //fiecare request din asta intoarce ceva ce se numeste observable
  get<T>(path: string, params = {}): Observable<any> {
    return this.httpClient.get<T>(`${this.serverUrl}${path}`, {params})
  }

  put<T>(path: string, body = {}): Observable<any> {
    return this.httpClient.put<T>(`${this.serverUrl}${path}`, body)
  }

  post<T>(path: string, body = {},params = {}): Observable<any> {
    return this.httpClient.post<T>(`${this.serverUrl}${path}`, body,{params})
  }

  delete<T>(path: string): Observable<any> {
    return this.httpClient.delete<T>(`${this.serverUrl}${path}`)
  }
}
