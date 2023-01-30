import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  artistName : string = "";
  songId : number = 0;

  constructor() { }
}