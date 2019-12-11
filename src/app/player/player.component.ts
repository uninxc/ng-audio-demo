import {Component, OnInit, ViewChild} from '@angular/core';
import {PlyrComponent} from 'ngx-plyr';
import Plyr from 'plyr';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Plyr;
  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  @ViewChild(PlyrComponent, {static: false})
  plyr: PlyrComponent;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }
}
