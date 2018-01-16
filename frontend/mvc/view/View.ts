import EventSender from '../utils/EventSender';

class View {
  $table: JQuery;
  $controls: JQuery;
  $buttons: JQuery;
  $status: JQuery;
  tableClicked: EventSender;
  buttonClicked: EventSender;
  sliderChanged: EventSender;
  constructor() {
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
  }
  initDOMElements(): void {
    this.$table = $('#board');
    this.$controls = $('#controls');
    this.$buttons = this.$controls.find('button');
    this.$status = this.$controls.find('.status');
  }
  initEvents(): void {
    this.tableClicked = new EventSender(this);
    this.buttonClicked = new EventSender(this);
    this.sliderChanged = new EventSender(this);
  }
  initHandlers(): void {
    this.$table.on('click.view', 'td', (event) => {
      this.tableClicked.notify(event);
    });
    this.$controls.on('click.view', 'button', (event) => {
      this.buttonClicked.notify(event);
    });
    this.$controls.on('change.view', 'input', (event) => {
      this.sliderChanged.notify(event);
    });
  }
  setButtons(running: boolean): void {
    this.$buttons.each((index, button) => {
      const $button = $(button);
      if ($button.text() === 'start') {
        $button.prop('disabled', running);
      }
      if ($button.text() === 'pause') {
        $button.prop('disabled', !running);
      }
    });
  }
  setStatus(running: boolean): void {
    if (running) this.$status.removeClass('status_stopped');
    else this.$status.addClass('status_stopped');
  }
  getNewTbody(matrix: boolean[][], tableWidth: number): JQuery {
    const columns: number = matrix[0].length;
    const size: number = tableWidth / columns;
    const rows = matrix.map((row) => {
      const cells = row.map((cell) => {
        let $td = $('<td/>').css({ width: size, height: size });
        this.setTdClass($td, cell);
        return $td;
      });
      return $('<tr/>').append(cells);
    });
    return $('<tbody/>').append(rows);
  }
  initTable(matrix: boolean[][]): void {
    const { $table } = this;
    const $newTbody = this.getNewTbody(matrix, $table.width());
    const $oldTbody = $table.find('tbody');
    if ($oldTbody.length) $oldTbody.replaceWith($newTbody);
    else $table.append($newTbody);
  }
  changeTable(matrix: boolean[][]): void {
    const table = this.$table[0] as HTMLTableElement;
    matrix.forEach((row: boolean[], i: number) => {
      row.forEach((cell: boolean, j: number) => {
        this.setTdClass($(table.rows[i].cells[j]), cell);
      });
    });
  }
  setTdClass($td: JQuery, flag: boolean): void {
    if (flag) $td.addClass('live');
    else $td.removeClass('live');
  }
}
export default View;
