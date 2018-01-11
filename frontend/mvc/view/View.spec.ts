import Model from '../model/Model.ts';
import View from './View.ts';
import { assert } from 'chai';

describe('Представление', () => {
  let div;
  describe('подготовка к тестам, вставка html кода', () => {
    div = document.createElement('div');
    div.insertAdjacentHTML('beforeEnd', `<div class="game">
      <table id="board"></table>
      <div id="controls">
      <div class="container">
      <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">start</button>
      <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">pause</button>
      <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">clear</button>
      </div>
      <div class="container">
      <div class="label">speed</div>
      <div class="slider slider-mix">
      <div class="slider__view">1</div>
      <input class="slider__input js-slider__input" type="range" min="1" max="10" value="1">
      </div>
      </div>
      <div class="container">
      <div class="label">width</div>
      <div class="slider slider-mix">
      <div class="slider__view">10</div>
      <input class="slider__input js-slider__input" type="range" min="0" max="100" value="10">
      </div>
      </div>
      <div class="container">
      <div class="label">height</div>
      <div class="slider slider-mix">
      <div class="slider__view">10</div>
      <input class="slider__input js-slider__input" type="range" min="0" max="100" value="10">
      </div>
      </div>
      <div class="container">
      <div class="status"></div>
      </div>
      </div>
      </div>`);
    document.body.appendChild(div);
    it('проверка', () => {
      assert.notEqual(document.getElementsByClassName('game'), null, 'game not in DOM');
      assert.notEqual(document.getElementById('board'), null, 'board not in DOM');
      assert.notEqual(document.getElementById('controls'), null, ' controls not in DOM');
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
      assert.equal(view.table, document.getElementById('board'), 'таблица');
      assert.isDefined(view.table, 'таблица');
      assert.equal(view.controls, document.getElementById('controls'), 'контейнер');
      assert.isDefined(view.controls, 'контейнер');
      assert.deepEqual(view.buttons, document.querySelectorAll('button'), 'кнопки');
      assert.isDefined(view.buttons, 'кнопки');
      assert.equal(view.status, document.querySelector('.status'), 'статус');
      assert.isDefined(view.status, 'статус');
    });
  });
  describe('getNewTbody', () => {
    it('создает и заполняет tbody в соостветсви с моделью', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth);
      assert.equal(tbody.children.length, modelRows, '5 строк');
      assert.equal(tbody.children[0].children.length, modelColumns, '5 столбцов');
    });
    it('сразу задает класс живым ячейкам', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth);
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('вычисляет ширину ячейки, в инлайн стили', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth);
      assert.equal(tbody.children[1].children[1].style.width, `${tableWidth / modelColumns}px`, 'ширина');
      assert.equal(tbody.children[1].children[1].style.height, `${tableWidth / modelColumns}px`, 'высота');
    });
  });
  describe('initTable', () => {
    it('содает tbody, и вставляет в таблицу', () => {
      const { table } = view;
      assert.equal(table.children.length, 0, 'нет tbody');
      model.toggleCell(1, 1);
      view.initTable(model.matrix);
      assert.equal(table.children.length, 1, 'появился tbody');
      const tbody = table.children[0];
      assert.equal(tbody.children.length, modelRows, 'строки');
      assert.equal(tbody.children[0].children.length, modelColumns, 'столбцы');
      assert.equal(tbody.children[1].children[1].className, 'live', 'класс живой клетки');
    });
    it('заменяет tbody, если есть', () => {
      const { table } = view;
      model.toggleCell(2, 2);
      view.initTable(model.matrix);
      const tbody = table.children[0];
      assert.equal(table.children.length, 1, 'в таблице только 1 tbody');
      assert.equal(tbody.children[1].children[1].className, '', 'класс клетки');
      assert.equal(tbody.children[2].children[2].className, 'live', 'класс клетки');
    });
    it('при ресайзе модели таблица тоже меняется', () => {
      model.resizeMatrix(8, 9);
      view.initTable(model.matrix);
      const tbody = view.table.children[0];
      assert.equal(tbody.children.length, 8, '8 строк');
      assert.equal(tbody.children[0].children.length, 9, '9 столбцов');
      model.resizeMatrix(5, 5);
      view.initTable(model.matrix);
    });
  });
  describe('changeTable', () => {
    it('размер не меняет', () => {
      view.changeTable(model.matrix);
      const tbody = view.table.children[0];
      assert.equal(tbody.children.length, modelRows);
      assert.equal(tbody.children[0].children.length, modelColumns);
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', () => {
      model.toggleCell(3, 3);
      view.changeTable(model.matrix);
      const tbody = view.table.children[0];
      assert.equal(tbody.children[3].children[3].className, 'live', 'класс изменился');
    });
  });
  describe('setTdClass', () => {
    const td = document.createElement('td');
    it('переключает класс', () => {
      view.setTdClass(td, true);
      assert.equal(td.classList[0], 'live');
    });
    it('переключает класс', () => {
      view.setTdClass(td, false);
      assert.equal(td.classList[0], undefined);
    });
  });
  describe('setButtons', () => {
    it('переключает кнопки, false', () => {
      view.setButtons(false);
      assert.equal(view.buttons[0].disabled, false, 'start button');
      assert.equal(view.buttons[1].disabled, true, 'pause button');
    });
    it('переключает кнопки, true', () => {
      view.setButtons(true);
      assert.equal(view.buttons[0].disabled, true, 'start button');
      assert.equal(view.buttons[1].disabled, false, 'pause button');
    });
  });
  describe('setStatus', () => {
    it('отбражает статус, false', () => {
      view.setStatus(false);
      assert.equal(view.status.classList.contains('status_stopped'), true);
    });
    it('отбражает статус, true', () => {
      view.setStatus(true);
      assert.equal(view.status.classList.contains('status_stopped'), false);
    });
  });
  it('очистка html', () => {
    document.body.removeChild(div);
    assert.isNull(document.getElementById('table'));
  });
});
