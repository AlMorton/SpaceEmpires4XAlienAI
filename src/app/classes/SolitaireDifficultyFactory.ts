import { IAlienPlayerDifficulty, AlienPlayerDifficulty } from './AlienPlayerDifficulty';

export interface IDifficultyFactory {
    easy(): IAlienPlayerDifficulty;
    medium(): IAlienPlayerDifficulty;
    hard(): IAlienPlayerDifficulty;
}

export class SolitaireDifficultyFactory implements IDifficultyFactory {
    constructor() {
    }
    easy(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(2, 5, 100, 50);
    }
    medium(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(2, 10, 100, 50);
    }
    hard(): IAlienPlayerDifficulty {
        return new AlienPlayerDifficulty(2, 15, 100, 50);
    }
}
