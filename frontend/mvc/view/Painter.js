class Event {
  constructor(sender) {
    this.sender = sender;
    this.listeners = [];
  }
  attach(listener) {
    this.listeners.push(listener);
  }
  notify(args) {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}

class Painter {
  constructor(model) {
    this.model = model;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.querySelectorAll('button');
    this.tableClicked = new Event(this);
    this.buttonClicked = new Event(this);
    this.sliderChanged = new Event(this);
    this.setHandlers();
    this.setSubscription();
  }
  setHandlers() {
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
  setSubscription() {
    this.model.matrixChanged.attach((sender, obj) => {
      if (obj.resized) this.newTable(obj.matrix);
      else this.repaintTable(obj.matrix);
    });
  }
  setButtons(running) {
    if (!this.buttons) return;
    this.buttons.forEach((button) => {
      if (button.innerHTML === 'start') {
        if (running) button.disabled = true;
        else button.disabled = false;
      }
      if (button.innerHTML === 'pause') {
        if (running) button.disabled = false;
        else button.disabled = true;
      }
    });
  }
  setStatus(running) {
    const status = this.controls.getElementsByClassName('status')[0];
    if (!status) return;
    if (running) status.classList.remove('status_stopped');
    else status.classList.add('status_stopped');
  }
  toggleCell(target) {
    target.classList.toggle('live');
  }
  paintTbody(matrix, tableWidth) {
    // заполнение тела таблицы
    const columns = matrix[0].length;
    const size = tableWidth / columns;
    const tbody = document.createElement('tbody');
    matrix.forEach((row) => {
      const tr = document.createElement('tr');
      row.forEach((cell) => {
        const td = document.createElement('td');
        this.setTdClass(td, cell);
        td.style.width = `${size}px`;
        td.style.height = `${size}px`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
  newTable(matrix) {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.paintTbody(matrix, table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  repaintTable(matrix) {
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
