import { Subject } from 'rxjs';

export class Dice {
    private _sides: number;
    public result: Subject<number>;
    constructor(sides: number) {
        this._sides = sides;
        this.result = new Subject<number>();
    }
    roll(): void {
        this.result.next(this.rollDice());
    }

    rollDice(): number {
        return Math.floor(Math.random() * this._sides) + 1;
    }


}
