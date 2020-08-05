import { Component, EventEmitter, Output } from "@angular/core";
import { Difficulty } from "../../enum";
import { SettingsService } from "../../services/settings.service";
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
  categories = [
    {displayName: "All Categories", value: 0},
    {displayName: "General Knowledge", value: 9},
    {displayName: "Books", value: 10},
    {displayName: "Film", value: 11,img: "assets/film.png"},
    {displayName: "Music", value: 12, img: "assets/music.png"},
    {displayName: "Science & Nature", value: 17},
    {displayName: "Television", value: 14},
    {displayName: "Geography", value: 22, img: "assets/world-map.png"},
    {displayName: "Celebrities", value: 26},
  ]

  difficultyLevels = [Difficulty.AnyDifficulty, Difficulty.Easy, Difficulty.Medium, Difficulty.Hard]
  displayCorrectAnswer = false;
  selectedCategoryId:any = 0;
  selectedDifficulty = Difficulty.AnyDifficulty;
  selectedCategoryImg;

  constructor( private settingsService: SettingsService, 
               private activatedRoute: ActivatedRoute,
               private router: Router){}

  onShowCorrectAnswer(){
    this.displayCorrectAnswer = !this.displayCorrectAnswer;
  }

  onSaveSettings(){
    this.settingsService.setCategory(this.selectedCategoryId);
    this.settingsService.setDifficulty(this.selectedDifficulty);
    this.router.navigate(["/trivia"]);
  }

  onSelsctedCategory(){
     let selectedCategory= _.find(this.categories, {value: parseInt(this.selectedCategoryId)});
     this.selectedCategoryImg = selectedCategory["img"]; 
  }

}

