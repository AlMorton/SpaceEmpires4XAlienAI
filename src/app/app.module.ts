import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDifficultyComponent } from './select-difficulty/select-difficulty.component';
import { EnumToArrayPipe } from './pipes/EnumToArrayPipe';
import { SolitaireDifficultyFactory } from './classes/SolitaireDifficultyFactory';
import { FormsModule } from '@angular/forms';
import { Dice } from './classes/Dice';
import { TechLevels } from './classes/TechLevels';
import { GameService } from './game.service';
import { AlienPlayerComponent } from './alien-player/alien-player.component';
import { DeCamelCase } from './pipes/DeCamelCase';
import { PropertiesToArrayPipe } from './pipes/PropertiesToArrayPipe';
import { TechPurchaseChartHandler } from './classes/TechPurchaseChartHandler';
import { EnumValueToString } from './pipes/EnumValueToString';

@NgModule({
    declarations: [
        AppComponent,
        SelectDifficultyComponent,
        EnumToArrayPipe,
        PropertiesToArrayPipe,
        EnumValueToString,
        DeCamelCase,
        AlienPlayerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
    providers: [SolitaireDifficultyFactory, TechLevels, TechPurchaseChartHandler],
    bootstrap: [AppComponent]
})
export class AppModule { }
