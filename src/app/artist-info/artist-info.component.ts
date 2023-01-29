import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html'
})
export class ArtistInfoComponent {
  @Input() artistName : string = "";
  @Input() artistInfo : any = {};
}
