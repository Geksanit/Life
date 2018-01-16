import Event from '../utils/EventSender';

class Model {
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
  setWidthMatrix(newValue: number): void {
    const { matrix } = this;
    const oldValue: number = this.columns;

    if (oldValue > newValue) {
      matrix.forEach((row: boolean[]) => {
        row.splice(newValue - 1, oldValue - newValue);
      });
    }

    if (oldValue < newValue) {
      matrix.forEach((row: boolean[]) => {
        for (let j = oldValue; j < newValue; j += 1) {
          row.push(false);
        }
      });
    }
    this.columns = newValue;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  setHeightMatrix(newValue: number): void {
    const { matrix } = this;
    const oldValue: number = this.rows;

    if (oldValue > newValue) matrix.splice(newValue - 1, oldValue - newValue);

    if (oldValue < newValue) {
      const newRow: boolean[] = [];
      for (let j = 0; j < this.columns; j += 1) {
        newRow.push(false);
      }
      for (let i = oldValue; i < newValue; i += 1) {
        matrix.push(newRow.slice());
      }
    }
    this.rows = newValue;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix(): void {
    this.initMatrix(this.rows, this.columns);
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix(): boolean {
    const newMatrix: boolean[][] = this.matrix.map((row: boolean[], i: number) =>
      row.map((cell: boolean, j: number) => this.calculateCell(i, j)));
    const flag: boolean = this.isRepeatMatrix(newMatrix);
    this.matrix = newMatrix;
    this.matrixChanged.notify({ matrix: this.matrix });
    return flag;
  }
  isRepeatMatrix(newMatrix): boolean {
    const flag: boolean = this.listOldMatrix.some((matrix: boolean[][]) =>
      matrix.every((row: boolean[], i: number) =>
        row.every((cell: boolean, j: number) =>
          (cell === newMatrix[i][j]))));
    if (flag) this.listOldMatrix = [];
    else this.listOldMatrix.push(newMatrix);
    return flag;
  }
  calculateCell(row: number, column: number): boolean {
    const { matrix } = this;
    const countLivingNeighbors : number = this.getCountLivingNeighbors(row, column, matrix);
    let newCell: boolean = matrix[row][column];

    if (countLivingNeighbors < 2 || countLivingNeighbors > 3) newCell = false;
    else if (countLivingNeighbors === 3) newCell = true;
    return newCell;
  }
  getCountLivingNeighbors (row: number, column: number, matrix: boolean[][]): number {
    const indexes: number[] = [-1, 0, 1];
    return indexes.reduce((count: number, i: number): number => {
      const indexRow: number = row + i;
      if (!matrix[indexRow]) return count;
      return count + indexes.reduce((countInRow: number, j: number): number => {
        const indexCell: number = column + j;
        if (!matrix[indexRow][indexCell] || (i === 0 && j === 0)) return countInRow;
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
