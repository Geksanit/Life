import Event from '../utils/EventSender';
import IModel from './IModel';
import '../../scripts/arrayFrom-polyfill';

class Model implements IModel{
  matrix: boolean[][];
  rows: number;
  columns: number;
  stateHistory: boolean[][][];
  matrixChanged: Event;
  constructor(rows: number = 10, columns: number = 10) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.stateHistory = [];
    this.matrixChanged = new Event(this);
  }
  initMatrix(rows: number, columns: number): void {
    this.matrix = Array.from(Array(rows), () => Array.from(Array(columns), () => false));
  }
  getNewRow(length: number): boolean[] {
    return Array.from(Array(length), () => false);
  }
  setWidthMatrix(newWidth: number): void {
    this.matrix = this.matrix.map((row) => {
      if (this.columns < newWidth) {
        return row.concat(this.getNewRow(newWidth - this.columns));
      }
      return row.slice(0, newWidth);
    });
    this.columns = newWidth;
    this.stateHistory = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  setHeightMatrix(newHeight: number): void {
    this.matrix = Array.from(Array(newHeight), (row, i) => {
      if (i < this.rows) { return this.matrix[i].slice(); }
      return this.getNewRow(this.columns);
    });
    this.rows = newHeight;
    this.stateHistory = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix(): void {
    this.initMatrix(this.rows, this.columns);
    this.stateHistory = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix(): void {
    this.matrix = this.matrix.map((row: boolean[], i: number) =>
      row.map((cell: boolean, j: number) => this.calculateCell(i, j)),
    );
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  isRepeatMatrix(): boolean {
    const result: boolean = this.stateHistory.some((matrix: boolean[][]) =>
      matrix.every((row: boolean[], i: number) =>
        row.every((cell: boolean, j: number) =>
          (cell === this.matrix[i][j]),
        ),
      ),
    );
    if (result) { this.stateHistory = []; }
    else { this.stateHistory.push(this.matrix); }
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
