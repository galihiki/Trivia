import { Injectable } from '@angular/core';
import { Difficulty } from '../enum';
import * as _ from 'lodash';

  
@Injectable()
export class SettingsService {

     private settings = {
        selectedCategoryId: 0,
        selectedDifficulty: Difficulty.AnyDifficulty,
        displayCorrectAnswer: false
    };

    private categories = [
        {displayName: "All Categories", value: 0},
        {displayName: "General Knowledge", value: 9, img: "assets/general-knowledge.png"},
        {displayName: "Books", value: 10, img: "assets/book.png"},
        {displayName: "Film", value: 11,img: "assets/film.png"},
        {displayName: "Music", value: 12, img: "assets/music.png"},
        {displayName: "Science & Nature", value: 17,img: "assets/science.png"},
        {displayName: "Television", value: 14, img: "assets/tv.png"},
        {displayName: "Geography", value: 22, img: "assets/world-map.png"},
        {displayName: "Celebrities", value: 26, img: "assets/celebrities.png"},
    ]

    getCategories(){
        return this.categories;
    }

    getCategoryImg(categoryId){
        let category = _.find(this.categories, {value: categoryId});
        return category.img;
    }

    setCategory(categoryId){
        this.settings.selectedCategoryId = categoryId;
    }

    setDifficulty(difficulty){
        this.settings.selectedDifficulty = difficulty;
    }

    setDisplayCorrectAnswer(displayCorrectAnswer){
        this.settings.displayCorrectAnswer = displayCorrectAnswer;
    }

    getCategoryId(){
        return this.settings.selectedCategoryId;
    }

    getDifficulty(){
        return this.settings.selectedDifficulty;
    }

    getDisplayCorrectAnswer(){
        return this.settings.displayCorrectAnswer;
    }

    getSettings(){
        return this.settings;
    }


}
