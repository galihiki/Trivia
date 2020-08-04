import { Component,  } from '@angular/core';
import { DataService } from '../../services/data.service';
import { QuestionData, Questions } from '../../types';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GameOverDialogComponent } from '../../game-over-dialog/game-over-dialog.component';
import { Status } from '../../enum';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {

    constructor(private data: DataService, private dialog: MatDialog,
                private settingsService: SettingsService){}

    index: number;
    questions: Array<QuestionData>;
    currentQuestion: QuestionData;
    correctAnswerCount: number = 0;
    

    ngOnInit() {
      this.startNewGame();
    }
    
    openDialog() {

        const dialogConfig = new MatDialogConfig();
  
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
  
        dialogConfig.data = {
          correctAnswers: this.correctAnswerCount,
          totalQuestions: this.questions.length
        };
  
        const dialogRef = this.dialog.open(GameOverDialogComponent, dialogConfig);
  
        dialogRef.afterClosed().subscribe( result => {
            this.startNewGame();
        });  
    }
    
      startNewGame(){
        this.index = 0;
        this.data.getData().subscribe((q: Questions) => { 
          this.questions = q.results;
          this.setCurrentQuestion();
          this.correctAnswerCount = 0;
        });
      }
    
      private setCurrentQuestion(){
        this.questions[this.index].index = this.index;
        this.currentQuestion = this.questions[this.index];
      }

    receiveMessage(status: string){
        this.index++;
        if(this.index < this.questions.length){
          this.setCurrentQuestion();
          this.currentQuestion.isLastQuestion = this.index+1 >= this.questions.length;
        }
        if(status === Status.RightAnswer){
          this.correctAnswerCount++;
        }
        if(this.index === this.questions.length){
          this.openDialog();
        }
      }
}