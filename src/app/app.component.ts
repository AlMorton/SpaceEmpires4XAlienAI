import { Component } from '@angular/core';
import { GameService } from './game.service';
import { AlienPlayer } from './classes/AlienPlayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceEmpires4XAlienAI';
  
  constructor() { }
}
