import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectDifficultyComponent } from './select-difficulty/select-difficulty.component';
import { AlienPlayerComponent } from './alien-player/alien-player.component';
import { AlienPlayersAdminComponent } from './alien-players-admin/alien-players-admin.component';

const routes: Routes = [
  {
    path: 'newgame',
    component: SelectDifficultyComponent
  },
  {
    path: 'alienplayers',
    component: AlienPlayersAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
