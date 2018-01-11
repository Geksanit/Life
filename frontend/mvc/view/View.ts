import Event from '../utils/Event';

class View {
  table: any;
  controls: any;
  buttons: any;
  status: any;
  tableClicked: Event;
  buttonClicked: Event;
  sliderChanged: Event;
  constructor() {
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
  }
  initDOMElements(): void {
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.getElementsByTagName('button');
    this.status = this.controls.querySelector('.status');
  }
  initEvents(): void {
    this.tableClicked = new Event(this);
    this.buttonClicked = new Event(this);
    this.sliderChanged = new Event(this);
  }
  initHandlers(): void {
    this.table.onclick = (event): void => {
      if (event.target.tagName === 'TD') {
        this.tableClicked.notify(event);
      }
    };
    this.controls.onclick = (event): void => {
      if (event.target.tagName === 'BUTTON') {
        this.buttonClicked.notify(event);
      }
    };
    this.controls.onchange = (event): void => {
      if (event.target.tagName === 'INPUT') {
        this.sliderChanged.notify(event);
      }
    };
  }
  setButtons(running: boolean): void {
    if (!this.buttons) return;
    // forEach для коллекции в браузере работает, а в тестах нет. по докам его быть не должно
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
  getNewTbody(matrix: any, tableWidth: number) {
    // заполнение тела таблицы
    const columns = matrix[0].length;
    const size = tableWidth / columns;
    let tbody: any = document.createElement('tbody');
    matrix.forEach((row) => {
      let tr: any = document.createElement('tr');
      row.forEach((cell) => {
        let td: any = document.createElement('td');
        this.setTdClass(td, cell);
        td.style.width = `${size}px`;
        td.style.height = `${size}px`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
  initTable(matrix: Array<object>): void {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.getNewTbody(matrix, table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  changeTable(matrix: Array<object>): void {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const tbody = table.children[0];
    matrix.forEach((row: Array<boolean>, i: number) => {
      row.forEach((cell: boolean, j: number) => {
        this.setTdClass(tbody.children[i].children[j], cell);
      });
    });
  }
  setTdClass(td: any, flag: boolean): void {
    if (flag) td.className = 'live';
    else td.className = '';
  }
}
export default View;
