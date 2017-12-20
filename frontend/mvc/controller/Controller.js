
import Board from '../model/Board';
import Painter from '../view/Painter';

const autobind = (self) => {
  Object.getOwnPropertyNames(self.constructor.prototype).forEach((key) => {
    const val = self[key];
    if (key !== 'constructor' && typeof val === 'function') self[key] = val.bind(self);
  });
  return self;
};

class Controller {
  constructor() {
    this.model = new Board(10, 10);
    this.view = new Painter(this.model);
    this.running = false;
    this.fps = 1;
    this.setSubscription();
    this.view.newTable(this.model.matrix);// начальная отрисовка
    this.setRunning(false);
  }
  setSubscription() {
    this.view.tableClicked.attach((sender, event) => {
      this.toggleCell(event);
    });
    this.view.buttonClicked.attach((sender, event) => {
      this.handlerButtons(event);
    });
    this.view.sliderChanged.attach((sender, event) => {
      this.handlerSliders(event);
    });
  }
  toggleCell({ target }) {
    const cell = target.cellIndex;
    const row = target.parentElement.sectionRowIndex;
    this.view.toggleCell(target);
    this.model.toggleCell(row, cell);
  }
  setRunning(value) {
    this.running = value;
    this.view.setButtons(this.running);
    this.view.setStatus(this.running);
  }
  anim(callback) {
    // останавливается и вызывет аргумент callback(для тестов), когда матрица перестает меняться
    function loop() {
      setTimeout(() => {
        if (this.running) {
          requestAnimationFrame(loop.bind(this));
          const flag = this.model.worker();
          if (!flag) { // изменилась ли матрица ?
            this.setRunning(false);
          }
        } else if (callback) {
          callback();
        }
      }, 1000 / this.fps);
    }
    loop.call(this);
  }
  handlerButtons({ target }) {
    switch (target.innerHTML) {
      case 'start':
        this.setRunning(true);
        this.anim();
        break;
      case 'pause':
        this.setRunning(false);
        break;
      case 'clear':
        this.model.clear();
        this.setRunning(false);
    }
  }
  handlerSliders({ target }) {
    const value = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.setRunning(false);
        this.model.resize(this.model.rows, value);
        break;
      case 'height':
        this.setRunning(false);
        this.model.resize(value, this.model.columns);
    }
  }
}
export default Controller;
