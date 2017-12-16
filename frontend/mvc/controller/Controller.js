
import Board from '../model/Board';
import Painter from '../view/Painter';

const autobind = (self) => {
  Object.getOwnPropertyNames(self.constructor.prototype).forEach((key) => {
    const val = self[key];
    if (key !== 'constructor' && typeof val === 'function') self[key] = val.bind(self);
  });
  return self;
};

class Controller {
  constructor() {
    this.running = false;
    this.board = new Board(10, 10);
    this.painter = new Painter(this.board);
    this.table = this.painter.table;
    this.controls = this.painter.controls;
    this.fps = 1;
    autobind(this);
    this.painter.newTable();// начальная отрисовка
    this.showStatus();
    this.table.onclick = this.toggleCell;
    this.controls.onclick = this.setRunning;
    this.controls.onchange = this.resizeBoard;
  }
  showStatus() {
    this.painter.setButtons(this.running);
    this.painter.setStatus(this.running);
  }
  toggleCell({ target }) {
    if (target.tagName !== 'TD') return;
    const cell = target.cellIndex;
    const row = target.parentElement.sectionRowIndex;
    this.painter.toggleCell(target);
    this.board.toggleCell(row, cell);
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
          this.painter.repaintTable();
          // если матрица не меняется, ссылка остаетя актуальной
          if (oldMatrix === this.board.matrix) {
            this.running = false;
            this.showStatus();
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
        this.showStatus();
        this.anim();
        break;
      case 'pause':
        this.running = false;
        this.showStatus();
        break;
      case 'clear':
        this.board.clear();
        this.running = false;
        this.showStatus();
        this.painter.repaintTable();
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
        this.showStatus();
        this.board.resize(this.board.rows, value);
        this.painter.newTable();
        break;
      case 'height':
        this.running = false;
        this.showStatus();
        this.board.resize(value, this.board.columns);
        this.painter.newTable();
    }
  }
}
export default Controller;
