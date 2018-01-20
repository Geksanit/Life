import { IModel } from '../model/Model';
import { IView } from '../view/View';

interface IController {
}

class Controller implements IController{
  model: IModel;
  view: IView;
  private running: boolean;
  fps: number;
  constructor(model: IModel, view: IView) {
    this.model = model;
    this.view = view;
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
  isRunning(): boolean {
    return this.running;
  }
  anim(callback?): void {
    // останавливается и вызывет callback(для тестов), когда матрица перестает меняться
    const loop = () => {
      setTimeout(() => {
        if (this.isRunning()) {
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
  handleCell({ row, cell }): void {
    this.model.toggleCell(row, cell);
  }
  handlerButtons({ nameButton }): void {
    switch (nameButton) {
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
  handlerSliders({ value, nameSlider }): void {
    switch (nameSlider) {
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
