import Model from '../model/Model';
import View from '../view/View';

class Controller {
  model: Model;
  view: View;
  running: boolean;
  fps: number;
  constructor() {
    this.model = new Model(10, 10);
    this.view = new View();
    this.running = false;
    this.fps = 1;
    this.setSubscription();
    this.view.initTable(this.model.matrix);// начальная отрисовка
    this.setRunning(false);
  }
  setSubscription():void {
    this.model.matrixChanged.attach((sender, obj) => {
      if (obj.resized) this.view.initTable(obj.matrix);
      else this.view.changeTable(obj.matrix);
    });
    this.view.tableClicked.attach((sender, event) => {
      this.handleCell(event);
    });
    this.view.buttonClicked.attach((sender, event) => {
      this.handlerButtons(event);
    });
    this.view.sliderChanged.attach((sender, event) => {
      this.handlerSliders(event);
    });
  }
  setRunning(value: boolean): void {
    this.running = value;
    this.view.setButtons(this.running);
    this.view.setStatus(this.running);
  }
  anim(callback?): void {
    // останавливается и вызывет callback(для тестов), когда матрица перестает меняться
    const loop = () => {
      setTimeout(() => {
        if (this.running) {
          requestAnimationFrame(loop);
          const flag: boolean = this.model.calculateMatrix();
          if (flag) { // повторилась ли матрица ?
            this.setRunning(false);
          }
        } else if (callback) {
          callback();
        }
      }, 1000 / this.fps);
    };
    loop();
  }
  handleCell({ target }): void {
    const cell: number = target.cellIndex;
    const row: number = target.parentElement.sectionRowIndex;
    this.model.toggleCell(row, cell);
  }
  handlerButtons({ target }): void {
    switch ($(target).text()) {
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
  handlerSliders({ target }): void {
    const value: number = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.setRunning(false);
        this.model.setWidthMatrix(value);
        break;
      case 'height':
        this.setRunning(false);
        this.model.setHeightMatrix(value);
    }
  }
}
export default Controller;
