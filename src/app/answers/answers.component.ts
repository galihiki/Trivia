import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() answers: Array<string>;
  @Input() correctAnswer: string;
  @Input() status: string;
  
  @Output() MessageEvent = new EventEmitter();

  selectedIndex: number;
  displayCorrectAnswer;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.displayCorrectAnswer = this.settingsService.getDisplayCorrectAnswer();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.status){
      this.status = changes.status.currentValue;
    }
  }

  selected(index: number){
    this.selectedIndex = index;
    this.MessageEvent.emit(this.answers[index]);
  }

  isCorrectAnswer(index){
    return (index === this.selectedIndex && this.status==='rightAnswer') 
            || (this.status==='wrongAnswer' && this.displayCorrectAnswer && this.answers[index] === this.correctAnswer);
  }

  isWrongAnswer(index){
    return index === this.selectedIndex && this.status==='wrongAnswer';
  }

  isSelectedAnswer(index){
    return index === this.selectedIndex && this.status==='selectedAnswer';
  }
}
