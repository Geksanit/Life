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

    // убираем столбцы
    if (oldValue > newValue) {
      matrix.forEach((row: boolean[]) => {
        row.splice(newValue - 1, oldValue - newValue);
      });
    }

    // добавляем столбцы
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

    // убираем строки
    if (oldValue > newValue) matrix.splice(newValue - 1, oldValue - newValue);

    // добавляем строки
    if (oldValue < newValue) {
      const newRow: boolean[] = [];
      for (let j = 0; j < this.columns; j += 1) {
        newRow.push(false);
      }
      // копию новой пустой строки вставляем нужное число раз
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
    const { matrix } = this;
    const indexes: number[] = [-1, 0, 1];

    // обход окресности ячейки
    indexes.forEach((i: number) => {
      const indexRow = row + i;// строка может не существовать
      if (matrix[indexRow]) {
        indexes.forEach((j: number) => {
          const indexCell = column + j;// ячейка тоже может не существовать
          // вычисляемая ячейка не считается
          if (matrix[indexRow][indexCell] && (i !== 0 || j !== 0)) count += 1;
        });
      }
    });
    // при count=2 ячейка сохраняет своё состояние
    // в остальных случаях новое состояние от неё не зависит
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
