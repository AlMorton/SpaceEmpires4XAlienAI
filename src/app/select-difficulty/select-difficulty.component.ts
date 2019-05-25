import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { SolitaireDifficultyFactory, IDifficultyFactory } from "../classes/SolitaireDifficultyFactory";

@Component({
    selector: 'app-select-difficulty',
    templateUrl: './select-difficulty.component.html',
    styleUrls: ['./select-difficulty.component.scss']
})
export class SelectDifficultyComponent implements OnInit {

    private _difficultyFactory: IDifficultyFactory;
    difficultyEnum = Difficulty;
    public alienPlayers: Array<AlienPlayer> = [];
    public options: Array<string>;
    private colours: Array<string> = ['blue', 'green', 'yellow', 'red'];

    constructor(difficultyFactory: SolitaireDifficultyFactory) {
        this._difficultyFactory = difficultyFactory;
    }

    selectDifficulty(selected: Difficulty): void {

        console.log(selected);
    }

    ngOnInit() {
        this.colours.forEach(colour => {
            this.alienPlayers.push(new AlienPlayer(colour));
        });
    }
}

class AlienPlayer {
    public colour: string;
    public selected: boolean;
    constructor(colour: string) {
        this.colour = colour;
        this.selected = false;
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
