class Board {
  constructor(rows = 10, columns = 10) {
    // матрица m на n заполненная false
    this.matrix = [];
    this.rows = rows;// строки
    this.columns = columns;// столбцы
    for (let i = 0; i < rows; i += 1) {
      const row = [];
      for (let j = 0; j < columns; j += 1) {
        row.push(false);
      }

      this.matrix.push(row);
    }
  }
  resize(m, n) {
    const { matrix } = this;
    const o = matrix.length;
    const p = matrix[0].length;

    // console.log('resize',o,p,' to ',m,n);
    // убираем столбцы
    if (p > n) {
      for (let i = 0; i < o; i += 1) {
        matrix[i].splice(n - 1, p - n);// изменить length?
      }
    }

    // добавляем столбцы
    if (p < n) {
      for (let i = 0; i < o; i += 1) {
        for (let j = p; j < n; j += 1) {
          matrix[i].push(false);
        }
      }
    }

    // убираем строки
    if (o > m) matrix.splice(m - 1, o - m);// изменить length?

    // добавляем строки
    if (o < m) {
      const line = [];
      for (let j = 0; j < n; j += 1) {
        line.push(false);
      }

      for (let i = o; i < m; i += 1) {
        matrix.push(line.slice());
      }
    }

    this.rows = m;
    this.columns = n;
    return this;
  }
  clear() {
    this.matrix.forEach((row) => {
      row.forEach((item, i, arr) => {
        arr[i] = false;
      });
    });
    return this;
  }
  worker() {
    // обход всех ячеек с записью нового состояния
    const newMatrix = [];
    let flag = false;// изменилась ли матрица?
    this.matrix.forEach((row, i) => {
      const newRow = [];
      row.forEach((cell, j) => {
        const newCell = this.calculateCell(i, j);
        newRow.push(newCell);
        if (newCell !== cell) flag = true;
      });
      newMatrix.push(newRow);
    });

    if (flag) this.matrix = newMatrix;
    return this;
  }
  calculateCell(i, j) {
    // соседи за пределами поля считаются мертвыми
    let count = 0;// живые соседи
    let newCell = this.matrix[i][j];

    if (this.matrix[i - 1]) {
      if (this.matrix[i - 1][j - 1]) count += 1;
      if (this.matrix[i - 1][j]) count += 1;
      if (this.matrix[i - 1][j + 1]) count += 1;
    }

    if (this.matrix[i][j - 1]) count += 1;
    if (this.matrix[i][j + 1]) count += 1;

    if (this.matrix[i + 1]) {
      if (this.matrix[i + 1][j - 1]) count += 1;
      if (this.matrix[i + 1][j]) count += 1;
      if (this.matrix[i + 1][j + 1]) count += 1;
    }

    if (count < 2 || count > 3) newCell = false;
    else if (count === 3) newCell = true;
    return newCell;
  }
  toggleCell(i, j) {
    this.matrix[i][j] = !this.matrix[i][j];
  }
}
export default Board;
