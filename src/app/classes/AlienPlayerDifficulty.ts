import { inherits } from 'util';
import { Difficulty } from '../enums/Difficulty.';

export interface IAlienPlayerDifficulty {
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
