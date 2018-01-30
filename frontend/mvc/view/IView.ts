import IEventSender from '../utils/IEventSender';

interface IView {
  tableClicked: IEventSender;
  buttonClicked: IEventSender;
  sliderChanged: IEventSender;
  setButtons(running: boolean): void;
  setStatus(running: boolean): void;
  initTable(matrix: boolean[][]): void;
  changeTable(matrix: boolean[][]): void;
}

export default IView;
