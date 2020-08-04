import {TriviaComponent} from './pages/trivia/trivia.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
    { path:'', component: HomeComponent, pathMatch: 'full'},
    { path:'home', component: HomeComponent},
    { path:'settings', component: SettingsComponent},
    { path: 'trivia', component: TriviaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }