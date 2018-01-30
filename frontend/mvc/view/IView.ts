import IEventSender from '../utils/IEventSender';

interface IView {
  tableClicked: IEventSender;
  startClicked: IEventSender;
  pauseClicked: IEventSender;
  clearClicked: IEventSender;
  widthChanged: IEventSender;
  heightChanged: IEventSender;
  speedChanged: IEventSender;
  setStatus(running: boolean): void;
  initTable(matrix: boolean[][]): void;
  changeTable(matrix: boolean[][]): void;
}

export default IView;
