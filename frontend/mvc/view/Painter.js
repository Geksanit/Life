class Painter {
  constructor(board) {
    this.board = board;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.querySelectorAll('button');
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
  paintTbody(tableWidth) {
    // заполнение тела таблицы
    const { matrix, columns } = this.board;
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
  newTable() {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.paintTbody(table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  repaintTable() {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const { matrix } = this.board;
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
