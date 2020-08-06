import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Difficulty } from '../enum';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  getData(){
    let settings = this.settingsService.getSettings();
    let category = settings.selectedCategoryId !== 0 ? "&category="+settings.selectedCategoryId : "";
    let difficulty = settings.selectedDifficulty !== Difficulty.AnyDifficulty ? "&difficulty="+settings.selectedDifficulty.toLowerCase() : "";
    
    return this.http.get('https://opentdb.com/api.php?amount=10&type=multiple'
                        + category + difficulty);
  }

}
