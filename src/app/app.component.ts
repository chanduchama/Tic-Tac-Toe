import { Component, OnInit } from '@angular/core';
import { Board } from './tictactoe/board';
import { Cell } from './tictactoe/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tic Tac Toe Game';
  boardCells: Cell[][];
  statusMessage: string;
  endGame: boolean;

  constructor(private gameBoard: Board) {
  }

  ngOnInit(): void {
    this.resetBoard();
  }

  resetBoard(): void {
    this.gameBoard.initiateBoard();
    this.boardCells = this.gameBoard.getBoard();
    this.endGame = false;
    this.statusMessage = '';
  }

  clickedOn(rowValue: number, colValue: number): void {
    if ( !this.endGame ) {
      const message = this.gameBoard.takeInput(rowValue, colValue);
      if ( message === null ) {
        this.checkWinningConditions();
      } else {
        this.statusMessage = message;
      }
    } else {
      this.statusMessage = 'Please reset the game and try again';
    }
  }

  checkWinningConditions(): any {
    if ( this.gameBoard.checkWinningCondition() === true ){
        this.endGame = true;
        const playerName = this.gameBoard.getCurrentPlayerName();
        this.statusMessage = playerName + ' is the winner';
    } else if ( this.gameBoard.isBoardFull() === true ) {
        this.endGame = true;
        this.statusMessage = 'Draw game, please try again';
    }

    if ( !this.endGame ) {
      this.gameBoard.changePlayer();
    }
  }

}
