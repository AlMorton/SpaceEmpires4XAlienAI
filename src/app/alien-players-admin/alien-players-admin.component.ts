import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AlienPlayer } from '../classes/AlienPlayer';
import { EconomyPhase, EconomyRollResult } from '../classes/EconomyRollResult';

@Component({
    selector: 'app-alien-players-admin',
    templateUrl: './alien-players-admin.component.html',
    styleUrls: ['./alien-players-admin.component.scss']
})
export class AlienPlayersAdminComponent implements OnInit {

    public alienPlayers: Array<AlienPlayer>;
    public ecoPhase: EconomyPhase;

    constructor(private gameService: GameService) {

        this.alienPlayers = this.gameService.alienPlayers;

        console.log(this.gameService.difficulty);
        this.ecoPhase = new EconomyPhase(this.gameService, new EconomyRollResult());
    }

    nextTurn() {
        this.gameService.turn++;
    }
    ngOnInit() {

    }

}
