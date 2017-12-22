import Event from '../utils/Event';

class Painter {
  constructor(model) {
    this.model = model;
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
    this.initSubscription();
  }
  initDOMElements() {
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.querySelectorAll('button');
  }
  initEvents() {
    this.tableClicked = new Event(this);
    this.buttonClicked = new Event(this);
    this.sliderChanged = new Event(this);
  }
  initHandlers() {
    this.table.onclick = (event) => {
      if (event.target.tagName === 'TD') {
        this.tableClicked.notify(event);
      }
    };
    this.controls.onclick = (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.buttonClicked.notify(event);
      }
    };
    this.controls.onchange = (event) => {
      if (event.target.tagName === 'INPUT') {
        this.sliderChanged.notify(event);
      }
    };
  }
  initSubscription() {
    this.model.matrixChanged.attach((sender, obj) => {
      if (obj.resized) this.initTable(obj.matrix);
      else this.changeTable(obj.matrix);
    });
  }
  setButtons(running) {
    if (!this.buttons) return;
    this.buttons.forEach((button) => {
      if (button.innerHTML === 'start') {
        button.disabled = running;
      }
      if (button.innerHTML === 'pause') {
        button.disabled = !running;
      }
    });
  }
  setStatus(running) {
    const status = this.controls.getElementsByClassName('status')[0];
    if (!status) return;
    if (running) status.classList.remove('status_stopped');
    else status.classList.add('status_stopped');
  }
  getNewTbody(matrix, tableWidth) {
    // заполнение тела таблицы
    const columns = matrix[0].length;
    const size = tableWidth / columns;
    let tbody = document.createElement('tbody');
    matrix.forEach((row) => {
      let tr = document.createElement('tr');
      row.forEach((cell) => {
        let td = document.createElement('td');
        this.setTdClass(td, cell);
        td.style.width = `${size}px`;
        td.style.height = `${size}px`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
  initTable(matrix) {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.getNewTbody(matrix, table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  changeTable(matrix) {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const tbody = table.children[0];
    matrix.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.setTdClass(tbody.children[i].children[j], cell);
      });
    });
  }
  setTdClass(td, flag) {
    if (flag) td.className = 'live';
    else td.className = '';
  }
}
export default Painter;
