import { inherits } from 'util';
import { Difficulty } from '../enums/Difficulty.';

export interface IAlienPlayerDifficulty {
    difficulty: Difficulty;
    numberOfAP: number;
    numberOfCPsPerEcon: number;
    startBank: number;
    maxDefenseCP: number;
}

export class AlienPlayerDifficulty implements IAlienPlayerDifficulty {
    readonly difficulty: Difficulty;
    readonly numberOfAP: number;
    readonly numberOfCPsPerEcon: number;
    readonly startBank: number;
    readonly maxDefenseCP: number;

    constructor(difficulty: Difficulty, numberOfAp: number, numberOfCPsPerEcon: number, startBank: number, maxDefenseCP) {
        this.difficulty = difficulty;
        this.numberOfAP = numberOfAp;
        this.numberOfCPsPerEcon = numberOfCPsPerEcon;
        this.startBank = startBank;
        this.maxDefenseCP = maxDefenseCP;
    }
}
