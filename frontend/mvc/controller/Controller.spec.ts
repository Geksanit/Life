/* global assert */
import Controller from './Controller.ts';

describe('контроллер', () => {
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
  const controller = new Controller();
  describe('constructor', () => {
    assert.strictEqual(controller.fps, 1);
    assert.strictEqual(controller.running, false);
  });
  describe('setRunning', () => {
    it('сообщает вью отобразить статус true', () => {
      const spy1 = sinon.stub(controller.view, 'setButtons');
      const spy2 = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(true);
      assert.strictEqual(controller.running, true);
      assert.isOk(true);
      assert.isOk(spy1.calledWith(true));
      assert.isOk(spy2.calledWith(true));
      spy1.restore();
      spy2.restore();
    });
    it('сообщает вью отобразить статус false', () => {
      const spy1 = sinon.stub(controller.view, 'setButtons');
      const spy2 = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(false);
      assert.strictEqual(controller.running, false);
      assert.isOk(spy1.calledWith(false));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
  });
  describe('anim', () => {
    const { model } = controller;
    it('цикл просчета модели и её отбражения', (done) => {
      model.resizeMatrix(2, 3);
      model.clearMatrix();
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      model.toggleCell(0, 2);
      model.toggleCell(1, 0);
      controller.running = true;
      // anim останавливается и вызывет аргумент, когда матрица перестает меняться
      controller.anim(done);
    });
    it('проверка результата', () => {
      assert.deepEqual(model.matrix, [[true, true, false], [true, true, false]]);
      model.resizeMatrix(10, 10);
    });
  });
  describe('handleCell', () => {
    it('вызывет соответствующий метод модели', () => {
      const table = document.getElementsByTagName('TABLE')[0];
      const cell = table.children[0].children[2].children[1];
      const spy = sinon.stub(controller.model, 'toggleCell');
      controller.handleCell({ target: cell });
      assert.isOk(spy.calledWith(2, 1));
      spy.restore();
    });
  });
  describe('handleButtons', () => {
    it('клик по кнопке start запускает цикл анимации', () => {
      const button = controller.view.buttons[0];
      const spy = sinon.stub(controller, 'anim');
      assert.equal(controller.running, false, 'before false');
      button.click();
      assert.equal(button.disabled && controller.running, true, 'after true');
      assert.isOk(spy.called);
      spy.restore();
    });
    it('клик по кнопке pause останавливает цикл анимации', () => {
      const button = controller.view.buttons[1];
      assert.equal((!button.disabled && controller.running), true, 'before true');
      button.click();
      assert.equal((button.disabled && !controller.running), true, 'after false');
    });
    it('клик по кнопке clear очищает матрицу модели и останавливает цикл анимации', () => {
      const button = controller.view.buttons[2];
      const spy = sinon.stub(controller.model, 'clearMatrix');
      controller.setRunning(true);
      assert.equal((!button.disabled && controller.running), true, 'before true');
      button.click();
      assert.equal((!button.disabled && !controller.running), true, 'after false');
      assert.isOk(spy.called);
      spy.restore();
    });
  });
  describe('handleSliders', () => {
    it('слайдер speed, регулирует частоту цикла анимации', () => {
      const slider = controller.view.controls.querySelectorAll('input')[0];
      slider.value = 5;
      controller.handlerSliders({ target: slider });
      assert.equal(controller.fps, 5);
    });
    it('слайдер Width', () => {
      const slider = controller.view.controls.querySelectorAll('input')[1];
      const spy1 = sinon.stub(controller.model, 'resizeMatrix');
      const spy2 = sinon.stub(controller, 'setRunning');
      slider.value = 16;
      controller.handlerSliders({ target: slider });
      assert.isOk(spy1.calledWith(10, 16));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
    it('слайдер Height', () => {
      const slider = controller.view.controls.querySelectorAll('input')[2];
      const spy1 = sinon.stub(controller.model, 'resizeMatrix');
      const spy2 = sinon.stub(controller, 'setRunning');
      slider.value = 15;
      controller.handlerSliders({ target: slider });
      assert.isOk(spy1.calledWith(15, 10));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
  });
  it('очистка html', () => {
    document.body.removeChild(div);
    assert.isNull(document.getElementById('table'));
  });
});