import Model from '../model/Model.ts';
import View from './View.ts';
import { assert } from 'chai';

describe('Представление', () => {
  let div;
  describe('подготовка к тестам, вставка html кода', () => {
    div = document.createElement('div');
    div.insertAdjacentHTML('beforeEnd', `
      <div class="game">
        <table class="js-game__board game__board"></table>
        <div class="js-game__controls game__controls">
          <div class="game__container">
            <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small game__button js-game__button-start">start</button>
            <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small game__button js-game__button-pause">pause</button>
            <button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small game__button js-game__button-clear">clear</button>
          </div>
          <div class="game__container">
            <div class="game__label">speed</div>
            <div class="game__slider">
              <div class="slider slider_color_undefined js-game__slider-speed">
                <div class="slider__view js-slider__view">1</div>
                <div class="slider__line js-slider__line"></div>
                <input class="slider__input js-slider__input" type="range" min="1" max="10" value="1">
              </div>
            </div>
          </div>
          <div class="game__container">
            <div class="game__label">width</div>
            <div class="game__slider">
              <div class="slider slider_color_undefined js-game__slider-width">
                <div class="slider__view js-slider__view">10</div>
                <div class="slider__line js-slider__line"></div>
                <input class="slider__input js-slider__input" type="range" min="1" max="100" value="10">
              </div>
            </div>
          </div>
          <div class="game__container">
            <div class="game__label">height</div>
            <div class="game__slider">
              <div class="slider slider_color_undefined js-game__slider-height">
                <div class="slider__view js-slider__view">10</div>
                <div class="slider__line js-slider__line"></div>
                <input class="slider__input js-slider__input" type="range" min="1" max="100" value="10">
              </div>
            </div>
          </div>
          <div class="game__container">
            <div class="game__status js-game__status"></div>
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
  const MODEL_ROWS = 5;
  const MODEL_COLUMNS = 5;
  const tableWidth = 400;
  const CLASS_CEIL = 'game__ceil';
  const CLASS_CEIL_LIVE = 'game__ceil_live';
  let model;
  let view;
  beforeEach(() => {
    model = new Model(MODEL_ROWS, MODEL_COLUMNS);
    view = new View();
  });
  describe('конструктор', () => {
    it('initDOMElements', () => {
      assert.isOk(view.$table.length, 'таблица');
      assert.isOk(view.$controls.length, 'контейнер');
      assert.isOk(view.$buttonStart.length, 'кнопка старт');
      assert.isOk(view.$buttonPause.length, 'кнопка пауза');
      assert.isOk(view.$buttonClear.length, 'кнопка очистка');
      assert.isOk(view.$sliderSpeed.length, 'слайдер скорости');
      assert.isOk(view.$sliderHeight.length, 'слайдер высоты');
      assert.isOk(view.$sliderWidth.length, 'слайдер ширины');
      assert.isOk(view.$status.length, 'статус');
    });
  });
  describe('getNewTbody', () => {
    it('создает и заполняет tbody в соостветсви с моделью', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.equal(tbody.rows.length, MODEL_ROWS, '5 строк');
      assert.equal(tbody.rows[1].cells.length, MODEL_COLUMNS, '5 столбцов');
    });
    it('сразу задает класс живым ячейкам', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.isOk($(tbody.rows[1].cells[1]).hasClass(CLASS_CEIL_LIVE), 'класс живой клетки');
    });
    it('вычисляет ширину ячейки, в инлайн стили', () => {
      model.toggleCell(1, 1);
      const tbody = view.getNewTbody(model.matrix, tableWidth)[0];
      assert.equal(tbody.rows[1].cells[1].style.width, `${tableWidth / MODEL_COLUMNS}px`, 'ширина');
      assert.equal(tbody.rows[1].cells[1].style.height, `${tableWidth / MODEL_COLUMNS}px`, 'высота');
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
      assert.equal(tbody.rows.length, MODEL_ROWS, 'строки');
      assert.equal(tbody.rows[0].cells.length, MODEL_COLUMNS, 'столбцы');
      assert.isOk($(tbody.rows[1].cells[1]).hasClass(CLASS_CEIL_LIVE), 'класс живой клетки');
    });
    it('заменяет tbody, если есть', () => {
      const { $table } = view;
      model.toggleCell(2, 2);
      view.initTable(model.matrix);
      const tbody = $table[0].children[0];
      assert.equal($table[0].children.length, 1, 'в таблице только 1 tbody');
      assert.isOk($(tbody.rows[1].cells[1]).hasClass(CLASS_CEIL), 'класс клетки');
      assert.isNotOk($(tbody.rows[1].cells[1]).hasClass(CLASS_CEIL_LIVE), 'класс клетки');
      assert.isOk($(tbody.rows[2].cells[2]).hasClass(CLASS_CEIL_LIVE), 'класс живой клетки');
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
      assert.equal(tbody.rows.length, MODEL_ROWS);
      assert.equal(tbody.rows[0].cells.length, MODEL_COLUMNS);
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', () => {
      const tbody = view.$table[0].children[0];
      assert.isNotOk($(tbody.rows[3].cells[3]).hasClass(CLASS_CEIL_LIVE), 'класс изменился');
      model.toggleCell(3, 3);
      view.changeTable(model.matrix);
      const tbody = view.$table[0].children[0];
      assert.isOk($(tbody.rows[3].cells[3]).hasClass(CLASS_CEIL_LIVE), 'класс изменился');
    });
  });
  describe('setTdClass', () => {
    const $td = $('<td/>');
    it('переключает класс', () => {
      view.setTdClass($td, true);
      assert.isOk($td.hasClass(CLASS_CEIL_LIVE));
    });
    it('переключает класс', () => {
      view.setTdClass($td, false);
      assert.isNotOk($td.hasClass(CLASS_CEIL_LIVE));
    });
  });
  describe('setButtons', () => {
    it('переключает кнопки, false', () => {
      view.setButtons(false);
      assert.equal(view.$buttonStart.prop('disabled'), false, 'start button');
      assert.equal(view.$buttonPause.prop('disabled'), true, 'pause button');
    });
    it('переключает кнопки, true', () => {
      view.setButtons(true);
      assert.equal(view.$buttonStart.prop('disabled'), true, 'start button');
      assert.equal(view.$buttonPause.prop('disabled'), false, 'pause button');
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
