import IModel from '../model/IModel';
import IView from '../view/IView';

class Controller {
  model: IModel;
  view: IView;
  isRunning: boolean;
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
      if (obj.resized) { this.view.initTable(obj.matrix); }
      else { this.view.changeTable(obj.matrix); }
    });
    this.view.tableClicked.attach((sender, { row, cell }) => {
      this.model.toggleCell(row, cell);
    });
    this.view.startClicked.attach(() => {
      this.setRunning(true);
      this.anim();
    });
    this.view.pauseClicked.attach(() => {
      this.setRunning(false);
    });
    this.view.clearClicked.attach(() => {
      this.model.clearMatrix();
      this.setRunning(false);
    });
    this.view.speedChanged.attach((sender, options) => {
      this.fps = options.value;
    });
    this.view.widthChanged.attach((sender, options) => {
      this.setRunning(false);
      this.model.setWidthMatrix(options.value);
    });
    this.view.heightChanged.attach((sender, options) => {
      this.setRunning(false);
      this.model.setHeightMatrix(options.value);
    });
  }
  setRunning(value: boolean): void {
    this.isRunning = value;
    this.view.setStatus(this.isRunning);
  }
  anim(callback?): void {
    // останавливается и вызывет callback(для тестов), когда матрица перестает меняться
    const loop = () => {
      setTimeout(() => {
        if (this.isRunning) {
          requestAnimationFrame(loop);
          this.model.calculateMatrix();
          if (this.model.isRepeatMatrix()) { this.setRunning(false); }
        } else if (callback) { callback(); }
      }, 1000 / this.fps);
    };
    loop();
  }
}
export default Controller;
