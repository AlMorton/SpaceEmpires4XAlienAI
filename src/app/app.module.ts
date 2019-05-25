import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDifficultyComponent, EnumToArrayPipe } from './select-difficulty/select-difficulty.component';
import { SolitaireDifficultyFactory } from './classes/SolitaireDifficultyFactory';

@NgModule({
  declarations: [
    AppComponent,
    SelectDifficultyComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SolitaireDifficultyFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
