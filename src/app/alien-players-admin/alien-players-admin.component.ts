import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AlienPlayer } from '../classes/AlienPlayer';

@Component({
  selector: 'app-alien-players-admin',
  templateUrl: './alien-players-admin.component.html',
  styleUrls: ['./alien-players-admin.component.scss']
})
export class AlienPlayersAdminComponent implements OnInit {

  public alienPlayers: Array<AlienPlayer>;

  constructor(private gameService: GameService) {

    this.alienPlayers = this.gameService.alienPlayers;
    console.log(this.gameService.difficulty);
  }

  ngOnInit() {

  }

}
