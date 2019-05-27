import { AlienPlayer } from './AlienPlayer';

export class TechPurchasing {

    private alienPlayer: AlienPlayer;

    techPurchasing(): void {

        if (this.hasSeenEnemyFighters() && this.lacksPointDefense()) {
            this.buysPointDefense();
        }

        if (this.hasSeenEnemyMines() && this.lacksMineSweepOne()) {
            this.buysMineSweeperOne();
        }

        if (this.hasSeenEnemyBDs() && this.lacksSecurityForces()) {
            this.buysSecurityForceOne();
        }
    }

    hasSeenEnemyFighters(): boolean {
        return this.alienPlayer.hasSeenEnemyFighter;     
    }

    lacksPointDefense(): boolean {
        if ( this.alienPlayer.techLevels.pointDefense.currentLevel < 1) {
            return true;
        }
        return false;         
    }
    
    hasSeenEnemyMines(): boolean {
       return this.alienPlayer.hasSeenEnemyMines;       
    }

    lacksMineSweepOne(): boolean {
        if ( this.alienPlayer.techLevels.mineSweeper.currentLevel < 1) {
            return true;
        }
        return false;
    }   

    lacksSecurityForces(): boolean {
        if ( this.alienPlayer.techLevels.security.currentLevel < 1) {
            return true;
        }
        return false;
    }
    hasSeenEnemyBDs(): boolean {
        return this.alienPlayer.hasSeenEnemyBDs;
    }

    /** 
     * Refactor all methods below to separate class that handles purchasing 
     **/

    buysMineSweeperOne(): void {
        this.alienPlayer.techLevels.mineSweeper.currentLevel = 1;
        // Set a property of object as yet undefined
    }
    buysPointDefense(): void {
        // Set a property of object as yet undefined
    }
    buysSecurityForceOne() {
        // Set a property of object as yet undefined
    }
}


