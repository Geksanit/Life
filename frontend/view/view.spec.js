import {Board} from '../model/model'
import {painter,repainter,newTable} from './view'

describe("Представление", function () {
    //console.log(this);
    //console.log(document);
    it("painter",function () {
        var board = new Board(5,5);
        board.setCell(1,1);
        var tbody = painter(board.matrix);
        assert.equal(tbody.children.length,5,'5 строк');
        assert.equal(tbody.children[0].children.length,5,'5 столбцов');
        assert.equal(tbody.children[1].children[1].className,'live','класс живой клетки');
    });
    it("repainter",function () {
        var board = new Board(5,5);
        var tbody = painter(board.matrix);
        assert.equal(tbody.children[1].children[1].className,'','класс отсутсвовал');
        board.setCell(1,1);
        tbody = repainter(board.matrix, tbody);
        assert.equal(tbody.children.length,5,'5 строк, размер не должен меняться');
        assert.equal(tbody.children[0].children.length,5,'5 столбцов, размер не должен меняться');
        assert.equal(tbody.children[1].children[1].className,'live','класс изменился');
    });
    it("new table", function () {
        var table = document.createElement('tbody');
        var board = new Board(5,5);
        board.setCell(1,1);
        assert.equal(table.children.length,0,'нет tbody');
        newTable(board,table);
        assert.equal(table.children.length,1,'появился tbody');
        var tbody = table.children[0];
        assert.equal(tbody.children.length,5,'5 строк');
        assert.equal(tbody.children[0].children.length,5,'5 столбцов');
        assert.equal(tbody.children[1].children[1].className,'live','класс живой клетки');
    });
});