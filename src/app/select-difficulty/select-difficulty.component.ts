import { Component, OnInit, OnDestroy } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';
import { SolitaireDifficultyFactory, IDifficultyFactory } from '../classes/SolitaireDifficultyFactory';
import { GameService } from '../game.service';
import { TechLevels } from '../classes/TechLevels';
import { AlienPlayer } from './../classes/AlienPlayer';
import { AlienEconomy } from '../classes/AlienEconomy';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

interface IAlienPlayerOption {
    colour: string;
    selected: boolean;
}

@Component({
    selector: 'app-select-difficulty',
    templateUrl: './select-difficulty.component.html',
    styleUrls: ['./select-difficulty.component.scss']
})

export class SelectDifficultyComponent implements OnInit, OnDestroy  {

    private difficultyFactory: IDifficultyFactory;
    private colours: Array<string> = ['blue', 'green', 'yellow', 'red'];
    difficultyEnum = Difficulty;

    public alienPlayers: Array<IAlienPlayerOption> = [];
    public options: Array<string>;
    public numberSelected: number;
    public selectedDifficulty: Difficulty;

    constructor(public gameService: GameService, difficultyFactory: SolitaireDifficultyFactory) {

        this.difficultyFactory = difficultyFactory;
        this.numberSelected = 0;
    }

    alienPlayerSelected($event: boolean, player: IAlienPlayerOption): void {

        if (player.selected) {
            this.numberSelected++;
        }
        if (!player.selected) {
            this.numberSelected--;
        }
    }

    onStartGame() {

        this.setUpDifficulty();

        const selectedAlienPlayers: AlienPlayer[] = [];

        this.alienPlayers.forEach((ap) => {
            if (ap.selected === true) {

                selectedAlienPlayers.push(new AlienPlayer(ap.colour, new TechLevels(), new AlienEconomy(this.gameService.difficulty)));
            }
        });

        this.gameService.$alienPlayers
            .next(selectedAlienPlayers);
    }

    private setUpDifficulty() {
        this.gameService.difficulty = this.difficultyFactory.create(this.selectedDifficulty);
    }

    ngOnInit() {
        this.setupAlienPlayerOptions();
        this.selectedDifficulty = Difficulty.Normal;
    }

    ngOnDestroy() {

        this.onStartGame();
    }

    private setupAlienPlayerOptions(): void {
        this.colours.forEach(c => {
            const ap: IAlienPlayerOption = {
                colour: c,
                selected: false
            };
            this.alienPlayers.push(ap);
        });
    }
}


