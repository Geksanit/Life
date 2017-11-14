import {Board} from '../model/model'
import {painter,repainter} from './view'

describe("Представление", function () {
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
});