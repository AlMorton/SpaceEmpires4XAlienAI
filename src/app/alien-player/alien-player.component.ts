import { Component, OnInit, Input, HostListener, ElementRef, Renderer2, Directive } from '@angular/core';
import { AlienPlayer } from '../classes/AlienPlayer';
import { TechPurchaseChartHandler } from '../classes/TechPurchaseChartHandler';
import { TechTypes } from '../enums/TechTypes';
import { TechLevels } from '../classes/TechLevels';
import { element } from 'protractor';


@Directive({
    selector: '[appShowHide]'
})
export class HighlightDirective {
    private hide: boolean;
    private sib: any;
    constructor(private renderer: Renderer2, private el: ElementRef) {
        this.hide = false;        
    }

    @HostListener('click') onClick() {
        
        this.sib = this.renderer.nextSibling(this.el.nativeElement);
        if(!this.hide) {
            this.renderer.setStyle(this.sib, 'display', 'none');
            this.hide = true;
        }
        else {
            this.renderer.setStyle(this.sib, 'display', 'flex');
            this.hide = false;
        }        
    }
}


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

