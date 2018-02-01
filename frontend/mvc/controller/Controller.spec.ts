import Controller from './Controller.ts';
import Model from '../model/Model';
import View from '../view/View';
import { assert } from 'chai';
import { SinonStub } from 'sinon';

describe('контроллер', () => {
  let div: HTMLElement;
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
  const controller = new Controller(new Model(10, 10), new View());
  describe('constructor', () => {
    assert.strictEqual(controller.fps, 1);
    assert.strictEqual(controller.isRunning, false);
  });
  describe('setRunning', () => {
    it('сообщает вью отобразить статус true', () => {
      const spy: SinonStub = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(true);
      assert.strictEqual(controller.isRunning, true);
      assert.isOk(spy.calledWith(true));
      spy.restore();
    });
    it('сообщает вью отобразить статус false', () => {
      const spy: SinonStub = sinon.stub(controller.view, 'setStatus');
      controller.setRunning(false);
      assert.strictEqual(controller.isRunning, false);
      assert.isOk(spy.calledWith(false));
      spy.restore();
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
      const spy: SinonStub = sinon.stub(controller.model, 'toggleCell');

      controller.view.tableCellChanged.notify({ row: 2, cell:1 });
      assert.isOk(spy.calledWith(2, 1));
      spy.restore();
    });
  });
  describe('handleButtons', () => {
    it('клик по кнопке start запускает цикл анимации', () => {
      const spy: SinonStub = sinon.stub(controller, 'anim');
      assert.equal(controller.isRunning, false, 'before false');

      controller.view.startEvent.notify({});
      assert.equal(controller.isRunning, true, 'after true');
      assert.isOk(spy.called);
      spy.restore();
    });
    it('клик по кнопке pause останавливает цикл анимации', () => {
      assert.equal((controller.isRunning), true, 'before true');

      controller.view.pauseEvent.notify({});
      assert.equal((controller.isRunning), false, 'after false');
    });
    it('клик по кнопке clear очищает матрицу модели и останавливает цикл анимации', () => {
      const spy: SinonStub = sinon.stub(controller.model, 'clearMatrix');
      controller.setRunning(true);
      assert.equal((controller.isRunning), true, 'before true');

      controller.view.clearEvent.notify({});
      assert.equal((controller.isRunning), false, 'after false');
      assert.isOk(spy.called);
      spy.restore();
    });
  });
  describe('handleSliders', () => {
    it('слайдер speed, регулирует частоту цикла анимации', () => {
      controller.view.speedChanged.notify({ value: 5 });
      assert.equal(controller.fps, 5);
    });
    it('слайдер Width', () => {
      const spy1: SinonStub = sinon.stub(controller.model, 'setWidthMatrix');
      const spy2: SinonStub = sinon.stub(controller, 'setRunning');

      controller.view.widthChanged.notify({ value: 16 });
      assert.isOk(spy1.calledWith(16));
      assert.isOk(spy2.calledWith(false));
      spy1.restore();
      spy2.restore();
    });
    it('слайдер Height', () => {
      const spy1: SinonStub = sinon.stub(controller.model, 'setHeightMatrix');
      const spy2: SinonStub = sinon.stub(controller, 'setRunning');

      controller.view.heightChanged.notify({ value: 15 });
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
