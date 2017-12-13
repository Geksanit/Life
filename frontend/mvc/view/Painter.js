export default class Painter {
  constructor(board, table, controls) {
    this.board = board;
    this.table = table || document.getElementById('board');
    this.controls = controls || document.getElementById('controls');
    this.buttons = this.controls.getElementsByTagName('BUTTON');
  }
  statusToggle(running) {
    if (!this.buttons) return;
    for (let i = 0; i < this.buttons.length; i += 1) {
      const button = this.buttons[i];
      if (button.innerHTML === 'start') {
        if (running) button.disabled = true;
        else button.disabled = false;
      }
      if (button.innerHTML === 'pause') {
        if (running) button.disabled = false;
        else button.disabled = true;
      }
    }
    const status = this.controls.getElementsByClassName('status')[0];
    if (!status) return;
    if (running) status.classList.remove('status_stopped');
    else status.classList.add('status_stopped');
  }
  tableCellToggle(target) {
    target.classList.toggle('live');
  }
  painter(tableWidth) {
    // заполнение тела таблицы
    const { matrix } = this.board;
    const m = matrix.length;
    const n = matrix[0].length;
    const width = tableWidth / n;
    const height = width;

    const tbody = document.createElement('tbody');
    for (let i = 0; i < m; i += 1) {
      const tr = document.createElement('tr');
      for (let j = 0; j < n; j += 1) {
        const td = document.createElement('td');
        td.style.width = `${width}px`;
        td.style.height = `${height}px`;
        if (matrix[i][j]) td.className = 'live';
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    return tbody;
  }

  newTable() {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.painter(table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }

  repainter() {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const { matrix } = this.board;
    const tbody = table.children[0];
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const td = tbody.children[i].children[j];
        if (matrix[i][j]) td.className = 'live';
        else td.className = '';
      }
    }
  }
}
