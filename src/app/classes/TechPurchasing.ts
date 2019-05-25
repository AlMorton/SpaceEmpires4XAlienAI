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

export class TechLevels {

    public shipSize = new Tech(1, 7);
    public attack = new Tech(0, 3);
    public defense = new Tech(0, 3);
    public tactics = new Tech(0, 3);
    public move = new Tech(1, 7);
    public shipyard = new Tech(1, 3);
    public ground = new Tech(1, 3);
    public fighters = new Tech(0, 3);
    public pointDefense = new Tech(0, 3);
    public terraforming = new Tech(0, 2);
    public cloaking = new Tech(0, 2);
    public scanners = new Tech(0, 2);
    public mines = new Tech(0, 1);
    public mineSweeper = new Tech(0, 3);
    public militaryAcademy = new Tech(0, 2);
    public boarding = new Tech(0, 2);
    public security = new Tech(0, 2);
    public exploration = new Tech(0, 2);
    public fastBc = new Tech(0, 1);
}

class Tech {
    public start: number;
    public maxLevel: number;

    constructor(startingValue: number, maxLevel: number) {
        this.start = startingValue;
        this.maxLevel = maxLevel;
    }
}
