/* global assert */
import Model from '../model/Model';
import View from './View';

describe('Представление', () => {
  // вставка html в контроллере
  const modelRows = 5;
  const modelColumns = 5;
  let model;
  let view;
  beforeEach(() => {
    model = new Model(modelRows, modelColumns);
    view = new View(model);
  });
  describe('конструктор', () => {
    it('initDOMElements', () => {
      assert.equal(view.table, document.getElementById('board'));
      assert.equal(view.controls, document.getElementById('controls'));
    });
    it('initEvents', () => {
    
    });
    it('initHandlers', () => {
    
    });
    it('initSubscription', () => {
    
    });
  });
  describe('getNewTbody', () => {
    it('создает и заполняет tbody в соостветсви с моделью', () => {
      console.log(0, view.table.children);
      console.dir(view);
      view.model.toggleCell(1, 1);
      console.log(1, view);
      const tbody = view.getNewTbody(view.model.matrix, 400);
      assert.equal(tbody.children.length, modelRows, '5 строк');
      assert.equal(tbody.children[0].children.length, modelColumns, '5 столбцов');
    });
    it('сразу задает класс живым ячейкам', () => {
      view.model.toggleCell(1, 1);
      const tbody = view.getNewTbody(view.model.matrix, 400);
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('вычисляет ширину ячейки, в инлайн стили', () => {
      view.model.toggleCell(1, 1);
      const tbody = view.getNewTbody(view.model.matrix, 400);
      assert.equal(tbody.children[1].children[1].style.width, 400 / 5 + 'px', 'ширина');
      assert.equal(tbody.children[1].children[1].style.height, 400 / 5 + 'px', 'высота');
    });
  });
  describe('initTable', () => {
    it('содает tbody, и вставляет в таблицу', () => {
      const { table } = view;
      assert.equal(table.children.length, 0, 'нет tbody');
      view.model.setCell(1, 1);
      // view.initTable();
      assert.equal(table.children.length, 1, 'появился tbody');
      const tbody = table.children[0];
      assert.equal(tbody.children.length, 6, '6 строк');
      assert.equal(tbody.children[0].children.length, 6, '6 столбцов');
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('заменяет tbody, если есть', () => {
      board.setCell(1, 1);
      painter.initTable();
      const tbody = table.children[0];
      assert.equal(table.children.length, 1);
      assert.equal(tbody.children[1].children[1].className, '', 'класс живой клетки');
    });
    it('при ресайзе модели таблица тоже меняется', () => {
      board.resize(8, 9);
      painter.initTable();
      const tbody = table.children[0];
      assert.equal(tbody.children.length, 8, '8 строк');
      assert.equal(tbody.children[0].children.length, 9, '9 столбцов');
    });
  });
  describe('repainter', () => {
    const table = document.createElement('table');
    const board = new Board(5, 5);
    const painter = new Painter(board, table);
    board.setCell(1, 1);
    painter.newTable();
    painter.repainter();
    const tbody = table.children[0];
    it('размер не меняет', () => {
      assert.equal(tbody.children.length, 5, '5 строк, размер не должен меняться');
      assert.equal(tbody.children[0].children.length, 5, '5 столбцов, размер не должен меняться');
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', () => {
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс изменился');
    });
  });
  describe('tableCellToggle', () => {
    const table = document.createElement('table');
    const board = new Board(5, 5);
    const painter = new Painter(board, table);
    const td = document.createElement('td');
    it('переключает класс', () => {
      painter.tableCellToggle(td);
      assert.equal(td.classList[0], 'live');
    });
    it('переключает класс', () => {
      painter.tableCellToggle(td);
      assert.equal(td.classList[0], undefined);
    });
  });
  describe('statusToggle', () => {
    const painter = new Painter(new Board(5, 5), document.createElement('table'), document.getElementById('controls'));
    const buttons = painter.buttons;
    const status = painter.controls.getElementsByClassName('status')[0];
    it('start', () => {
      painter.statusToggle(false);
      assert.equal(buttons[0].disabled, false, 'start button');
      assert.equal(buttons[1].disabled, true, 'pause button');
      assert.equal(status.classList[1], 'status_stopped');
    });
    it('pause', () => {
      painter.statusToggle(true);
      assert.equal(buttons[0].disabled, true, 'start button');
      assert.equal(buttons[1].disabled, false, 'pause button');
      assert.equal(status.classList[1], undefined);
    });
  });
});
