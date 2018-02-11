export class Cell {

    private cellValue: string;
    private rowNumber: number;
    private columnNumber: number;

    constructor(cellValue: string, rowNumber: number, columnNumber: number) {
        this.cellValue = cellValue;
        this.rowNumber = rowNumber;
        this.columnNumber = columnNumber;
    }

    public getCellValue(): string {
        return this.cellValue;
    }

    public setCellValue(cellValue: string): void {
        this.cellValue = cellValue;
    }

    public getRowNumber(): number {
        return this.rowNumber;
    }

    public setRowNumber(rowNumber: number): void {
        this.rowNumber = rowNumber;
    }

    public getColumnNumber(): number {
        return this.columnNumber;
    }

    public setColumnNumber(columnNumber: number) {
        this.columnNumber = columnNumber;
    }

}
