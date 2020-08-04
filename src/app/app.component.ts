import { Component,  } from '@angular/core';
import { DataService } from './services/data.service';
import { QuestionData, Questions } from './types';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { Status } from './enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private data: DataService, private dialog: MatDialog){}
}

