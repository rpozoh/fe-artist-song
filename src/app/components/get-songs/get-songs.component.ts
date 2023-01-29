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

  constructor( private router : Router ) {
    this.getSongsForm = new FormGroup({
      'artistName' : new FormControl( '', [ Validators.required ]),
    });
  }

  ngOnInit() {
  }

  getSongs() {
    this.router.navigate( ['/artist', this.getSongsForm.controls['artistName'].value] );
  }
}
