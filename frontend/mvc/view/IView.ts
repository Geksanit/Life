import IEventSender from '../utils/IEventSender';

type tableCellAddress = {
  row: number;
  cell:number;
};


interface IView {
  tableCellChanged: IEventSender<tableCellAddress>;
  started: IEventSender<null>;
  paused: IEventSender<null>;
  cleared: IEventSender<null>;
  widthChanged: IEventSender<number>;
  heightChanged: IEventSender<number>;
  speedChanged: IEventSender<number>;
  setStatus(running: boolean): void;
  initTable(matrix: boolean[][]): void;
  changeTable(matrix: boolean[][]): void;
}

export { IView, tableCellAddress };
