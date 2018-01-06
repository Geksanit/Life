import Event from '../utils/Event';

class Model {
  constructor(rows = 10, columns = 10) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged = new Event(this);
  }
  initMatrix(rows, columns) {
    this.matrix = [];
    for (let i = 0; i < rows; i += 1) {
      let row = [];
      for (let j = 0; j < columns; j += 1) {
        row.push(false);
      }
      this.matrix.push(row);
    }
  }
  resizeMatrix(rows, columns) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix() {
    this.initMatrix(this.rows, this.columns);
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix() {
    // обход всех ячеек с записью нового состояния
    const newMatrix = this.matrix.map((row, i) => row.map((cell, j) => this.calculateCell(i, j)));
    const flag = this.isRepeatMatrix(newMatrix); // повторилась ли матрица?
    this.matrixChanged.notify({ matrix: this.matrix });
    this.matrix = newMatrix;
    return flag;
  }
  isRepeatMatrix(newMatrix) {
    const flag = this.listOldMatrix.some((matrix) => {
      return matrix.every((row, i) => row.every((cell, j) => (cell === newMatrix[i][j])));
    });
    if (flag) this.listOldMatrix = [];
    else this.listOldMatrix.push(newMatrix);
    return flag;
  }
  calculateCell(row, column) {
    // соседи за пределами поля считаются мертвыми
    let count = 0;// живые соседи
    let newCell = this.matrix[row][column];

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
  toggleCell(row, column) {
    this.matrix[row][column] = !this.matrix[row][column];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
}
export default Model;
