import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Difficulty } from '../enum';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  getData(){
    let settings = this.settingsService.getSettings();
    let category = settings.categoryId !== 0 ? "&category="+settings.categoryId : "";
    let difficulty = settings.difficulty !== Difficulty.AnyDifficulty ? "&difficulty="+settings.difficulty.toLowerCase() : "";
    
    return this.http.get('https://opentdb.com/api.php?amount=10&type=multiple'
                        + category + difficulty);
  }

}
