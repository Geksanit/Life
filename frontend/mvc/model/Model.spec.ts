import Model from './Model.ts';
import { assert } from 'chai';

describe('модель', () => {
  const MODEL_ROWS: number = 10;
  const MODEL_COLUMNS: number = 10;
  let model: Model;
  beforeEach(() => {
    model = new Model(MODEL_ROWS, MODEL_COLUMNS);
  });
  describe('constructor', () => {
    it('матрица', () => {
      const board: Model = new Model(2, 2);
      assert.deepEqual(board.matrix, [[false, false], [false, false]], 'должна быть матрица 2 на 2 с ложными значениями');
    });
    it('атрибуты', () => {
      assert.equal(model.rows, MODEL_ROWS);
      assert.equal(model.columns, MODEL_COLUMNS);
    });
  });
  describe('setWidthMatrix', () => {
    it('увеличение числа столбцов матрицы', () => {
      const oldMatrix = model.matrix;
      const newValue: number = 40;
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true, 'значение ячейки до');
      assert.isOk(model.matrix[0].length < newValue, 'было меньше столбцов');

      model.setWidthMatrix(newValue);
      assert.equal(model.matrix[0].length, newValue, 'новое число столбцов');
      assert.equal(model.columns, newValue, 'свойсво модели');
      assert.equal(model.matrix[0][newValue-1], false, 'значение новой ячейки');
      assert.equal(model.matrix[0][0], true, 'значение старой ячейки не меняется');
      assert.notEqual(model.matrix, oldMatrix, 'метод не мутирует');
    });
    it('уменьшение числа столбцов', () => {
      const newValue: number = 5;
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true, 'значение ячейки до');
      assert.isOk(model.matrix[0].length > newValue, 'было больше столбцов');

      model.setWidthMatrix(newValue);
      assert.equal(model.matrix[0].length, newValue, 'число столбцов матрицы');
      assert.equal(model.columns, newValue, 'свойсво модели');
      assert.equal(model.matrix[0][0], true, 'значение ячейки не меняется');
    });
  });
  describe('setHeightMatrix', () => {
    it('увеличение числа срок матрицы', () => {
      const oldMatrix = model.matrix;
      const newValue: number = 50;
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true, 'значение ячейки до');
      assert.isOk(model.matrix.length < newValue, 'было меньше строк');

      model.setHeightMatrix(newValue);
      assert.equal(model.matrix.length, newValue, 'число строк матрицы');
      assert.equal(model.rows, newValue, 'свойсво модели');
      assert.equal(model.matrix[newValue-1][0], false, 'значение новой ячейки');
      assert.equal(model.matrix[0][0], true, 'значение ячейки не меняется');
      assert.notEqual(model.matrix, oldMatrix, 'метод не мутирует');
    });
    it('уменьшение числа строк', () => {
      const newValue: number = 4;
      model.toggleCell(0, 0);
      assert.equal(model.matrix[0][0], true, 'значение ячейки до');
      assert.isOk(model.matrix.length > newValue, 'было больше строк');

      model.setHeightMatrix(newValue);
      assert.equal(model.matrix.length, newValue, 'число строк матрицы');
      assert.equal(model.rows, newValue, 'свойсво модели');
      assert.equal(model.matrix[0][0], true, 'значение ячейки не меняется');
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
    const board: Model = new Model(3, 3);
    board.toggleCell(0, 0); board.toggleCell(0, 1); board.toggleCell(1, 0);
    it('вычисляет новое состояние матрицы', () => {
      assert.deepEqual(board.matrix, [
        [true, true, false], [true, false, false], [false, false, false],
      ]);
    });
  });
  describe('isRepeat', () => {
    const board: Model = new Model(3, 3);
    it('матрица проверяется первый раз и запоминается', () => {
      assert.equal(board.isRepeatMatrix(), false, 'первая проверка');
    });
    it('при повторной проверке такой же матрицы(по содержимому) обнаруживется повторение', () => {
      assert.equal(board.isRepeatMatrix(), true, 'вторая проверка');
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
