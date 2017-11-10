'use strict'

import {Board} from './model'

describe("модель", function() {

    describe("создание модели", function () {
        var arr = new Board(2,2);
        it("матрица", function() {
            var a = new Board(0,0);
            assert.deepEqual(a.matrix, [],'not empty array');
            assert.deepEqual(arr.matrix, [[false,false],[false,false]],'должна быть матрица 2 на 2 с ложными значениями');
        });
        it("атрибуты", function () {
            assert.deepEqual(arr.running, false,'не верное значение атрибута');
        })
    });
    describe("методы модели", function() {
        var arr = new Board(2,2);
        it("start", function() {
            arr.start();
            assert.equal(arr.running, true);
        });
        it("pause", function() {
            arr.pause();
            assert.equal(arr.running, false);
        });
        it("set cell", function () {
            arr.setCell(0,0);
            assert.equal(arr.matrix[0][0], true,'переключение ячейки');
            arr.setCell(0,0);
            assert.equal(arr.matrix[0][0], false,'переключение ячейки');
        });
        arr = new Board(3,3);
        it("cell", function () {
            //console.log(arr.matrix);
            arr.setCell(0,0);
            arr.setCell(0,1);
            //console.log(arr.matrix);
            assert.equal(arr.cell(1,1), false,'2 живых соседа');

            arr.setCell(1,0);
            //console.log(arr.matrix);
            assert.equal(arr.cell(1,1), true,'3 живых соседа');

            arr.setCell(0,2);
            //console.log(arr.matrix);
            assert.equal(arr.cell(1,1), false,'4 живых соседа');
        });
        it("worker", function () {
            //console.log(arr.matrix);
            arr.worker();
            //console.log(arr.matrix);
            assert.deepEqual(arr.matrix, [[true, true, false], [true, false, false], [false, false, false]],'одна итерация');
        });
        it("anim", function () {
            //arr.setCell(0,2);
            console.log(arr.matrix,arr.running);
            arr.start();
            console.log(arr.running);
            arr.anim();
            //arr.worker();
            //arr.worker();
            console.log(arr.matrix,arr.running);
            assert.deepEqual(arr.matrix, [[true, true, false], [true, true, false], [false, false, false]],'анимация до остановки');
        });
    });
});