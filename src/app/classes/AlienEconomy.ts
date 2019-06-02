import { IAlienPlayerDifficulty } from './AlienPlayerDifficulty';

export class AlienEconomy {
    public colonies: number;
    public fleet: number;
    public bank: number;
    public tech: number;
    public defense: number;
    public defenseMax: number;
    readonly cpAmount: number;

    constructor(private difficulty: IAlienPlayerDifficulty) {
        this.bank = this.difficulty.startBank;
        this.defenseMax = this.difficulty.maxDefenseCP;
        this.cpAmount = this.difficulty.numberOfCPsPerEcon; 
        this.fleet = 0;
        this.defense = 0;
    }

    addCPtoDefense(): void {
        if (this.defense < this.defenseMax) {
            this.defense += this.cpAmount;
            if (this.defense > this.defenseMax) {
                this.defense = this.defenseMax;
            }
        }
    }

    addCPtoFleet(): void {
        this.fleet += this.cpAmount;
    }

    addCPtoTech(): void {
        this.tech += this.cpAmount;
    }
}
