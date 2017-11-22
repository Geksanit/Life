
import Board from '../model/Board';
import Painter from '../view/Painter';
let board, table, controls, fps;
const tableSetCell = function(event) {
  // console.log(event.target);
  const target = event.target;
  if (target.tagName != 'TD') return;
  const j = target.cellIndex;
  const i = target.parentElement.sectionRowIndex;
  board.setCell(i, j);
  //target.classList.toggle("live");
};

const buttunsOnclick = function (event) {
  // console.log('oncklick target = ',event.target.innerText);
  const target = event.target;
  if (target.tagName != 'BUTTON') return;
  switch (target.innerHTML) {
    case 'start':

      // console.log('test start');
      board.start();
      buttonsDisable();
      anim();
      break;
    case 'pause':

      // console.log('test pause');
      board.stop();
      buttonsDisable();
      break;
    case 'clear':
      board.clear();
      buttonsDisable();
      repainter(board, table);
  };
};

const buttonsDisable = function () {
  const buttons = document.getElementsByTagName('BUTTON');
  // console.log(buttons);
  for (let i = 0; i < buttons.length; i += 1) {
    const button = buttons[i];
    if (button.innerHTML == 'start') {
      if (board.running) button.disabled = true;
      else button.disabled = false;
    };

    if (button.innerHTML == 'pause') {
      if (board.running) button.disabled = false;
      else button.disabled = true;
    };
  };
};

const slidersChange = function (event){
  const target = event.target;
  // console.log(event);
  // console.log(event.target.parentElement.previousElementSibling.innerText);
  if (target.tagName != 'INPUT') return;
  const value = target.valueAsNumber;
  // console.dir(value);
  switch(target.parentElement.previousElementSibling.innerText) {
    case 'speed':
      fps = value;
      break;
    case 'width':
      board.resize(board.m, value);
      newTable(board,table);
      break;
    case 'height':
      board.resize(value,board.n);
      newTable(board,table);
  };
};

const init = function () {
  board = new Board(10, 10);
  table = document.getElementById('board');
  controls = document.getElementById('controls');
  fps = 1;
  newTable(board, table);//начальная отрисовка
  table.onclick = tableSetCell;
  controls.onclick = buttunsOnclick;
  controls.onchange = slidersChange;
};

const anim = function (callback) {
  // останавливается и вызывет аргумент, когда матрица перестает меняться
  // console.log('anim started');
  let oldMatrix;
  loop();
  function loop() {
    // console.log('loop');
    setTimeout(() => {
      if (board.running) {
        requestAnimationFrame(loop);//не блокирует поток!
        // console.log('test');
        board.worker();
        repainter(board, table);
        if (oldMatrix == board.matrix) {//если матрица не меняется, ссылка остаетя актуальной
          board.stop();
          buttonsDisable();
        }
        else oldMatrix = board.matrix;
      }
      else {
        // console.log('anim stopped');
        if (callback) callback();
      }
    }, 1000 / fps);
  };
};

const run = function () {
  init();
  buttonsDisable();
  // console.log('run() started');
};

export { run, init, board, table, controls, fps, buttonsDisable, slidersChange, anim };
