import EventSender from '../utils/EventSender';
import IView from './IView';

class View implements IView{
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
    this.$table = $('.js-game__board');
    this.$controls = $('.js-game__controls');
    this.$buttons = this.$controls.find('.js-game__button');
    this.$status = this.$controls.find('.js-game__status');
  }
  initEvents(): void {
    this.tableClicked = new EventSender(this);
    this.buttonClicked = new EventSender(this);
    this.sliderChanged = new EventSender(this);
  }
  initHandlers(): void {
    this.$table.on('click.view', 'td', ({ target }) => {
      const cell: number = $(target).prop('cellIndex') as number;
      const row: number = $(target.parentElement).prop('sectionRowIndex') as number;
      this.tableClicked.notify({ row, cell });
    });
    this.$controls.on('click.view', 'button', ({ target }) => {
      const nameButton: string = $(target).text();
      this.buttonClicked.notify({ nameButton });
    });
    this.$controls.on('change.view', 'input', ({ target }) => {
      const value: number = Number($(target).val());
      const nameSlider: string = $(target.parentElement.previousElementSibling).text();
      this.sliderChanged.notify({ value, nameSlider });
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
    if (running) this.$status.removeClass('game__status_stopped');
    else this.$status.addClass('game__status_stopped');
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
  setTdClass($td: JQuery, isLive: boolean): void {
    if (isLive) $td.addClass('live');
    else $td.removeClass('live');
  }
}
export default View;
