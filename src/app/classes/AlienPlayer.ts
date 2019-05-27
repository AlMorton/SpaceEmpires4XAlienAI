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
    public alienTechLevels: TechLevels;

    constructor(colour: string, techLevel: TechLevels) {
        this.colour = colour;
        this.selected = false;
        this.alienTechLevels = techLevel;
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

