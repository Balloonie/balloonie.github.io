import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicQuizComponent } from './music-quiz/music-quiz.component';

const routes: Routes =[
  { path: 'music', component: MusicQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
