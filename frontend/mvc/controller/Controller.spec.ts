import Controller from './Controller.ts';
import { assert } from 'chai';
import { SinonStub } from 'sinon';

describe('контроллер', () => {
  let div: HTMLElement;
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
  const controller = new Controller();
  describe('constructor', () => {
    assert.strictEqual(controller.fps, 1);
    assert.strictEqual(controller.isRunning(), false);
  });
  describe('setRunning', () => {
    it('сообщает вью отобразить статус true', () => {
      const spy1: SinonStub = sinon.stub(controller.view, 'setButtons');
      const spy2: SinonStub = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(true);
      assert.strictEqual(controller.isRunning(), true);
      assert.isOk(true);
      assert.isOk(spy1.calledWith(true));
      assert.isOk(spy2.calledWith(true));
      spy1.restore();
      spy2.restore();
    });
    it('сообщает вью отобразить статус false', () => {
      const spy1: SinonStub = sinon.stub(controller.view, 'setButtons');
      const spy2: SinonStub = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(false);
      assert.strictEqual(controller.isRunning(), false);
      assert.isOk(spy1.calledWith(false));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
  });
  describe('anim', () => {
    const { model } = controller;
    it('цикл просчета модели и её отбражения', (done) => {
      controller.fps = 100;// что бы не превысить таймаут ожидания done
      model.setHeightMatrix(2);
      model.setWidthMatrix(3);
      model.clearMatrix();
      model.toggleCell(0, 0);
      model.toggleCell(0, 1);
      model.toggleCell(0, 2);
      model.toggleCell(1, 0);
      controller.setRunning(true);
      // anim останавливается и вызывет аргумент, когда матрица перестает меняться
      controller.anim(done);
    });
    it('проверка результата', () => {
      assert.deepEqual(model.matrix, [[true, true, false], [true, true, false]]);
      model.setHeightMatrix(10);
      model.setWidthMatrix(10);
    });
  });
  describe('handleCell', () => {
    it('вызывет соответствующий метод модели', () => {
      const table = document.getElementsByTagName('TABLE')[0] as HTMLTableElement;
      const cell = table.rows[2].cells[1] as HTMLTableCellElement;
      const spy: SinonStub = sinon.stub(controller.model, 'toggleCell');
      controller.handleCell({ target: cell });
      assert.isOk(spy.calledWith(2, 1));
      spy.restore();
    });
  });
  describe('handleButtons', () => {
    it('клик по кнопке start запускает цикл анимации', () => {
      const button = controller.view.$buttons[0] as HTMLButtonElement;
      const spy: SinonStub = sinon.stub(controller, 'anim');
      assert.equal(controller.isRunning(), false, 'before false');
      button.click();
      assert.equal(button.disabled && controller.isRunning(), true, 'after true');
      assert.isOk(spy.called);
      spy.restore();
    });
    it('клик по кнопке pause останавливает цикл анимации', () => {
      const button = controller.view.$buttons[1] as HTMLButtonElement;
      assert.equal((!button.disabled && controller.isRunning()), true, 'before true');
      button.click();
      assert.equal((button.disabled && !controller.isRunning()), true, 'after false');
    });
    it('клик по кнопке clear очищает матрицу модели и останавливает цикл анимации', () => {
      const button = controller.view.$buttons[2] as HTMLButtonElement;
      const spy: SinonStub = sinon.stub(controller.model, 'clearMatrix');
      controller.setRunning(true);
      assert.equal((!button.disabled && controller.isRunning()), true, 'before true');
      button.click();
      assert.equal((!button.disabled && !controller.isRunning()), true, 'after false');
      assert.isOk(spy.called);
      spy.restore();
    });
  });
  describe('handleSliders', () => {
    it('слайдер speed, регулирует частоту цикла анимации', () => {
      const slider = controller.view.$controls.find('input')[0] as HTMLInputElement;
      slider.value = '5';
      controller.handlerSliders({ target: slider });
      assert.equal(controller.fps, 5);
    });
    it('слайдер Width', () => {
      const slider = controller.view.$controls.find('input')[1] as HTMLInputElement;
      const spy1: SinonStub = sinon.stub(controller.model, 'setWidthMatrix');
      const spy2: SinonStub = sinon.stub(controller, 'setRunning');
      slider.value = '16';
      controller.handlerSliders({ target: slider });
      assert.isOk(spy1.calledWith(16));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
    it('слайдер Height', () => {
      const slider = controller.view.$controls.find('input')[2] as HTMLInputElement;
      const spy1: SinonStub = sinon.stub(controller.model, 'setHeightMatrix');
      const spy2: SinonStub = sinon.stub(controller, 'setRunning');
      slider.value = '15';
      controller.handlerSliders({ target: slider });
      assert.isOk(spy1.calledWith(15));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
  });
  describe('очистка html', () => {
    it('проверка', () => {
      document.body.removeChild(div);
      assert.isNull(document.getElementById('table'));
    });
  });
});
