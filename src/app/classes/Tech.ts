
export class Tech {
    public startingLevel: number;
    public maxLevel: number;
    public currentLevel: number;
    constructor(startingValue: number, maxLevel: number) {
        this.startingLevel = startingValue;
        this.currentLevel = this.startingLevel;
        this.maxLevel = maxLevel;
    }
}
