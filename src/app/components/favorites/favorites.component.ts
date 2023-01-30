import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FavoritesService } from '../../services/favorites.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  artistName : string = "";
  songId : number = 0;
  addFavoriteForm : FormGroup;

  constructor(private _sharedService : SharedService,
              private _favoritesService : FavoritesService) {
    this.addFavoriteForm = new FormGroup({
      'artistName' : new FormControl( this.artistName, [ Validators.required ]),
      'trackId' : new FormControl('', [ Validators.required]),
      'userName' : new FormControl('', [ Validators.required ]),
      'ranking' : new FormControl('', [ Validators.required ])
    });
  }

  ngOnInit() {
    this.artistName = this._sharedService.artistName;
    this.songId = this._sharedService.songId;
  }

  addFavorite() {
    this._favoritesService.addService(this.addFavoriteForm.value);
  }
}
