import { Component, OnInit, Input, Output, EventEmitter,
          OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { QuestionData } from '../types';
import { Status } from '../enum';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  _questionData: QuestionData 
  @Output() statusChange = new EventEmitter();
  answers: Array<string>; 
  currentAnswer: string = null;
  status: string;
  hideContinueBtn : boolean = true;
  selectedCateroryImg;

  @Input()
  set questionData(questionData: QuestionData) {
    this._questionData = questionData;
    this.setAnswers();
  }

  get questionData(): QuestionData {
    return this._questionData;
  }

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.selectedCateroryImg = this.settingsService.getSelectedCategoryImg();
  }

  setAnswers(){
    let random = Math.floor(Math.random() * 3);
    this.questionData.incorrect_answers.splice(random,0,this.questionData.correct_answer);
    this.answers = this.questionData.incorrect_answers;
  }

  answerSelected(){
    this.statusChange.emit(this.status);
    this.status = null;
    this.hideContinueBtn = true;
    this.currentAnswer = null;
  }

  receiveMessage(message: string){
    this.currentAnswer = message;
    this.status = Status.SelectedAnswer;
  }

  verifyAnswer(){
    this.status = Status.WrongAnswer;
    if(this.currentAnswer === this._questionData.correct_answer){
      this.status = Status.RightAnswer;
    }
    this.hideContinueBtn = false;
  }

}
