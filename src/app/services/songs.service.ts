import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SongService {
  constructor(private http: HttpClient) { }

  getSongs(params : string) {
    let headers = new HttpHeaders({});
    return this.http.get(`http://localhost:3000/search_tracks?name=${params}`, {
      headers : headers
    });
  }
}