import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material";
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    TriviaComponent,
    QuestionComponent,
    AnswersComponent,
    GameOverDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [DataService, SettingsService],
  bootstrap: [AppComponent],
  entryComponents: [GameOverDialogComponent]
})
export class AppModule { }
