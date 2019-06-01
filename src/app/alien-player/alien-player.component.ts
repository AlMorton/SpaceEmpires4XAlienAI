import { Component, OnInit, Input } from '@angular/core';
import { AlienPlayer } from '../classes/AlienPlayer';
import { TechPurchaseChartHandler } from '../classes/TechPurchaseChartHandler';
import { TechTypes } from '../enums/TechTypes';
import { TechLevels } from '../classes/TechLevels';

@Component({
  selector: 'app-alien-player',
  templateUrl: './alien-player.component.html',
  styleUrls: ['./alien-player.component.scss']
})
export class AlienPlayerComponent implements OnInit {

  @Input() public alien: AlienPlayer;

  public techpurchase: TechPurchaseChartHandler;
  public purchaseResult: TechTypes;
  public techLevelProps: string[];

  constructor(techpurchase: TechPurchaseChartHandler) {
    this.techpurchase = techpurchase;
  }

  rollForResult() {
      this.purchaseResult = this.techpurchase.rollOnChart();
  }
  ngOnInit() {
  }

}

