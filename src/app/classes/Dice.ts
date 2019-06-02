import { Subject } from 'rxjs';

export class Dice {
    private sides: number;
    public result: Subject<number>;
    constructor(sides: number) {
        this.sides = sides;
        this.result = new Subject<number>();
    }
    roll(): void {
        this.result.next(this.rollDice());
    }

    rollDice(): number {
        return Math.floor(Math.random() * this.sides) + 1;
    }


}
