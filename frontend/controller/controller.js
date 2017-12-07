
import Board from '../model/Board';
import Painter from '../view/Painter';

export default class Controller {
  constructor() {
    this.running = false;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.board = new Board(10, 10);
    this.painter = new Painter(this.board, this.table);
    this.fps = 1;
    this.painter.newTable();// начальная отрисовка
    this.buttonsDisable();
    this.table.onclick = this.tableSetCell.bind(this);
    this.controls.onclick = this.setRunning.bind(this);
    this.controls.onchange = this.resizeBoard.bind(this);
  }
  buttonsDisable() {
    const buttons = document.getElementsByTagName('BUTTON');
    if (buttons === undefined) {
      // console.log('buttuns not found');
      return;
    }
    for (let i = 0; i < buttons.length; i += 1) {
      const button = buttons[i];
      if (button.innerHTML === 'start') {
        if (this.running) button.disabled = true;
        else button.disabled = false;
      }
      if (button.innerHTML === 'pause') {
        if (this.running) button.disabled = false;
        else button.disabled = true;
      }
    }
  }
  tableSetCell(event) {
    const { target } = event;
    if (target.tagName !== 'TD') return;
    const j = target.cellIndex;
    const i = target.parentElement.sectionRowIndex;
    target.classList.toggle('live');
    this.board.setCell(i, j);
  }
  anim(callback) {
    // останавливается и вызывет аргумент, когда матрица перестает меняться
    let oldMatrix;
    function loop() {
      const { fps } = this;
      setTimeout(() => {
        if (this.running) {
          requestAnimationFrame(loop.bind(this));// не блокирует поток!
          this.board.worker();
          this.painter.repainter();
          // если матрица не меняется, ссылка остаетя актуальной
          if (oldMatrix === this.board.matrix) {
            this.running = false;
            this.buttonsDisable();
          } else oldMatrix = this.board.matrix;
        } else if (callback) {
          callback();
        }
      }, 1000 / fps);
    }
    loop.call(this);
  }
  setRunning(event) {
    const { target } = event;
    if (target.tagName !== 'BUTTON') return;
    switch (target.innerHTML) {
      case 'start':
        this.running = true;
        this.buttonsDisable();
        this.anim();
        break;
      case 'pause':
        this.running = false;
        this.buttonsDisable();
        break;
      case 'clear':
        this.board.clear();
        this.running = false;
        this.buttonsDisable();
        this.painter.repainter();
    }
  }
  resizeBoard(event) {
    const { target } = event;
    if (target.tagName !== 'INPUT') return;
    const value = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.running = false;
        this.buttonsDisable();
        this.board.resize(this.board.m, value);
        this.painter.newTable();
        break;
      case 'height':
        this.running = false;
        this.buttonsDisable();
        this.board.resize(value, this.board.n);
        this.painter.newTable();
    }
  }
}
