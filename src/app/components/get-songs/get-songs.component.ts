import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SongService } from '../../services/songs.service';

@Component({
  selector : 'app-get-songs',
  templateUrl : './get-songs.component.html',
  providers : [SongService],
})
export class GetSongsComponent implements OnInit {

  artistInfo : any[] = [];
  getSongsForm : FormGroup;
  categoryChecked : any;

  constructor( private router : Router,
               private activatedRoute : ActivatedRoute,
               private _songService : SongService) {
    this.getSongsForm = new FormGroup({
      'artistName' : new FormControl( '', [ Validators.required ]),
    });
  }

  ngOnInit() {
    console.log(this.artistInfo);
  }

  getSongs() {
    this._songService.getSongs(this.getSongsForm.controls['artistName'].value).subscribe(songsData => {
      this.artistInfo.push(songsData);
      console.log(this.artistInfo);
    });
  }
}
