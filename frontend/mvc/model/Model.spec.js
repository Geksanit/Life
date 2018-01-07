/* global assert */
import Model from './Model';

describe('модель', () => {
  const modelRows = 5;
  const modelColumns = 5;
  let model;
  beforeEach(() => {
    model = new Model(modelRows, modelColumns);
  });
  describe('constructor', () => {
    it('матрица', () => {
      const board = new Model(2, 2);
      assert.deepEqual(board.matrix, [[false, false], [false, false]], 'должна быть матрица 2 на 2 с ложными значениями');
    });
    it('атрибуты', () => {
      assert.equal(model.rows, modelRows);
      assert.equal(model.columns, modelColumns);
    });
  });
  describe('resizeMatrix', () => {
    it('увеличение', () => {
      model.resizeMatrix(50, 40);
      assert.equal(model.matrix.length, 50, '50 строк матрицы');
      assert.equal(model.rows, 50, '50 строк');
      assert.equal(model.matrix[0].length, 40, '40 столбцов матрицы');
      assert.equal(model.columns, 40, '40 столбцов');
      assert.equal(model.matrix[49][39], false, 'значение ячейки');
    });
    it('уменьшение', () => {
      model.resizeMatrix(50, 40);
      model.resizeMatrix(10, 9);
      assert.equal(model.matrix.length, 10, '10 строк матрицы');
      assert.equal(model.rows, 10, '10 строк');
      assert.equal(model.matrix[0].length, 9, '9 столбцов матрицы');
      assert.equal(model.columns, 9, '9 столбцов');
    });
  });
  describe('clearMatrix', () => {
    it('обнуление ячеек', () => {
      model.toggleCell(0, 0);
      model.toggleCell(1, 1);
      model.clearMatrix();
      assert.equal(model.matrix[0][0], false, 'ячейки обнулились');
      assert.equal(model.matrix[1][1], false, 'ячейки обнулились');
    });
  });
  describe('calculateMatrix', () => {
    const board = new Model(3, 3);
    let flag;
    board.toggleCell(0, 0); board.toggleCell(0, 1); board.toggleCell(1, 0);
    it('новое состояние матрицы', () => {
      assert.deepEqual(board.matrix, [
        [true, true, false], [true, false, false], [false, false, false],
      ]);
    });
    it('возвращаемое значение сообщает о неизменении матрицы', () => {
      flag = board.calculateMatrix();
      assert.deepEqual(board.matrix, [
        [true, true, false], [true, true, false], [false, false, false],
      ]);
      assert.equal(flag, false, 'матрица не повторилась');
    });
    it('возвращаемое значение сообщает об изменении матрицы', () => {
      flag = board.calculateMatrix();
      assert.deepEqual(board.matrix, [
        [true, true, false], [true, true, false], [false, false, false],
      ]);
      assert.equal(flag, true, 'матрица повторилась');
    });
  });
  describe('isRepeat', () => {
    const board = new Model(3, 3);
    it('матрица проверяется первый раз', () => {
      assert.equal(board.isRepeatMatrix(board.matrix), false, 'первая проверка');
    });
    it('при повторной проверке такой же матрицы(по содержимому) обнаруживется повторение', () => {
      assert.equal(board.isRepeatMatrix(board.matrix), true, 'вторая проверка');
    });
  });
  describe('calculateCell', () => {
    it('2 живых соседа', () => {
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      assert.equal(model.calculateCell(1, 1), false, 'клетка остается мертвой');
    });
    it('3 живых соседа', () => {
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      model.toggleCell(1, 0);
      assert.equal(model.calculateCell(1, 1), true, 'клетка оживает');
    });
    it('4 живых соседа', () => {
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      model.toggleCell(1, 0);
      model.toggleCell(0, 2);
      assert.equal(model.calculateCell(1, 1), false, 'клетка умирает');
    });
  });
  describe('toggleCell', () => {
    it('переключение ячейки', () => {
      assert.equal(model.matrix[0][0], false);
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true);
    });
    it('переключение ячейки', () => {
      assert.equal(model.matrix[0][0], false);
      model.toggleCell(0, 0);
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], false);
    });
  });
});
