import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { IDifficultyFactory, SolitaireDifficultyFactory } from '../classes/AlienPlayerDifficulty';

@Component({
    selector: 'app-select-difficulty',
    templateUrl: './select-difficulty.component.html',
    styleUrls: ['./select-difficulty.component.scss']
})
export class SelectDifficultyComponent implements OnInit {

    private _difficultyFactory: IDifficultyFactory;
    difficultyEnum = Difficulty;
    public colours: Array<string>;

    public options: Array<string>;

    constructor(difficultyFactory: SolitaireDifficultyFactory) {
        this._difficultyFactory = difficultyFactory;
        this.colours = ['blue', 'green', 'yellow', 'red'];
    }

    selectDifficulty(selected: Difficulty): void {
        this._difficultyFactory.easy();
        console.log(selected);
    }

    ngOnInit() {
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
