import { Injectable } from '@angular/core';
import { Difficulty } from '../enum';

  
@Injectable()
export class SettingsService {

     private settings = {
        categoryId: 0,
        difficulty: Difficulty.AnyDifficulty,
        displayCorrectAnswer: false
    };

    setCategory(categoryId){
        this.settings.categoryId = categoryId;
    }

    setDifficulty(difficulty){
        this.settings.difficulty = difficulty;
    }

    setDisplayCorrectAnswer(displayCorrectAnswer){
        this.settings.displayCorrectAnswer = displayCorrectAnswer;
    }

    getCategory(){
        return this.settings.categoryId;
    }

    getDifficulty(){
        return this.settings.difficulty;
    }

    getDisplayCorrectAnswer(){
        return this.settings.displayCorrectAnswer;
    }

    getSettings(){
        return this.settings;
    }


}
