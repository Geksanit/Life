
import Board from '../model/Board';
import Painter from './Painter';

describe('Представление', function () {
  // вставка html в контроллере
  // const div = document.createElement('div');
  // div.insertAdjacentHTML('beforeEnd', '<div class="game"><table id="board"></table><div id="controls"><div class="container"><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">start</button><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">pause</button><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">clear</button></div><div class="container"><div class="label">speed</div><div class="slider slider-mix"><div class="slider__view">1</div><input class="slider__input js-slider__input" type="range" min="1" max="10" value="1"></div></div><div class="container"><div class="label">width</div><div class="slider slider-mix"><div class="slider__view">10</div><input class="slider__input js-slider__input" type="range" min="0" max="100" value="10"></div></div><div class="container"><div class="label">height</div><div class="slider slider-mix"><div class="slider__view">10</div><input class="slider__input js-slider__input" type="range" min="0" max="100" value="10"></div></div><div class="container"><div class="status"></div></div></div></div>');
  // document.body.appendChild(div);
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
  describe('tableCellToggle', function () {
    const table = document.createElement('table');
    const board = new Board(5, 5);
    const painter = new Painter(board, table);
    const td = document.createElement('td');
    it('переключает класс', function () {
      painter.tableCellToggle(td);
      assert.equal(td.classList[0], 'live');
    });
    it('переключает класс', function () {
      painter.tableCellToggle(td);
      assert.equal(td.classList[0], undefined);
    });
  });
  describe('statusToggle', function () {
    const painter = new Painter(new Board(5, 5), document.createElement('table'), document.getElementById('controls'));
    const buttons = painter.buttons;
    const status = painter.controls.getElementsByClassName('status')[0];
    it('start', function () {
      painter.statusToggle(false);
      assert.equal(buttons[0].disabled, false, 'start button');
      assert.equal(buttons[1].disabled, true, 'pause button');
      assert.equal(status.classList[1], 'status_stopped')
    });
    it('pause', function () {
      painter.statusToggle(true);
      assert.equal(buttons[0].disabled, true, 'start button');
      assert.equal(buttons[1].disabled, false, 'pause button');
      assert.equal(status.classList[1], undefined)
    });
    
  });
});
