
import Board from '../model/Board';
import Painter from './Painter';

describe("Представление", function () {
  var div = document.createElement('div');
  div.insertAdjacentHTML("beforeEnd", '<div class="game"> <table id="board"></table> <div id="controls"><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">start</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">pause</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">clear</button> <div class="container"> <div class="label">speed</div> <div class="slider"> <div class="slider__view">1</div><input class="slider" oninput="sliderInput(event)" type="range" min="1" max="10" value="1"> </div> </div> <div class="container"> <div class="label">width</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> <div class="container"> <div class="label">height</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> </div> </div>');
  document.body.appendChild(div);
  
  describe("painter",function () {
    const board = new Board(5,5);
    console.log(board);
    board.setCell(1,1);
    const painter = new Painter(board);
    console.log(painter);
    const tbody = painter.painter(400);
    console.log(tbody);
    it('создает и заполняет tbody в соостветсви с моделью',function () {
      assert.equal(tbody.children.length,5,'5 строк');
      assert.equal(tbody.children[0].children.length,5,'5 столбцов');
    });
    it('сразу задает класс живым ячейкам',function () {
      assert.equal(tbody.children[1].children[1].className,'live','класс живой клетки');
    });
    it("вычисляет ширину ячейки, в инлайн стили",function () {
      assert.equal(tbody.children[1].children[1].style.width,400/5+'px','ширина');
      assert.equal(tbody.children[1].children[1].style.height,400/5+'px','высота');
    });
  });
  describe("new table", function () {
    const board = new Board(5,5);
    board.setCell(1,1);
    const table = document.createElement('table');
    table.style.width = 400;
    it('содает tbody, и вставляет в таблицу', function () {
      assert.equal(table.children.length,0,'нет tbody');
      newTable(board,table);
      const tbody = table.children[0];
      assert.equal(table.children.length,1,'появился tbody');
      assert.equal(tbody.children.length,5,'5 строк');
      assert.equal(tbody.children[0].children.length,5,'5 столбцов');
      assert.equal(tbody.children[1].children[1].className,'live','класс живой клетки');
    });
    it('заменяет tbody, если есть', function () {
      board.setCell(1,1);
      newTable(board,table);
      const tbody = table.children[0];
      assert.equal(table.children.length,1);
      assert.equal(tbody.children[1].children[1].className,'','класс живой клетки');
    });
    it('при ресайзе модели таблица тоже меняется', function () {
      board.resize(8,9);
      newTable(board,table);
      const tbody = table.children[0];
      assert.equal(tbody.children.length,8,'8 строк');
      assert.equal(tbody.children[0].children.length,9,'9 столбцов');
    });
  });
  describe("repainter",function () {
    const board = new Board(5,5);
    board.setCell(1,1);
    const table = document.createElement('table');
    newTable(board,table);
    repainter(board, table);
    const tbody = table.children[0];
    it('размер не меняет', function () {
      assert.equal(tbody.children.length,5,'5 строк, размер не должен меняться');
      assert.equal(tbody.children[0].children.length,5,'5 столбцов, размер не должен меняться');
    });
    it('меняет класс  существующих ячеек в соответствии с моделью', function () {
      assert.equal(tbody.children[1].children[1].className,'live','класс изменился');
    });
  });
});