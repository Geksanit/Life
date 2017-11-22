export default class Board {
  constructor(m = 10, n = 10) {
    // матрица m на n заполненная false
    this.matrix = [];
    this.running = false;// для циклической обработки
    this.m = m;// строки
    this.n = n;// столбцы
    for (let i = 0; i < m; i += 1) {
      const line = [];
      for (let j = 0; j < n; j += 1) {
        line.push(false);
      }

      this.matrix.push(line);
    }
  }

  resize(m, n) {
    this.running = false;
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

    this.m = m;
    this.n = n;
    return this;
  }

  stop() {
    this.running = false;
    return this;
  }

  clear() {
    this.running = false;
    for (let i = 0; i < this.m; i += 1) {
      for (let j = 0; j < this.n; j += 1) {
        this.matrix[i][j] = false;
      }
    }

    return this;
  }

  start() {
    this.running = true;
    return this;
  }

  worker() {
    // обход всех ячеек с записью нового состояния
    const newMatrix = [];
    let flag = false;// изменмлась ли матрица?
    for (let i = 0; i < this.matrix.length; i += 1) {
      const newLine = [];
      for (let j = 0; j < this.matrix[0].length; j += 1) {
        const cell = this.cell(i, j);
        newLine.push(cell);
        if (cell !== this.matrix[i][j]) flag = true;
      }

      newMatrix.push(newLine);
    }

    if (flag) this.matrix = newMatrix;
    return this;
  }

  cell(i, j) {
    // вычисляет новое состояние клетки
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

  setCell(i, j) {
    this.matrix[i][j] = !this.matrix[i][j];
  }
}
