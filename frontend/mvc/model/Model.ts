import Event from '../utils/EventSender';
import IModel from './IModel';

class Model implements IModel{
  matrix: boolean[][];
  rows: number;
  columns: number;
  listOldMatrix: boolean[][][];
  matrixChanged: Event;
  constructor(rows: number = 10, columns: number = 10) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged = new Event(this);
  }
  initMatrix(rows: number, columns: number): void {
    this.matrix = [];
    for (let i = 0; i < rows; i += 1) {
      let row = [];
      for (let j = 0; j < columns; j += 1) {
        row.push(false);
      }
      this.matrix.push(row);
    }
  }
  setWidthMatrix(newWidth: number): void {
    const oldWidth: number = this.columns;
    let newCells = [];
    for (let i = oldWidth; i < newWidth; i += 1) {
      newCells = newCells.concat(false);
    }
    const newMatrix: boolean[][] = this.matrix.map((row) => {
      if (oldWidth < newWidth) {
        return row.concat(newCells);
      }
      return row.slice(0, newWidth);
    });
    this.matrix = newMatrix;
    this.columns = newWidth;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  setHeightMatrix(newHeight: number): void {
    const { matrix } = this;
    let newMatrix = [];

    for (let i = 0; i < newHeight; i += 1) {
      if (i < matrix.length) {
        newMatrix[i] = matrix[i].map(ceil => ceil);
      } else {
        let newRow = [];
        for (let j = 0; j < this.columns; j += 1) {
          newRow[j] = false;
        }
        newMatrix[i] = newRow;
      }
    }
    this.matrix = newMatrix;
    this.rows = newHeight;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix(): void {
    this.initMatrix(this.rows, this.columns);
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix(): void {
    this.matrix = this.matrix.map((row: boolean[], i: number) =>
      row.map((cell: boolean, j: number) => this.calculateCell(i, j)),
    );
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  isRepeatMatrix(): boolean {
    const result: boolean = this.listOldMatrix.some((matrix: boolean[][]) =>
      matrix.every((row: boolean[], i: number) =>
        row.every((cell: boolean, j: number) =>
          (cell === this.matrix[i][j]),
        ),
      ),
    );
    if (result) { this.listOldMatrix = []; }
    else { this.listOldMatrix.push(this.matrix); }
    return result;
  }
  calculateCell(row: number, column: number): boolean {
    const { matrix } = this;
    const countLivingNeighbors : number = this.getCountLivingNeighbors(row, column, matrix);
    let newCell: boolean = matrix[row][column];

    if (countLivingNeighbors < 2 || countLivingNeighbors > 3) { newCell = false; }
    else if (countLivingNeighbors === 3) { newCell = true; }
    return newCell;
  }
  getCountLivingNeighbors (row: number, column: number, matrix: boolean[][]): number {
    const indexes: number[] = [-1, 0, 1];
    return indexes.reduce((count: number, i: number): number => {
      const indexRow: number = row + i;
      if (!matrix[indexRow]) { return count; }
      return count + indexes.reduce((countInRow: number, j: number): number => {
        const indexCell: number = column + j;
        if (!matrix[indexRow][indexCell] || (i === 0 && j === 0)) { return countInRow; }
        return countInRow + 1;
      }, 0);
    }, 0);
  }
  toggleCell(row: number, column: number): void {
    this.matrix[row][column] = !this.matrix[row][column];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
}
export default Model;
