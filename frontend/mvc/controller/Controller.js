
import Model from '../model/Model';
import View from '../view/View';

class Controller {
  constructor() {
    this.model = new Model(10, 10);
    this.view = new View(this.model);
    this.running = false;
    this.fps = 1;
    this.setSubscription();
    this.view.initTable(this.model.matrix);// начальная отрисовка
    this.setRunning(false);
  }
  setSubscription() {
    this.model.matrixChanged.attach((sender, obj) => {
      if (obj.resized) this.view.initTable(obj.matrix);
      else this.view.changeTable(obj.matrix);
    });
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
    this.model.toggleCell(row, cell);
  }
  setRunning(value) {
    this.running = value;
    this.view.setButtons(this.running);
    this.view.setStatus(this.running);
  }
  anim(callback) {
    // останавливается и вызывет аргумент callback(для тестов), когда матрица перестает меняться
    const self = this;
    const loop = function loop() {
      setTimeout(() => {
        if (self.running) {
          requestAnimationFrame(loop);
          const flag = self.model.calculateMatrix();
          if (flag) { // повторилась ли матрица ?
            self.setRunning(false);
          }
        } else if (callback) {
          callback();
        }
      }, 1000 / self.fps);
    };
    loop();
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
        this.model.clearMatrix();
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
        this.model.resizeMatrix(this.model.rows, value);
        break;
      case 'height':
        this.setRunning(false);
        this.model.resizeMatrix(value, this.model.columns);
    }
  }
}
export default Controller;
