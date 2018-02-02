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
    this.view.initTable(this.model.matrix);
    this.setRunning(false);
  }
  setSubscription():void {
    this.model.matrixChanged.attach((sender, { isResized, matrix }) => {
      if (isResized) { this.view.initTable(matrix); }
      else { this.view.changeTable(matrix); }
    });
    this.view.tableCellChanged.attach((sender, { row, cell }) => {
      this.model.toggleCell(row, cell);
    });
    this.view.startEvent.attach(() => {
      this.setRunning(true);
      this.anim();
    });
    this.view.pauseEvent.attach(() => {
      this.setRunning(false);
    });
    this.view.clearEvent.attach(() => {
      this.model.clearMatrix();
      this.setRunning(false);
    });
    this.view.speedChanged.attach((sender, { value }) => {
      this.fps = value;
    });
    this.view.widthChanged.attach((sender, { value }) => {
      this.setRunning(false);
      this.model.setWidthMatrix(value);
    });
    this.view.heightChanged.attach((sender, { value }) => {
      this.setRunning(false);
      this.model.setHeightMatrix(value);
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
