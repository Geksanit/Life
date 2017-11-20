'use strict';

import {Board} from '../model/model'
import {painter,repainter,newTable} from './view'

describe("Представление", function () {
    describe("painter",function () {
        var board = new Board(5,5);
        board.setCell(1,1);
        var tbody = painter(board,400);
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
        var board = new Board(5,5);
        board.setCell(1,1);
        var table = document.createElement('table');
        table.style.width = 400;
        it('содает tbody, и вставляет в таблицу', function () {
            assert.equal(table.children.length,0,'нет tbody');
            newTable(board,table);
            var tbody = table.children[0];
            assert.equal(table.children.length,1,'появился tbody');
            assert.equal(tbody.children.length,5,'5 строк');
            assert.equal(tbody.children[0].children.length,5,'5 столбцов');
            assert.equal(tbody.children[1].children[1].className,'live','класс живой клетки');
        });
        it('заменяет tbody, если есть', function () {
            board.setCell(1,1);
            newTable(board,table);
            var tbody = table.children[0];
            assert.equal(table.children.length,1);
            assert.equal(tbody.children[1].children[1].className,'','класс живой клетки');
        });
        it('при ресайзе модели таблица тоже меняется', function () {
            board.resize(8,9);
            newTable(board,table);
            var tbody = table.children[0];
            assert.equal(tbody.children.length,8,'8 строк');
            assert.equal(tbody.children[0].children.length,9,'9 столбцов');
        });
    });
    describe("repainter",function () {
        var board = new Board(5,5);
        board.setCell(1,1);
        var table = document.createElement('table');
        newTable(board,table);
        repainter(board, table);
        var tbody = table.children[0];
        it('размер не меняет', function () {
            assert.equal(tbody.children.length,5,'5 строк, размер не должен меняться');
            assert.equal(tbody.children[0].children.length,5,'5 столбцов, размер не должен меняться');
        });
        it('меняет класс  существующих ячеек в соответствии с моделью', function () {
            assert.equal(tbody.children[1].children[1].className,'live','класс изменился');
        });
    });

});