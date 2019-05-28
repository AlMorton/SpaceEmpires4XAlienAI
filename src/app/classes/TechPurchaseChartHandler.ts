import { TechTypes } from '../enums/TechTypes';
import { Dice } from './Dice';

export class TechPurchaseChartHandler {
    private techRollChart: Array<Array<TechTypes>>;
    private dice: Dice;
    rollOnChart(): TechTypes {
        // Minus one as we are referencing the index
        const rollOne = this.dice.rollDice() - 1;
        const rollTwo = this.dice.rollDice() - 1;
        return this.techRollChart[rollOne][rollTwo];
    }
    constructor() {
        this.dice = new Dice(10);
        this.techRollChart = [
            [TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack],
            [TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack, TechTypes.Attack],
            [TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense],
            [TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense, TechTypes.Defense],
            [TechTypes.Fighter, TechTypes.Fighter, TechTypes.Fighter, TechTypes.Fighter, TechTypes.Scan, TechTypes.MineSweeper, TechTypes.MineSweeper, TechTypes.MineSweeper, TechTypes.MineSweeper, TechTypes.MineSweeper],
            [TechTypes.Fighter, TechTypes.Fighter, TechTypes.Fighter, TechTypes.Fighter, TechTypes.Scan, TechTypes.Tactics, TechTypes.Tactics, TechTypes.SecurityForces, TechTypes.SecurityForces, TechTypes.SecurityForces],
            [TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics, TechTypes.Tactics],
            [TechTypes.MilitaryAcademy, TechTypes.MilitaryAcademy, TechTypes.MilitaryAcademy, TechTypes.MilitaryAcademy, TechTypes.PointDefense, TechTypes.PointDefense, TechTypes.PointDefense, TechTypes.Cloaking, TechTypes.Cloaking, TechTypes.Cloaking],
            [TechTypes.Boarding, TechTypes.Boarding, TechTypes.Boarding, TechTypes.Boarding, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize],
            [TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize, TechTypes.ShipSize]
        ];
    }
}
