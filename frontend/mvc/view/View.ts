import EventSender from '../utils/EventSender';

class View {
  table: HTMLTableElement;
  controls: HTMLElement;
  buttons: NodeListOf<HTMLButtonElement>;
  status: HTMLElement;
  tableClicked: EventSender;
  buttonClicked: EventSender;
  sliderChanged: EventSender;
  constructor() {
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
  }
  initDOMElements(): void {
    this.table = document.getElementById('board') as HTMLTableElement;
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.getElementsByTagName('button');
    this.status = this.controls.querySelector('.status') as HTMLElement;
  }
  initEvents(): void {
    this.tableClicked = new EventSender(this);
    this.buttonClicked = new EventSender(this);
    this.sliderChanged = new EventSender(this);
  }
  initHandlers(): void {
    this.table.onclick = (event: MouseEvent): void => {
      const element = event.target as HTMLElement;
      if (element.tagName === 'TD') {
        this.tableClicked.notify(event);
      }
    };
    this.controls.onclick = (event: MouseEvent): void => {
      const element = event.target as HTMLElement;
      if (element.tagName === 'BUTTON') {
        this.buttonClicked.notify(event);
      }
    };
    this.controls.onchange = (event: Event): void => {
      const element = event.target as HTMLElement;
      if (element.tagName === 'INPUT') {
        this.sliderChanged.notify(event);
      }
    };
  }
  setButtons(running: boolean): void {
    if (!this.buttons) return;
    // встроенный forEach для коллекции в браузере работает, а в тестах нет
    // по докам его быть не должно
    Array.prototype.forEach.call(this.buttons, (button) => {
      if (button.innerHTML === 'start') {
        button.disabled = running;
      }
      if (button.innerHTML === 'pause') {
        button.disabled = !running;
      }
    });
  }
  setStatus(running: boolean): void {
    if (!this.status) return;
    if (running) this.status.classList.remove('status_stopped');
    else this.status.classList.add('status_stopped');
  }
  getNewTbody(matrix: boolean[][], tableWidth: number): HTMLTableSectionElement {
    const columns: number = matrix[0].length;
    const size: number = tableWidth / columns;
    let tbody: HTMLTableSectionElement = document.createElement('tbody');
    matrix.forEach((row) => {
      let tr: HTMLTableRowElement = document.createElement('tr');
      row.forEach((cell) => {
        let td: HTMLTableCellElement = document.createElement('td');
        this.setTdClass(td, cell);
        td.style.width = `${size}px`;
        td.style.height = `${size}px`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
  initTable(matrix: boolean[][]): void {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody: HTMLElement = this.getNewTbody(matrix, table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  changeTable(matrix: boolean[][]): void {
    matrix.forEach((row: boolean[], i: number) => {
      row.forEach((cell: boolean, j: number) => {
        this.setTdClass(this.table.rows[i].cells[j], cell);
      });
    });
  }
  setTdClass(td: HTMLTableCellElement, flag: boolean): void {
    if (flag) td.classList.add('live');
    else td.classList.remove('live');
  }
}
export default View;
