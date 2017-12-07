
import Controller from './Controller';

describe('контроллер', function () {
  let controller;
  console.log('start controller test');
  describe('вставка html кода', function () {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeEnd', '<div class="game"> <table id="board"></table> <div id="controls"><button class="standart-button standart-button_ standart-button_small standart-button_-small">start</button><button class="standart-button standart-button_ standart-button_small standart-button_-small">pause</button><button class="standart-button standart-button_ standart-button_small standart-button_-small">clear</button> <div class="container"> <div class="label">speed</div> <div class="slider"> <div class="slider__view">1</div><input class="slider" oninput="sliderInput(event)" type="range" min="1" max="10" value="1"> </div> </div> <div class="container"> <div class="label">width</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> <div class="container"> <div class="label">height</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> </div> </div>');
    document.body.appendChild(div);
    it('проверка', function () {
      assert.notEqual(document.getElementsByClassName('game'), null, 'game not in DOM');
      assert.notEqual(document.getElementById('board'), null, 'board not in DOM');
      assert.notEqual(document.getElementById('controls'), null, ' controls not in DOM');
    });
  });
  
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
  
  describe('метод buttonsDisable()', function () {
    const buttons = controls.children;
    it('состояние кнопок, когда running = false', function () {
      assert.equal(buttons[0].disabled, false, 'start активен');
      assert.equal(buttons[1].disabled, true, 'pause неактивна');
      assert.equal(buttons[2].disabled, false, 'clear активна');
    });
    it('состояние кнопок, когда running = true', function () {
      controller.running = true;
      controller.buttonsDisable();
      assert.equal(buttons[0].disabled, true, 'start неактивен');
      assert.equal(buttons[1].disabled, false, 'pause активна');
      assert.equal(buttons[2].disabled, false, 'clear активна');
      controller.running = false;
      controller.buttonsDisable();
    });
  });
  
  describe("события", function () {
    it('клик по ячейке таблицы', function () {
      const cell = controller.table.children[0].children[0].children[0];
      assert.equal(controller.board.matrix[0][0], false, 'изначально ячейка = false');
      cell.click();
      assert.equal(controller.board.matrix[0][0], true, 'клик по ячейке меняет состояние на true');
      cell.click();
      assert.equal(controller.board.matrix[0][0], false, 'клик по ячейке меняет состояние на false');
    });
    it('клик по кнопке start', function (done) {
      const button = controller.controls.children[0];
      assert.equal(controller.running, false, 'before false');
      button.click();
      assert.equal(button.disabled && controller.running, true, 'after true');
      controller.running = false;
      setTimeout(done, 1000);
    });
    it('клик по кнопке pause', function () {
      const button = controller.controls.children[1];
      controller.running = true;
      assert.equal((!button.disabled && controller.running), true, 'before true');
      button.click();
      assert.equal((button.disabled && !controller.running), true, 'after false');
    });
    it('клик по кнопке clear', function () {
      const board = controller.board;
      const button = controller.controls.children[2];
      controller.running = true;
      board.setCell(0, 0);
      assert.equal((!button.disabled && board.matrix[0][0] && controller.running),true,'before true');
      button.click();
      assert.equal((!button.disabled && !board.matrix[0][0] && !controller.running),true,'after false');

    });
    it('слайдер speed', function () {
      const slider = document.querySelectorAll('input.slider')[0];
      slider.value = 5;
      controller.resizeBoard({ target: slider });
      assert.equal(controller.fps, 5);
    });
    it('слайдер Width', function () {
      const slider = document.querySelectorAll('input.slider')[1];
      slider.value = 16;
      controller.resizeBoard({ target: slider });
      assert.equal(controller.board.n, 16);
    });
    it('слайдер Height', function () {
      const slider = document.querySelectorAll('input.slider')[2];
      slider.value = 15;
      controller.resizeBoard({ target: slider });
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
  });
});
