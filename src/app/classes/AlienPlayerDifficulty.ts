import { inherits } from 'util';
import { Difficulty } from '../enums/Difficulty.';

interface IAlienPlayerDifficulty {
    Difficulty: Difficulty;
    NumberOfAP: number;
    NumberOfCPsPerEcon: number;
    StartBank: number;
    MaxDefenseCP: number;
}

export class AlienPlayerDifficulty implements IAlienPlayerDifficulty {
    readonly Difficulty: Difficulty;
    readonly NumberOfAP: number;
    readonly NumberOfCPsPerEcon: number;
    readonly StartBank: number;
    readonly MaxDefenseCP: number;

    constructor(numberOfAp: number, numberOfCPsPerEcon: number, startBank: number, maxDefenseCP) {

        this.NumberOfAP = numberOfAp;
        this.NumberOfCPsPerEcon = numberOfCPsPerEcon;
        this.StartBank = startBank;
        this.MaxDefenseCP = maxDefenseCP;
    }
}

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