/* global assert */
import Model from './Model';

describe('модель', () => {
  const modelRows = 5;
  const modelColumns = 5;
  let model;
  beforeEach(() => {
    model = new Model(modelRows, modelColumns);
  });
  describe('конструктор', () => {
    it('матрица', () => {
      const board = new Model(2, 2);
      assert.deepEqual(board.matrix, [[false, false], [false, false]], 'должна быть матрица 2 на 2 с ложными значениями');
    });
    it('атрибуты', () => {
      assert.equal(model.rows, modelRows);
      assert.equal(model.columns, modelColumns);
    });
  });
  describe('методы', () => {
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
    it('clearMatrix', () => {
      model.toggleCell(0, 0);
      model.toggleCell(1, 1);
      model.clearMatrix();
      assert.equal(model.matrix[0][0], false, 'ячейки обнулились');
      assert.equal(model.matrix[1][1], false, 'ячейки обнулились');
    });
    it('calculateMatrix', () => {
      const arr = new Model(3, 3);
      let flag;
      arr.toggleCell(0, 0); arr.toggleCell(0, 1); arr.toggleCell(1, 0);
      assert.deepEqual(arr.matrix, [
        [true, true, false], [true, false, false], [false, false, false],
      ]);

      flag = arr.calculateMatrix();
      assert.deepEqual(arr.matrix, [
        [true, true, false], [true, true, false], [false, false, false],
      ]);
      assert.equal(flag, false, 'матрица не повторилась');

      flag = arr.calculateMatrix();
      assert.deepEqual(arr.matrix, [
        [true, true, false], [true, true, false], [false, false, false],
      ]);
      assert.equal(flag, true, 'матрица повторилась');
    });
    it('isRepeat', () => {
      let value = model.isRepeatMatrix(model.matrix);
      assert.equal(value, false, 'первая проверка');
      value = model.isRepeatMatrix(model.matrix);
      assert.equal(value, true, 'вторая проверка');
    });
    it('calculateCell', () => {
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      assert.equal(model.calculateCell(1, 1), false, '2 живых соседа');

      model.toggleCell(1, 0);
      assert.equal(model.calculateCell(1, 1), true, '3 живых соседа');

      model.toggleCell(0, 2);
      assert.equal(model.calculateCell(1, 1), false, '4 живых соседа');
    });
    it('toggleCell', () => {
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true, 'переключение ячейки');
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], false, 'переключение ячейки');
    });
  });
});
