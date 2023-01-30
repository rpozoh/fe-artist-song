import { Injectable } from '@angular/core';
import { Favorite } from '../interfaces/favorite.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  addService(favorite : Favorite) {
    favorite.ranking = favorite.ranking + '/5';
    let body = JSON.stringify ( favorite );
    let headers = new HttpHeaders( {
      'Content-Type' : 'application/json'
      } );
    this.http.post(
      'http://localhost:3000/favoritos',
      body, { headers }
    ).subscribe(data => {
      console.log(data);
    });
  }
}
