import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDifficultyComponent, EnumToArrayPipe } from './select-difficulty/select-difficulty.component';
import { SolitaireDifficultyFactory } from './classes/SolitaireDifficultyFactory';
import { FormsModule } from '@angular/forms';
import { Dice } from './classes/Dice';
import { TechLevels } from './classes/TechLevels';
import { GameService } from './game.service';
import { AlienPlayerComponent, PropertiesToArrayPipe, DeCamelCase } from './alien-player/alien-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDifficultyComponent,
    EnumToArrayPipe,
    PropertiesToArrayPipe,
    DeCamelCase,
    AlienPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [SolitaireDifficultyFactory, TechLevels],
  bootstrap: [AppComponent]
})
export class AppModule { }
