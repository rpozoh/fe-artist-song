import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html'
})
export class SongInfoComponent {
  @Input() songInfo : any = {};
  @Input() index : number = 0;
}
