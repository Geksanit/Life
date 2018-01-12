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
  resizeMatrix(rows: number, columns: number): void {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix(): void {
    this.initMatrix(this.rows, this.columns);
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix(): boolean {
    // обход всех ячеек с записью нового состояния
    const newMatrix: boolean[][] = this.matrix.map((row: boolean[], i: number) =>
      row.map((cell: boolean, j: number) => this.calculateCell(i, j)));
    const flag: boolean = this.isRepeatMatrix(newMatrix);
    this.matrix = newMatrix;
    this.matrixChanged.notify({ matrix: this.matrix });
    return flag;// повторилась матрица?
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
    // соседи за пределами поля считаются мертвыми
    let count: number = 0;// живые соседи
    let newCell: boolean = this.matrix[row][column];

    if (this.matrix[row - 1]) {
      if (this.matrix[row - 1][column - 1]) count += 1;
      if (this.matrix[row - 1][column]) count += 1;
      if (this.matrix[row - 1][column + 1]) count += 1;
    }

    if (this.matrix[row][column - 1]) count += 1;
    if (this.matrix[row][column + 1]) count += 1;

    if (this.matrix[row + 1]) {
      if (this.matrix[row + 1][column - 1]) count += 1;
      if (this.matrix[row + 1][column]) count += 1;
      if (this.matrix[row + 1][column + 1]) count += 1;
    }

    if (count < 2 || count > 3) newCell = false;
    else if (count === 3) newCell = true;
    return newCell;
  }
  toggleCell(row: number, column: number): void {
    this.matrix[row][column] = !this.matrix[row][column];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
}
export default Model;
