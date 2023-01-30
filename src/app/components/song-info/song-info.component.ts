import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html'
})
export class SongInfoComponent {
  @Input() artistName : string = "";
  @Input() songInfo : any = {};
  @Input() index : number = 0;

  constructor(private router : Router,
              private _sharedService : SharedService) {
  }

  addFavorite() {
    this._sharedService.artistName = this.artistName;
    this._sharedService.songId = this.songInfo[this.index].cancion_id;
    this.router.navigate( ['/favorite'] );
  }
}
