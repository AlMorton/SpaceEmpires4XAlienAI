import { TechLevels } from "./TechLevels";
import { AlienEconomy } from './AlienEconomy';

export class AlienPlayer {
    public colour: string;
    public selected: boolean;
    public hasSeenEnemyFighter: boolean = false;
    public hasSeenEnemyMines: boolean = false;
    public hasSeenEnemyBDs: boolean = false;
    public hasSeenVeteranOrGreaterEnemyShips: boolean = false;
    public hasSeenEnemyRaiders: boolean = false;
    public hasSeenEnemyWithShipSizeTechGreaterThanThree: boolean = false;
    public numberOfColonies: number;
    public techLevels: TechLevels;
    public economy: AlienEconomy;

    constructor(colour: string, techLevel: TechLevels) {
        this.colour = colour;
        this.selected = false;
        this.techLevels = techLevel;
    }
}

class Turn 
{
    readonly number: number;
    readonly fleetLaunch: Array<number>;
    readonly fleet: Array<number>;
    readonly tech: Array<number>;
    readonly defense: Array<number>;

    constructor(number: number, fleetLaunch: Array<number>,fleet: Array<number>, 
                tech: Array<number>, defense: Array<number>) 
    {
        this.number = number;              
        this.fleetLaunch = fleetLaunch;
        this.fleet = fleet;
        this.tech = tech;
        this.defense = defense;
    }
}