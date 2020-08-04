import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GameOverDialogData } from '../types';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.css']
})
export class GameOverDialogComponent implements OnInit {

  data: GameOverDialogData;

  constructor(private dialogRef: MatDialogRef<GameOverDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: GameOverDialogData) { 
    this.data = data;
  }

  ngOnInit() {
  }

  newGame() {
    this.dialogRef.close("newGame");
  }
  close() {
    this.dialogRef.close();
  }
}
