import { inherits } from 'util';

interface IAlienPlayerDifficulty {
    NumberOfAP: number;
    NumberOfCPsPerEcon: number;
    StartBank: number;
    MaxDefenseCP: number;
}

export class AlienPlayerDifficulty implements AlienPlayerDifficulty {
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