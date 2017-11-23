
import Board from '../model/Board';
import Painter from './Painter';

describe('Представление', function () {
  describe('painter', function () {
    const table = document.createElement('table');
    const board = new Board(5, 5);
    const painter = new Painter(board, table);
    board.setCell(1, 1);
    const tbody = painter.painter(400);
    it('создает и заполняет tbody в соостветсви с моделью', function () {
      assert.equal(tbody.children.length, 5, '5 строк');
      assert.equal(tbody.children[0].children.length, 5, '5 столбцов');
    });
    it('сразу задает класс живым ячейкам', function () {
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('вычисляет ширину ячейки, в инлайн стили', function () {
      assert.equal(tbody.children[1].children[1].style.width, 400 / 5 + 'px', 'ширина');
      assert.equal(tbody.children[1].children[1].style.height, 400 / 5 + 'px', 'высота');
    });
  });
  describe('new table', function () {
    const table = document.createElement('table');
    const board = new Board(6, 6);
    const painter = new Painter(board, table);
    board.setCell(1, 1);
    
    it('содает tbody, и вставляет в таблицу', function () {
      assert.equal(table.children.length, 0, 'нет tbody');
      painter.newTable();
      assert.equal(table.children.length, 1, 'появился tbody');
      const tbody = table.children[0];
      assert.equal(tbody.children.length, 6, '6 строк');
      assert.equal(tbody.children[0].children.length, 6, '6 столбцов');
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('заменяет tbody, если есть', function () {
      board.setCell(1, 1);
      painter.newTable();
      const tbody = table.children[0];
      assert.equal(table.children.length, 1);
      assert.equal(tbody.children[1].children[1].className, '', 'класс живой клетки');
    });
    it('при ресайзе модели таблица тоже меняется', function () {
      board.resize(8, 9);
      painter.newTable();
      const tbody = table.children[0];
      assert.equal(tbody.children.length, 8, '8 строк');
      assert.equal(tbody.children[0].children.length, 9, '9 столбцов');
    });
  });
  describe('repainter', function () {
    const table = document.createElement('table');
    const board = new Board(5, 5);
    const painter = new Painter(board, table);
    board.setCell(1, 1);
    painter.newTable();
    painter.repainter();
    const tbody = table.children[0];
    it('размер не меняет', function () {
      assert.equal(tbody.children.length, 5, '5 строк, размер не должен меняться');
      assert.equal(tbody.children[0].children.length, 5, '5 столбцов, размер не должен меняться');
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', function () {
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс изменился');
    });
  });
});
