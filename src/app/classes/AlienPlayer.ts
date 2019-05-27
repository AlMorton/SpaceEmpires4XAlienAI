import { TechLevels } from "./TechLevels";

export class AlienPlayer {
    public colour: string;
    public selected: boolean;
    public hasSeenEnemyFighter: boolean = false;
    public hasSeenEnemyMines: boolean = false;
    public hasSeenEnemyBDs: boolean = false;
    public hasSeenVeteranOrgreaterEnemyShips: boolean = false;
    public hasSeenEnemyRaiders: boolean = false;
    public hasSeenEnemyWithShipSizeTechGreaterThanThree: boolean = false;
    public techLevels: TechLevels;

    constructor(colour: string, techLevel: TechLevels) {
        this.colour = colour;
        this.selected = false;
        this.techLevels = techLevel;
    }
}

export class AlienEconomy
{
    public colonies: number;
    public fleet: number;
    public bank: number;
    public tech: number;
    public defenseMax: number;
    public fleetLaunch: number;
}

