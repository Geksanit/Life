export default class Painter {
  constructor(board, table) {
    // console.log('construct', table);
    this.table = table;
    this.board = board;
  }

  painter(tableWidth) {
    // заполнение тела таблицы
    const { matrix } = this.board;
    const m = matrix.length;
    const n = matrix[0].length;
    // console.log(m,n);
    const width = tableWidth / n;
    const height = width;

    const tbody = document.createElement('tbody');
    for (let i = 0; i < m; i += 1) {
      const tr = document.createElement('tr');
      for (let j = 0; j < n; j += 1) {
        const td = document.createElement('td');
        td.style.width = width + 'px';
        td.style.height = height + 'px';
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
    // console.log(m,n);

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const td = tbody.children[i].children[j];
        if (matrix[i][j]) td.className = 'live';
        else td.className = '';
      }
    }
  }
}
