import Model from '../model/Model.ts';
import View from './View.ts';
import { assert } from 'chai';

describe('Представление', () => {
  let div;
  describe('подготовка к тестам, вставка html кода', () => {
    div = document.createElement('div');
    div.insertAdjacentHTML('beforeEnd', `<div class="game">
      <table class="js-game__board"></table>
      <div class="js-game__controls">
      <div class="game__container">
      <button class="js-game__button">start</button>
      <button class="js-game__button">pause</button>
      <button class="js-game__button">clear</button>
      </div>
      <div class="game__container">
      <div class="game__label">speed</div>
      <div class="game__slider">
      <div class="slider__view">1</div>
      <input class="slider__input js-slider__input" type="range" min="1" max="10" value="1">
      </div>
      </div>
      <div class="game__container">
      <div class="game__label">width</div>
      <div class="game__slider">
      <div class="slider__view">10</div>
      <input class="slider__input js-slider__input" type="range" min="0" max="100" value="10">
      </div>
      </div>
      <div class="game__container">
      <div class="game__label">height</div>
      <div class="game__slider">
      <div class="slider__view">10</div>
      <input class="slider__input js-slider__input" type="range" min="0" max="100" value="10">
      </div>
      </div>
      <div class="game__container">
      <div class="js-game__status"></div>
      </div>
      </div>
      </div>`);
    document.body.appendChild(div);
    it('проверка', () => {
      assert.notEqual(document.querySelector('.game'), null, 'game not in DOM');
      assert.notEqual(document.querySelector('.js-game__board'), null, 'board not in DOM');
      assert.notEqual(document.querySelector('.js-game__controls'), null, ' controls not in DOM');
    });
  });
  const modelRows = 5;
  const modelColumns = 5;
  const tableWidth = 400;
  let model;
  let view;
  beforeEach(() => {
    model = new Model(modelRows, modelColumns);
    view = new View();
  });
  describe('конструктор', () => {
    it('initDOMElements', () => {
      assert.equal(view.$table[0], document.querySelector('.js-game__board'), 'таблица');
      assert.isDefined(view.$table[0], 'таблица');
      assert.equal(view.$controls[0], document.querySelector('.js-game__controls'), 'контейнер');
      assert.isDefined(view.$controls[0], 'контейнер');
      assert.deepEqual(view.$buttons[0], document.querySelector('.js-game__button'), 'кнопки');
      assert.isOk(view.$buttons.length === 3, '3 кнопки');
      assert.equal(view.$status[0], document.querySelector('.js-game__status'), 'статус');
      assert.isDefined(view.$status[0], 'статус');
    });
  });
  describe('getNewTbody', () => {
    it('создает и заполняет tbody в соостветсви с моделью', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.equal(tbody.rows.length, modelRows, '5 строк');
      assert.equal(tbody.rows[1].cells.length, modelColumns, '5 столбцов');
    });
    it('сразу задает класс живым ячейкам', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.equal(tbody.rows[1].cells[1].className, 'live', 'класс живой клетки');
    });
    it('вычисляет ширину ячейки, в инлайн стили', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.equal(tbody.rows[1].cells[1].style.width, `${tableWidth / modelColumns}px`, 'ширина');
      assert.equal(tbody.rows[1].cells[1].style.height, `${tableWidth / modelColumns}px`, 'высота');
    });
  });
  describe('initTable', () => {
    it('содает tbody, и вставляет в таблицу', () => {
      const { $table } = view;
      assert.equal($table[0].children.length, 0, 'нет tbody');
      model.toggleCell(1, 1);
      view.initTable(model.matrix);
      assert.equal($table[0].children.length, 1, 'появился tbody');
      const tbody = $table[0].children[0];
      assert.equal(tbody.rows.length, modelRows, 'строки');
      assert.equal(tbody.rows[0].cells.length, modelColumns, 'столбцы');
      assert.equal(tbody.rows[1].cells[1].className, 'live', 'класс живой клетки');
    });
    it('заменяет tbody, если есть', () => {
      const { $table } = view;
      model.toggleCell(2, 2);
      view.initTable(model.matrix);
      const tbody = $table[0].children[0];
      assert.equal($table[0].children.length, 1, 'в таблице только 1 tbody');
      assert.equal(tbody.rows[1].cells[1].className, '', 'класс клетки');
      assert.equal(tbody.rows[2].cells[2].className, 'live', 'класс клетки');
    });
    it('при ресайзе модели таблица тоже меняется', () => {
      model.setWidthMatrix(9);
      model.setHeightMatrix(8);
      view.initTable(model.matrix);
      const tbody = view.$table[0].children[0];
      assert.equal(tbody.rows.length, 8, '8 строк');
      assert.equal(tbody.rows[0].cells.length, 9, '9 столбцов');
      // возврат в исходное состояние
      model.setWidthMatrix(5);
      model.setHeightMatrix(5);
      view.initTable(model.matrix);
    });
  });
  describe('changeTable', () => {
    it('размер не меняет', () => {
      view.changeTable(model.matrix);
      const tbody = view.$table[0].children[0];
      assert.equal(tbody.rows.length, modelRows);
      assert.equal(tbody.rows[0].cells.length, modelColumns);
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', () => {
      model.toggleCell(3, 3);
      view.changeTable(model.matrix);
      const tbody = view.$table[0].children[0];
      assert.equal(tbody.rows[3].cells[3].className, 'live', 'класс изменился');
    });
  });
  describe('setTdClass', () => {
    const $td = $('<td/>');
    it('переключает класс', () => {
      view.setTdClass($td, true);
      assert.isOk($td.hasClass('live'));
    });
    it('переключает класс', () => {
      view.setTdClass($td, false);
      assert.isNotOk($td.hasClass('live'));
    });
  });
  describe('setButtons', () => {
    it('переключает кнопки, false', () => {
      view.setButtons(false);
      assert.equal(view.$buttons[0].disabled, false, 'start button');
      assert.equal(view.$buttons[1].disabled, true, 'pause button');
    });
    it('переключает кнопки, true', () => {
      view.setButtons(true);
      assert.equal(view.$buttons[0].disabled, true, 'start button');
      assert.equal(view.$buttons[1].disabled, false, 'pause button');
    });
  });
  describe('setStatus', () => {
    it('отбражает статус, false', () => {
      view.setStatus(false);
      assert.equal(view.$status.hasClass('game__status_stopped'), true);
    });
    it('отбражает статус, true', () => {
      view.setStatus(true);
      assert.equal(view.$status.hasClass('game__status_stopped'), false);
    });
  });
  describe('очистка html', () => {
    it('проверка', () => {
      document.body.removeChild(div);
      assert.isNull(document.querySelector('.game'));
    });
  });
});
