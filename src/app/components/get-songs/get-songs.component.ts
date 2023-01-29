import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector : 'app-get-songs',
  templateUrl : './get-songs.component.html'
})
export class GetSongsComponent implements OnInit {

  getSongsForm : FormGroup;
  categoryChecked : any;

  constructor( private router : Router,
               private activatedRoute : ActivatedRoute) {
    this.getSongsForm = new FormGroup({
      'artistName' : new FormControl( '', [ Validators.required ]),
    });
  }

  ngOnInit() {
  }

  getSongs() {
    console.log("OK");
  }
}
