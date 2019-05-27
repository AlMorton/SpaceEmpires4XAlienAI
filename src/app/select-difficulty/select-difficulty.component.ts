import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { SolitaireDifficultyFactory, IDifficultyFactory } from '../classes/SolitaireDifficultyFactory';
import { TechLevels } from "../classes/TechLevels";

@Component({
    selector: 'app-select-difficulty',
    templateUrl: './select-difficulty.component.html',
    styleUrls: ['./select-difficulty.component.scss']
})
export class SelectDifficultyComponent implements OnInit {

    private _difficultyFactory: IDifficultyFactory;
    private colours: Array<string> = ['blue', 'green', 'yellow', 'red'];
    difficultyEnum = Difficulty;

    public alienPlayers: Array<AlienPlayer> = [];
    public options: Array<string>;
    public numberSelected: number;
    public selectedDifficulty: Difficulty;

    constructor(difficultyFactory: SolitaireDifficultyFactory) {
        this._difficultyFactory = difficultyFactory;
        this.numberSelected = 0;
    }

    alienPlayerSelected($event: boolean, player: AlienPlayer): void {

        if (player.selected) {
            this.numberSelected++;
        }
        if (!player.selected) {
            this.numberSelected--;
        }
    }

    onStartGame() {
        let aliens = []; 
        this.alienPlayers.forEach((el) => {
            if (el.selected === true) {
                aliens.push(el);
            }
        });
        console.log(this.selectedDifficulty);
        console.log(aliens);
    }

    ngOnInit() {
        this.colours.forEach(colour => {
            this.alienPlayers.push(new AlienPlayer(colour));
        });
        this.selectedDifficulty = Difficulty.Normal;
    }
}

class AlienPlayer {

    public colour: string;
    public selected: boolean;
    public hasSeenEnemyFighter: boolean;
    public hasSeenEnemyMines: boolean;
    public hasSeenEnemyBDs: boolean;
    public hasSeenVeteranOrgreaterEnemyShips: boolean;
    public hasSeenEnemyRaiders: boolean;
    public hasSeenEnemyWithShipSizeTechGreaterThanThree: boolean;
    public alienTechLevels: TechLevels;

    constructor(colour: string) {
        this.colour = colour;
        this.selected = false;
        this.alienTechLevels = new TechLevels();
    }
}

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe
    implements PipeTransform {
    transform(data: Object) {
        const keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    }
}
