import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../../services/songs.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  providers : [SongService]
})
export class ArtistInfoComponent implements OnInit {

  artistName : string = "";
  artistInfo : any = {};
  loading = true;

  constructor(private _songService : SongService,
              private activatedRoute : ActivatedRoute){
                this.activatedRoute.params.subscribe( artistName => {
                  this.artistName = artistName['artistName'];
                  this._songService.getSongs(this.artistName).subscribe(songsData => {
                    this.artistInfo = songsData;
                    this.loading = false;
                });
              })
  }

  ngOnInit() {
  }
}