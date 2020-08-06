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
  displayCorrectAnswer = false;
  selectedCategoryId: any = 0;
  selectedDifficulty = Difficulty.AnyDifficulty;
  selectedCategoryImg;

  constructor( private settingsService: SettingsService, 
               private activatedRoute: ActivatedRoute,
               private router: Router){}

  ngOnInit(){
    this.categories = this.settingsService.getCategories();
  }

  onShowCorrectAnswer(){
    this.displayCorrectAnswer = !this.displayCorrectAnswer;
  }

  onSaveSettings(){
    this.settingsService.setCategory(parseInt(this.selectedCategoryId));
    this.settingsService.setDifficulty(this.selectedDifficulty);
    this.router.navigate(["/trivia"]);
  }

  onSelsctedCategory(){
     let selectedCategory= _.find(this.categories, {value: parseInt(this.selectedCategoryId)});
     this.selectedCategoryImg = selectedCategory["img"]; 
  }

}

