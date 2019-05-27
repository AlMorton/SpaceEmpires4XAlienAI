export class TechPurchasing {

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
        return false;
    }

    lacksPointDefense(): boolean {
        return true;
    }

    lacksMineSweepOne(): boolean {
        throw new Error('Method not implemented.');
    }
    hasSeenEnemyMines(): boolean {
        throw new Error('Method not implemented.');
    }

    lacksSecurityForces(): boolean {
        throw new Error('Method not implemented.');
    }
    hasSeenEnemyBDs(): boolean {
        throw new Error('Method not implemented.');
    }

    /** 
     * Refactor all methods below to separate class that handles purchasing 
     **/

    buysMineSweeperOne(): void {
        // Set a property of object as yet undefined
    }
    buysPointDefense(): void {
        // Set a property of object as yet undefined
    }
    buysSecurityForceOne() {
        // Set a property of object as yet undefined
    }
}


