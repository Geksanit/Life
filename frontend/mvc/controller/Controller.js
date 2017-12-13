
import Board from '../model/Board';
import Painter from '../view/Painter';

export default class Controller {
  constructor() {
    this.running = false;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.board = new Board(10, 10);
    this.painter = new Painter(this.board, this.table, this.controls);
    this.fps = 1;
    this.cellToggle = this.cellToggle.bind(this);
    this.setRunning = this.setRunning.bind(this);
    this.resizeBoard = this.resizeBoard.bind(this);
    this.painter.newTable();// начальная отрисовка
    this.buttonsToggle();
    this.table.onclick = this.cellToggle;
    this.controls.onclick = this.setRunning;
    this.controls.onchange = this.resizeBoard;
  }
  buttonsToggle() {
    this.painter.statusToggle(this.running);
  }
  cellToggle({ target }) {
    if (target.tagName !== 'TD') return;
    const j = target.cellIndex;
    const i = target.parentElement.sectionRowIndex;
    this.painter.tableCellToggle(target);
    this.board.setCell(i, j);
  }
  anim(callback) {
    // останавливается и вызывет аргумент, когда матрица перестает меняться(для тестов)
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
            this.buttonsToggle();
          } else oldMatrix = this.board.matrix;
        } else if (callback) {
          callback();
        }
      }, 1000 / fps);
    }
    loop.call(this);
  }
  setRunning({ target }) {
    if (target.tagName !== 'BUTTON') return;
    switch (target.innerHTML) {
      case 'start':
        this.running = true;
        this.buttonsToggle();
        this.anim();
        break;
      case 'pause':
        this.running = false;
        this.buttonsToggle();
        break;
      case 'clear':
        this.board.clear();
        this.running = false;
        this.buttonsToggle();
        this.painter.repainter();
    }
  }
  resizeBoard({ target }) {
    if (target.tagName !== 'INPUT') return;
    const value = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.running = false;
        this.buttonsToggle();
        this.board.resize(this.board.m, value);
        this.painter.newTable();
        break;
      case 'height':
        this.running = false;
        this.buttonsToggle();
        this.board.resize(value, this.board.n);
        this.painter.newTable();
    }
  }
}
