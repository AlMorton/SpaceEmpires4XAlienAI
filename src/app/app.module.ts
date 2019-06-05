import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDifficultyComponent } from './select-difficulty/select-difficulty.component';
import { EnumToArrayPipe } from './pipes/EnumToArrayPipe';
import { SolitaireDifficultyFactory } from './classes/SolitaireDifficultyFactory';
import { FormsModule } from '@angular/forms';
import { AlienPlayerComponent, HighlightDirective } from './alien-player/alien-player.component';
import { DeCamelCase } from './pipes/DeCamelCase';
import { PropertiesToArrayPipe } from './pipes/PropertiesToArrayPipe';
import { TechPurchaseChartHandler } from './classes/TechPurchaseChartHandler';
import { TechEnumValueToString } from './pipes/TetchEnumValueToString';
import { AlienPlayersAdminComponent } from './alien-players-admin/alien-players-admin.component';
import { EconomyRollResult, EconomyPhase } from './classes/EconomyRollResult';
import { GameService } from './game.service';

@NgModule({
    declarations: [
        AppComponent,
        SelectDifficultyComponent,
        EnumToArrayPipe,
        PropertiesToArrayPipe,
        TechEnumValueToString,
        DeCamelCase,
        AlienPlayerComponent,
        AlienPlayersAdminComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
    providers: [SolitaireDifficultyFactory, TechPurchaseChartHandler ],
    bootstrap: [AppComponent]
})
export class AppModule { }
