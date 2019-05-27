import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlienPlayer } from './classes/AlienPlayer';
import { Dice } from './classes/Dice';

@Injectable({
    providedIn: 'root'
})
export class GameServiceService {

    public alienPlayers: Subject<AlienPlayer[]>;
    public d10: Dice;
    public diceResult: number;

    constructor() {
        this.alienPlayers = new Subject<AlienPlayer[]>();
        this.d10 = new Dice(10);
        this.d10.result.subscribe(x => {
            this.diceResult = x;
        });
    }
}
