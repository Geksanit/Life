/* global assert */
import Controller from './Controller';

describe('контроллер', () => {
  let controller;
  console.log('start controller test');
  describe('вставка html кода', () => {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeEnd', '<div class="game"><table id="board"></table><div id="controls"><div class="container"><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">start</button><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">pause</button><button class="standart-button js-standart-button standart-button_color_blue standart-button_size_small button-mix">clear</button></div><div class="container"><div class="label">speed</div><div class="slider slider-mix"><div class="slider__view">1</div><input class="slider__input js-slider__input" type="range" min="1" max="10" value="1"></div></div><div class="container"><div class="label">width</div><div class="slider slider-mix"><div class="slider__view">10</div><input class="slider__input js-slider__input" type="range" min="0" max="100" value="10"></div></div><div class="container"><div class="label">height</div><div class="slider slider-mix"><div class="slider__view">10</div><input class="slider__input js-slider__input" type="range" min="0" max="100" value="10"></div></div><div class="container"><div class="status"></div></div></div></div>');
    document.body.appendChild(div);
    it('проверка', () => {
      assert.notEqual(document.getElementsByClassName('game'), null, 'game not in DOM');
      assert.notEqual(document.getElementById('board'), null, 'board not in DOM');
      assert.notEqual(document.getElementById('controls'), null, ' controls not in DOM');
    });
  });
  /*
  describe('Создание контроллера', function () {
    controller = new Controller();
    it('находит таблицу', function () {
      assert.equal(controller.table !== undefined, true);
    });
    it('находит панель управления', function () {
      assert.equal(controller.controls !== undefined, true);
    });
    it('создает модель', function () {
      assert.equal(controller.board !== undefined, true);
    });
    it('создает представление', function () {
      assert.equal(controller.painter !== undefined, true);
    });
    it('создает свойства', function () {
      assert.equal(controller.running === false, true);
      assert.equal(controller.fps, 1);
    });
  });
  
  describe('метод buttonsToggle()', function () {
    const buttons = controller.controls.getElementsByTagName('BUTTON');
    it('состояние кнопок, когда running = false', function () {
      assert.equal(buttons[0].disabled, false, 'start активен');
      assert.equal(buttons[1].disabled, true, 'pause неактивна');
      assert.equal(buttons[2].disabled, false, 'clear активна');
    });
    it('состояние кнопок, когда running = true', function () {
      controller.running = true;
      controller.buttonsToggle();
      assert.equal(buttons[0].disabled, true, 'start неактивен');
      assert.equal(buttons[1].disabled, false, 'pause активна');
      assert.equal(buttons[2].disabled, false, 'clear активна');
      controller.running = false;
      controller.buttonsToggle();
    });
  });
  
  describe("события", function () {
    const buttons = controller.painter.buttons;
    const sliders = document.querySelectorAll('.slider__input');
    it('клик по ячейке таблицы', function () {
      const cell = controller.table.children[0].children[0].children[0];
      assert.equal(controller.board.matrix[0][0], false, 'изначально ячейка = false');
      cell.click();
      assert.equal(controller.board.matrix[0][0], true, 'клик по ячейке меняет состояние на true');
      cell.click();
      assert.equal(controller.board.matrix[0][0], false, 'клик по ячейке меняет состояние на false');
    });
    it('клик по кнопке start', function (done) {
      const button = buttons[0];
      assert.equal(controller.running, false, 'before false');
      button.click();
      assert.equal(button.disabled && controller.running, true, 'after true');
      controller.running = false;
      setTimeout(done, 1000);
    });
    it('клик по кнопке pause', function () {
      const button = buttons[1];
      controller.running = true;
      assert.equal((!button.disabled && controller.running), true, 'before true');
      button.click();
      assert.equal((button.disabled && !controller.running), true, 'after false');
    });
    it('клик по кнопке clear', function () {
      const board = controller.board;
      const button = buttons[2];
      controller.running = true;
      board.setCell(0, 0);
      assert.equal((!button.disabled && board.matrix[0][0] && controller.running), true, 'before true');
      button.click();
      assert.equal((!button.disabled && !board.matrix[0][0] && !controller.running), true, 'after false');

    });
    it('слайдер speed', function () {
      const slider = sliders[0];
      const func = controller.resizeBoard;
      slider.value = 5;
      func({ target: slider });
      assert.equal(controller.fps, 5);
    });
    it('слайдер Width', function () {
      const slider = sliders[1];
      const func = controller.resizeBoard;
      slider.value = 16;
      func({ target: slider });
      assert.equal(controller.board.n, 16);
    });
    it('слайдер Height', function () {
      const slider = sliders[2];
      const func = controller.resizeBoard;
      slider.value = 15;
      func({ target: slider });
      assert.equal(controller.board.m, 15);
    });
  });
  
  describe('анимация', function () {
    const board = controller.board;
    it('anim 1', function (done) {
      board.resize(2, 3);
      board.clear();
      {
        board.setCell(0, 0);
        board.setCell(0, 1);
        board.setCell(0, 2);
        board.setCell(1, 0);
      }
      controller.running = true;
      
      // anim останавливается и вызывет аргумент, когда матрица перестает меняться
      controller.anim(done);
    });
    it('anim 2', function () {
      assert.deepEqual(board.matrix, [[true, true, false], [true, true, false]]);
    });
  });*/
});
