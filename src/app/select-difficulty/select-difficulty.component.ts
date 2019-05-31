import { Component, OnInit } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { SolitaireDifficultyFactory, IDifficultyFactory } from '../classes/SolitaireDifficultyFactory';
import { AlienPlayer } from '../classes/AlienPlayer';
import { GameService } from '../game.service';
import { TechLevels } from '../classes/TechLevels';

@Component({
    selector: 'app-select-difficulty',
    templateUrl: './select-difficulty.component.html',
    styleUrls: ['./select-difficulty.component.scss']
})
export class SelectDifficultyComponent implements OnInit {

    private _difficultyFactory: IDifficultyFactory;
    private _colours: Array<string> = ['blue', 'green', 'yellow', 'red'];
    difficultyEnum = Difficulty;

    public alienPlayers: Array<AlienPlayer> = [];
    public options: Array<string>;
    public numberSelected: number;
    public selectedDifficulty: Difficulty;

    constructor(public gameService: GameService, difficultyFactory: SolitaireDifficultyFactory) {

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
        
        const selectedAlienPlayers: AlienPlayer[] = [];
        this.alienPlayers.forEach((el) => {
            if (el.selected === true) {
                selectedAlienPlayers.push(el);
            }
        });

        this.gameService.$alienPlayers
            .next(selectedAlienPlayers);        
    }

    ngOnInit() {
        this._colours.forEach(colour => {
            this.alienPlayers.push(new AlienPlayer(colour, new TechLevels()));
        });
        this.selectedDifficulty = Difficulty.Normal;
    }

    ngOnDestroy() {
        this.onStartGame();
      }
}


