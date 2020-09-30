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
  
  categories;
  difficultyLevels = [Difficulty.AnyDifficulty, Difficulty.Easy, Difficulty.Medium, Difficulty.Hard]
  selectedCategoryImg;
  settings;

  constructor( private settingsService: SettingsService, 
               private activatedRoute: ActivatedRoute,
               private router: Router){}

  ngOnInit(){
    this.categories = this.settingsService.getCategories();
    this.settings = this.settingsService.getSettings();
    if(this.settings.selectedCategoryId){
      this.onSelsctedCategory();
    }
  }

  onShowCorrectAnswer(){
    this.settings.displayCorrectAnswer = !this.settings.displayCorrectAnswer;
  }

  onSaveSettings(){
    this.settingsService.setCategory(parseInt(this.settings.selectedCategoryId));
    this.settingsService.setDifficulty(this.settings.selectedDifficulty);
    this.settingsService.setDisplayCorrectAnswer(this.settings.displayCorrectAnswer);
    this.router.navigate(["/trivia"]);
  }

  onSelsctedCategory(){
     let selectedCategory= _.find(this.categories, {value: parseInt(this.settings.selectedCategoryId)});
     this.selectedCategoryImg = selectedCategory["img"]; 
  }

}

