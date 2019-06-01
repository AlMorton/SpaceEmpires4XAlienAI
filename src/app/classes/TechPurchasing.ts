import { AlienPlayer } from './AlienPlayer';
import { Tech } from './Tech';

export class TechPurchasing {

    private _alienPlayer: AlienPlayer;

    techPurchasing(alienPlayer: AlienPlayer): void {

        this._alienPlayer = alienPlayer;

        if (this.hasSeenEnemyFighters() && this.lacksPointDefense()) {
            this.buysPointDefenseOne();
        }

        if (this.hasSeenEnemyMines() && this.lacksMineSweepOne()) {
            this.buysMineSweeperOne();
        }

        if (this.hasSeenEnemyBDs() && this.lacksSecurityForces()) {
            this.buysSecurityForceOne();
        }
    }

    private hasSeenEnemyFighters(): boolean {
        return this._alienPlayer.hasSeenEnemyFighter;
    }

    private lacksPointDefense(): boolean {
        if (this._alienPlayer.techLevels.pointDefense.currentLevel < 1) {
            return true;
        }
        return false;
    }

    private hasSeenEnemyMines(): boolean {
        return this._alienPlayer.hasSeenEnemyMines;
    }

    private lacksMineSweepOne(): boolean {
        if (this._alienPlayer.techLevels.mineSweeper.currentLevel < 1) {
            return true;
        }
        return false;
    }

    private lacksSecurityForces(): boolean {
        if (this._alienPlayer.techLevels.security.currentLevel < 1) {
            return true;
        }
        return false;
    }
    private hasSeenEnemyBDs(): boolean {
        return this._alienPlayer.hasSeenEnemyBDs;
    }

    private buysMineSweeperOne(): void {
        if (this._alienPlayer.techLevels.mineSweeper.currentLevel < 1) {
            this._alienPlayer.techLevels.mineSweeper.buyNextLevel();
        }
    }
    private buysPointDefenseOne(): void {
        if (this._alienPlayer.techLevels.pointDefense.currentLevel < 1) {
            this._alienPlayer.techLevels.pointDefense.buyNextLevel();
        }
    }
    private buysSecurityForceOne() {
        if (this._alienPlayer.techLevels.security.currentLevel < 1) {
            this._alienPlayer.techLevels.security.buyNextLevel();
        }
    }

    shipSizeRoll() {
        // roll dice
        if (this._alienPlayer.techLevels.shipSize.currentLevel < this._alienPlayer.techLevels.shipSize.maxLevel) {
            // buy next level;
        }
    }
}

export class ShipPurchaseHandler {
    constructor() {
    }

    purchaseShipSize(shipTech: Tech, diceRoll: number) {

        if (shipTech.currentLevel === 1) {
            shipTech.currentLevel++;
        } else if (shipTech.currentLevel === 2 && diceRoll <= 7) {
            shipTech.currentLevel++;
        } else if (shipTech.currentLevel === 3 && diceRoll <= 6) {
            shipTech.currentLevel++;
        } else if (shipTech.currentLevel === 4 && diceRoll <= 5) {
            shipTech.currentLevel++;
        } else if (shipTech.currentLevel === 5 && diceRoll <= 3) {
            shipTech.currentLevel++;
        } else if (shipTech.currentLevel === 6 && diceRoll <= 6) {
            shipTech.currentLevel++;
        }
    }
}

