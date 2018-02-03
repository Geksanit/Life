import IEventSender from '../utils/IEventSender';

type matrixChangedMessage = {
  matrix: boolean[][];
  resized?: boolean;
};

interface IModel {
  matrix: boolean[][];
  matrixChanged: IEventSender<matrixChangedMessage>;
  setWidthMatrix(newValue: number): void;
  setHeightMatrix(newValue: number): void;
  clearMatrix(): void;
  calculateMatrix(): void;
  isRepeatMatrix(): boolean;
  toggleCell(row: number, column: number): void;
}

export { IModel, matrixChangedMessage };
