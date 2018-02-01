import IEventSender from '../utils/IEventSender';

interface IView {
  tableCellChanged: IEventSender;
  startEvent: IEventSender;
  pauseEvent: IEventSender;
  clearEvent: IEventSender;
  widthChanged: IEventSender;
  heightChanged: IEventSender;
  speedChanged: IEventSender;
  setStatus(running: boolean): void;
  initTable(matrix: boolean[][]): void;
  changeTable(matrix: boolean[][]): void;
}

export default IView;
