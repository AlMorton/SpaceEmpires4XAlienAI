import { GameService } from './../game.service';
import { AlienEconomy } from './AlienEconomy';

export class EconomyPhase {

    private economyRolls: Array<number>;

    constructor(private gameService: GameService, private economyRollResult: EconomyRollResult) {
        this.setEconRolls();
    }

    calcAlienPlayersEconomy() {

        const turn = this.gameService.turn;
        const numberOfRolls = this.economyRolls[turn - 1];

        this.gameService.alienPlayers.forEach(ap => {
            const totalRolls = numberOfRolls + ap.numberOfColonies;

            for (let i = 0; i < totalRolls; i++) {
                this.economyRoll(ap.economy);
            }
        });
    }

    private economyRoll(economy: AlienEconomy) {

        const roll = this.gameService.d10.rollDice();
        const turn = this.gameService.turn;

        if (this.economyRollResult.fleetResult(turn, roll)) {
            // Add CP to Fleet Column according to difficulty
            economy.addCPtoFleet();
        }
        if (this.economyRollResult.techResult(turn, roll)) {
            // Add CP to Tech Column according to difficulty
            economy.addCPtoTech();
        }
        if (this.economyRollResult.defenseResult(turn, roll)) {
            // Add DOUBLE CP to Defense Column according to difficulty, up to MAX
            for (let i = 0; i < 2; i++) {
                economy.addCPtoDefense();
            }
        }
    }

    private setEconRolls(): void {
        this.economyRolls = [
            2, 2, 2, 2, 2,
            3, 3, 3, 3,
            4, 4, 4, 4, 4,
            5, 5, 5, 5, 5, 5
        ];
    }
}

export class EconomyRollResult {

    private fleet: Array<Array<number>>;
    private tech: Array<Array<number>>;
    private defense: Array<Array<number>>;

    constructor() {
        this.setArrays();
    }
    fleetResult(turn: number, roll: number): boolean {
        const rangeForTurn = this.fleet[turn - 1];
        return this.result(rangeForTurn, roll);
    }
    techResult(turn: number, roll: number): boolean {
        const rangeForTurn = this.tech[turn - 1];
        return this.result(rangeForTurn, roll);
    }
    defenseResult(turn: number, roll: number): boolean {
        const rangeForTurn = this.defense[turn - 1];
        return this.result(rangeForTurn, roll);
    }
    private result(rangeForTurn: number[], roll: number): boolean {
        const from = rangeForTurn[0];
        const to = rangeForTurn[1];
        if (from <= roll && roll <= to) {
            return true;
        }
        return false;
    }
    private setArrays() {
        this.fleet = [
            [1, 1], [1, 3], [1, 3], [1, 4], [1, 6], [1, 4], [1, 5], [1, 5], [1, 5], [1, 7],
            [1, 7], [1, 7], [1, 6], [1, 6], [1, 7], [1, 7], [1, 8], [1, 8], [1, 9], [1, 9],
        ];
        this.tech = [
            [2, 10], [4, 10], [4, 8], [5, 8], [7, 9], [5, 9], [6, 9], [6, 9], [6, 9], [8, 9],
            [8, 9], [8, 9], [7, 10], [7, 10], [8, 10], [8, 10], [9, 10], [9, 10], [10, 10], [10, 10],
        ];
        this.defense = [
            [0, 0], [0, 0], [9, 10], [9, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10],
            [10, 10], [10, 10], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
        ];
    }
}
