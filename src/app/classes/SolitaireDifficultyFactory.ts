import { IAlienPlayerDifficulty, AlienPlayerDifficulty } from './AlienPlayerDifficulty';
import { Difficulty } from '../enums/Difficulty.';

export interface IDifficultyFactory {

    create(difficulty: Difficulty);
}

export class SolitaireDifficultyFactory implements IDifficultyFactory {

    private difficluty: Difficulty;

    constructor() {
    }

    create(difficulty: Difficulty) {
        this.difficluty = difficulty;
        switch (difficulty) {
            case Difficulty.Easy:
                return this.easy();
            case Difficulty.Normal:
                return this.normal();
            case Difficulty.Hard:
                return this.hard();
            default:
                break;
        }
    }

    private easy(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(this.difficluty, 2, 5, 100, 50);
    }
    private normal(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(this.difficluty, 2, 10, 100, 50);
    }
    private hard(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(this.difficluty, 2, 15, 100, 50);
    }
}
