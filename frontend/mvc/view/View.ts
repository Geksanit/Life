import EventSender from '../utils/EventSender';
import IView from './IView';

const CLASS_CEIL = 'game__ceil';
const CLASS_CEIL_LIVE = 'game__ceil_live';

class View implements IView{
  $table: JQuery;
  $controls: JQuery;
  $buttonStart: JQuery;
  $buttonPause: JQuery;
  $buttonClear: JQuery;
  $sliderSpeed: JQuery;
  $sliderWidth: JQuery;
  $sliderHeight: JQuery;
  $status: JQuery;

  tableClicked: EventSender;
  startClicked: EventSender;
  pauseClicked: EventSender;
  clearClicked: EventSender;
  widthChanged: EventSender;
  heightChanged: EventSender;
  speedChanged: EventSender;
  constructor() {
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
  }
  initDOMElements(): void {
    this.$table = $('.js-game__board');
    this.$controls = $('.js-game__controls');
    this.$buttonStart = this.$controls.find('.js-game__button-start');
    this.$buttonPause = this.$controls.find('.js-game__button-pause');
    this.$buttonClear = this.$controls.find('.js-game__button-clear');
    this.$sliderSpeed = this.$controls.find('.js-game__slider-speed');
    this.$sliderWidth = this.$controls.find('.js-game__slider-width');
    this.$sliderHeight = this.$controls.find('.js-game__slider-height');
    this.$status = this.$controls.find('.js-game__status');
  }
  initEvents(): void {
    this.tableClicked = new EventSender(this);
    this.startClicked = new EventSender(this);
    this.pauseClicked = new EventSender(this);
    this.clearClicked = new EventSender(this);
    this.widthChanged = new EventSender(this);
    this.heightChanged = new EventSender(this);
    this.speedChanged = new EventSender(this);
  }
  initHandlers(): void {
    this.$table.on('click.view', 'td', ({ target }) => {
      const cell: number = $(target).prop('cellIndex') as number;
      const row: number = $(target.parentElement).prop('sectionRowIndex') as number;
      this.tableClicked.notify({ row, cell });
    });
    this.$buttonStart.on('click.view', () => {
      this.startClicked.notify({});
    });
    this.$buttonPause.on('click.view', () => {
      this.pauseClicked.notify({});
    });
    this.$buttonClear.on('click.view', () => {
      this.clearClicked.notify({});
    });
    this.$sliderSpeed.on('change.view', ({ target }) => {
      const value: number = Number($(target).val());
      this.speedChanged.notify({ value });
    });
    this.$sliderWidth.on('change.view', ({ target }) => {
      const value: number = Number($(target).val());
      this.widthChanged.notify({ value });
    });
    this.$sliderHeight.on('change.view', ({ target }) => {
      const value: number = Number($(target).val());
      this.heightChanged.notify({ value });
    });
  }
  setButtons(running: boolean): void {
    this.$buttonStart.prop('disabled', running);
    this.$buttonPause.prop('disabled', !running);
  }
  setStatus(running: boolean): void {
    this.setButtons(running);
    if (running) this.$status.removeClass('game__status_stopped');
    else this.$status.addClass('game__status_stopped');
  }
  getNewTbody(matrix: boolean[][], tableWidth: number): JQuery {
    const columns: number = matrix[0].length;
    const size: number = tableWidth / columns;
    const rows = matrix.map((row) => {
      const cells = row.map((cell) => {
        let $td = $('<td/>').css({ width: size, height: size }).addClass(CLASS_CEIL);
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
    if (isLive) $td.addClass(CLASS_CEIL_LIVE);
    else $td.removeClass(CLASS_CEIL_LIVE);
  }
}

export default View;
