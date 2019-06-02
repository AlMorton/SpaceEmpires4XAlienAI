import { TechLevels } from "./TechLevels";
import { AlienEconomy } from './AlienEconomy';

export class AlienPlayer {
    public colour: string;
    public hasSeenEnemyFighter: boolean = false;
    public hasSeenEnemyMines: boolean = false;
    public hasSeenEnemyBDs: boolean = false;
    public hasSeenVeteranOrGreaterEnemyShips: boolean = false;
    public hasSeenEnemyRaiders: boolean = false;
    public hasSeenEnemyWithShipSizeTechGreaterThanThree: boolean = false;
    public numberOfColonies: number;
    public techLevels: TechLevels;
    public economy: AlienEconomy;

    constructor(colour: string, techLevel: TechLevels, economy: AlienEconomy) {
        this.colour = colour;
        this.techLevels = techLevel;
        this.economy = economy;
        this.numberOfColonies = 0;
    }
}




