import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTrackerComponent } from './player-tracker.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PlayerTrackerComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [PlayerTrackerComponent]
})
export class PlayerTrackerModule { }
