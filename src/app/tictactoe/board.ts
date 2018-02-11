import { Cell } from './cell';

export class Board {

    player1 = 'X';
    player2 = 'O';
    currentPlayer: string;
    cells: Cell[][];

    constructor() {
        this.initiateBoard();
    }

    public getBoard(): Cell[][] {
        return this.cells;
    }

    public initiateBoard(): void {
        this.cells = new Array<Array<Cell>>();
        for (let i = 0; i < 3; i++) {
            const row: Cell[]  = new Array<Cell>();
            for (let j = 0; j < 3; j++) {
                row.push(new Cell('-', i, j));
            }
            this.cells.push(row);
        }
        this.currentPlayer = this.player1;
    }

    public takeInput(rowValue: number, colValue: number): string {
        let message: string = null;

        if ( ( rowValue >= 0 && rowValue < 3 ) && (colValue >= 0 && colValue < 3 ) ) {
            if ( this.cells[rowValue][colValue].getCellValue() !== '-') {
                message = 'Please choose a non empty cell';
            } else {
                this.cells[rowValue][colValue].setCellValue(this.currentPlayer);
            }
        } else {
            message = 'Please enter a valid input for row number and column number';
        }

        return message;
    }

    public checkWinningCondition(): boolean {
        let winningCondition = false;

        if ( this.checkRowWinningCondition() || this.checkColumnWinningCondition() || this.checkDiagonalWinningCondition() ) {
            winningCondition = true;
        }

        return winningCondition;
    }

    private checkDiagonalWinningCondition(): boolean {
        let status = false;

        if ( ( this.checkCellValues(this.cells[0][0], this.cells[1][1], this.cells[2][2]) )
        || ( this.checkCellValues(this.cells[0][2], this.cells[1][1], this.cells[2][0]) ) ) {
            status = true;
        }

        return status;
    }

    private checkColumnWinningCondition(): boolean {
        let status = false;

        for (let i = 0; i < 3; i++) {
            if ( this.checkCellValues(this.cells[0][i], this.cells[1][i], this.cells[2][i]) ) {
                status = true;
                break;
            }
        }

        return status;
    }

    private checkRowWinningCondition(): boolean {
        let status = false;

        for (let i = 0; i < 3; i++) {
            if ( this.checkCellValues(this.cells[i][0], this.cells[i][1], this.cells[i][2]) ) {
                status = true;
                break;
            }
        }

        return status;
    }

    private checkCellValues(cell: Cell, cell1: Cell, cell2: Cell): boolean {
        let status = false;
        if ( (cell.getCellValue() !== '-') && ( cell.getCellValue() === cell1.getCellValue() )
        && ( cell1.getCellValue() === cell2.getCellValue()) ) {
            status = true;
        }
        return status;
    }

    public isBoardFull(): boolean {
        let status = true;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.cells[i][j].getCellValue() === '-') {
                    status = false;
                    break;
                }
            }
            if (!status) {
                break;
            }
        }

        return status;
    }

    public getCurrentPlayerName(): string {
        let playerName;
        if ( this.currentPlayer === this.player1 ) {
            playerName = 'Player 1';
        } else {
            playerName = 'Player 2';
        }
        return playerName;
    }

    public changePlayer(): void {
        if ( this.currentPlayer ===  this.player1 ) {
            this.currentPlayer = this.player2;
        } else if ( this.currentPlayer === this.player2) {
            this.currentPlayer = this.player1;
        }
    }

    public printBoard(): void {

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(this.cells[i][j].getCellValue());
                if (j < 2) {
                    console.log(' | ');
                }
            }
            console.log('\n');
        }

    }

}
