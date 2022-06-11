import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicQuizComponent } from './music-quiz/music-quiz.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes =[
  { path: 'music/:id', component: MusicQuizComponent },
  { path: 'rules', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
