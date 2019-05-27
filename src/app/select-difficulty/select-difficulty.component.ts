import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { SolitaireDifficultyFactory, IDifficultyFactory } from '../classes/SolitaireDifficultyFactory';
import { AlienPlayer } from '../classes/AlienPlayer';
import { GameServiceService } from '../game-service.service';
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

    constructor(public gameService: GameServiceService, difficultyFactory: SolitaireDifficultyFactory) {

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

        this.gameService.alienPlayers.subscribe(x => {
            console.log(x);

        });
        const selectedAlienPlayers: AlienPlayer[] = [];
        this.alienPlayers.forEach((el) => {
            if (el.selected === true) {
                selectedAlienPlayers.push(el);
            }
        });

        this.gameService.alienPlayers
            .next(selectedAlienPlayers);
    }

    ngOnInit() {
        this._colours.forEach(colour => {
            this.alienPlayers.push(new AlienPlayer(colour, new TechLevels()));
        });
        this.selectedDifficulty = Difficulty.Normal;
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
