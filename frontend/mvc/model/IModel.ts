import IEventSender from '../utils/IEventSender';

interface IModel {
  matrix: boolean[][];
  matrixChanged: IEventSender;
  setWidthMatrix(newValue: number): void;
  setHeightMatrix(newValue: number): void;
  clearMatrix(): void;
  calculateMatrix(): void;
  isRepeatMatrix(): boolean;
  toggleCell(row: number, column: number): void;
}

export default IModel;
