
import Board from './Board';

describe('модель', function () {
  describe('конструктор', function () {
    const arr = new Board(2, 2);
    it('матрица', function () {
      const a = new Board(0, 0);
      assert.deepEqual(a.matrix, [], 'not empty array');
      assert.deepEqual(arr.matrix, [[false, false], [false, false]], 'должна быть матрица 2 на 2 с ложными значениями');
    });
    it('атрибуты', function () {
      assert.equal(arr.m, 2);
      assert.equal(arr.n, 2);
    })
  });
  describe('методы модели', function () {
    let arr = new Board(2, 2);
    it('set cell', function () {
      arr.setCell(0, 0);
      assert.equal(arr.matrix[0][0], true, 'переключение ячейки');
      arr.setCell(0, 0);
      assert.equal(arr.matrix[0][0], false, 'переключение ячейки');
    });
    it('clear', function () {
      arr.setCell(0, 0);
      arr.setCell(1, 1);
      arr.clear();
      assert.equal(arr.matrix[0][0], false, 'ячейки обнулились');
      assert.equal(arr.matrix[1][1], false, 'ячейки обнулились');
    });
    arr = new Board(3, 3);
    it('cell', function () {
      arr.setCell(0, 0);
      arr.setCell(0, 1);
      assert.equal(arr.cell(1, 1), false, '2 живых соседа');

      arr.setCell(1, 0);
      assert.equal(arr.cell(1, 1), true, '3 живых соседа');

      arr.setCell(0, 2);
      assert.equal(arr.cell(1, 1), false, '4 живых соседа');
    });
    it('worker', function () {
      arr.worker();
      assert.deepEqual(arr.matrix, [[true, true, false], [true, false, false], [false, false, false]],'одна итерация');
      const board = new Board(3, 3);
      const oldBoard = board;
      board.worker();
      assert.equal(board, oldBoard, 'если матрица не меняется, ссылка остаетя актуальной');
    });
    describe('resize', function () {
      it('увеличение', function () {
        arr.resize(50, 40);
        assert.equal(arr.matrix.length, 50, '50 строк');
        assert.equal(arr.m, 50, '50 строк');
        assert.equal(arr.matrix[0].length, 40, '40 столбцов');
        assert.equal(arr.n, 40, '40 столбцов');
        assert.equal(arr.matrix[49][39], false, 'значение');
      });
      it('уменьшение', function () {
        arr.resize(10, 9);
        assert.equal(arr.matrix.length, 10, 'уменьшение');
        assert.equal(arr.m, 10, '10 строк');
        assert.equal(arr.matrix[0].length, 9, '9 столбцов');
        assert.equal(arr.n, 9, '9 столбцов');
      });
    });
  });
});
