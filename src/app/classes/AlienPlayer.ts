import { TechLevels } from "./TechLevels";

export class AlienPlayer {
    public colour: string;
    public selected: boolean;
    public hasSeenEnemyFighter: boolean;
    public hasSeenEnemyMines: boolean;
    public hasSeenEnemyBDs: boolean;
    public hasSeenVeteranOrgreaterEnemyShips: boolean;
    public hasSeenEnemyRaiders: boolean;
    public hasSeenEnemyWithShipSizeTechGreaterThanThree: boolean;
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

