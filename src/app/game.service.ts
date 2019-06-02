import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlienPlayer } from './classes/AlienPlayer';
import { Dice } from './classes/Dice';
import { IAlienPlayerDifficulty } from './classes/AlienPlayerDifficulty';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    public $alienPlayers: Subject<AlienPlayer[]>;
    public d10: Dice;
    public diceResult: number;
    public alienPlayers: AlienPlayer[];
    public difficulty: IAlienPlayerDifficulty;
    public turn: number;

    constructor() {
        this.$alienPlayers = new Subject<AlienPlayer[]>();
        this.turn = 1;
        this.$alienPlayers.subscribe(ap => {
            this.alienPlayers = ap;
        });

        this.d10 = new Dice(10);
        this.d10.result.subscribe(x => {
            this.diceResult = x;
        });
    }
}
