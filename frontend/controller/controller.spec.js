'use strict';

import {init,board,table,controls,fps,buttonsDisable,slidersChange,anim} from './controller'
import '../components/standart-button/standart-button'
console.log('start controller test');

describe("контроллер", function () {

    it('вставка html кода', function () {
        var div = document.createElement('div');
        div.insertAdjacentHTML("beforeEnd", '<div class="game"> <table id="board"></table> <div id="controls"><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">start</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">pause</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">clear</button> <div class="container"> <div class="label">speed</div> <div class="slider"> <div class="slider__view">1</div><input class="slider" oninput="sliderInput(event)" type="range" min="1" max="10" value="1"> </div> </div> <div class="container"> <div class="label">width</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> <div class="container"> <div class="label">height</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> </div> </div>');
        document.body.appendChild(div);
        assert.notEqual(document.getElementsByClassName('game'),null,'game not in DOM');
        assert.notEqual(document.getElementById('board'),null,'board not in DOM');
        assert.notEqual(document.getElementById('controls'),null,' controls not in DOM');
    });
    it('init', function () {
        init();//set global board,table,controls,fps
        assert.equal(fps,1,'fps = 1?')
    });
    it('disabling func',function () {
        var buttons = controls.children;
        assert.equal((!buttons[0].disabled && !buttons[1].disabled && !buttons[2].disabled),true,'изначально кнопки включены');
        board.running = true;
        buttonsDisable();
        assert.equal((buttons[0].disabled && !buttons[1].disabled && !buttons[2].disabled),true,'старт выключается');
        board.running = false;
        buttonsDisable();
        assert.equal((!buttons[0].disabled && buttons[1].disabled && !buttons[2].disabled),true,'старт включается, пауза выключается');
    });
    describe("события", function () {
        it('click in table',function () {
            var cell = table.children[0].children[0].children[0];
            cell.click();
            assert.equal(board.matrix[0][0],true,'клик по ячейке меняет состояние на true');
            cell.click();
            assert.equal(board.matrix[0][0],false,'клик по ячейке меняет состояние на false');
        });
        it('start button',function (done) {
            assert.equal(board.running,false,'before false');
            var button = controls.children[0];
            button.click();
            assert.equal(button.disabled && board.running,true,'after true');
            board.stop();
            setTimeout(done,1000);
        });
        it('pause button',function () {
            board.running = true;
            var button = controls.children[1];
            assert.equal((!button.disabled && board.running),true,'before true');
            button.click();
            assert.equal((button.disabled && !board.running),true,'after false');
        });
        it('clear button',function () {
            board.running = true;
            board.setCell(0,0);
            var button = controls.children[2];
            assert.equal((!button.disabled && board.matrix[0][0] && board.running),true,'before true');
            button.click();
            assert.equal((!button.disabled && !board.matrix[0][0] && !board.running),true,'after false');

        });
        it('set speed',function () {
            var slider = document.querySelectorAll('input.slider')[0];
            slider.value = 5;
            slidersChange({target: slider});
            assert.equal(fps,5)
        });
        it('set Width',function () {
            var slider = document.querySelectorAll('input.slider')[1];
            slider.value = 16;
            slidersChange({target: slider});
            assert.equal(board.n,16)
        });
        it('set Height',function () {
            var slider = document.querySelectorAll('input.slider')[2];
            slider.value = 15;
            slidersChange({target: slider});
            assert.equal(board.m,15)
        });
    });
    describe("анимация", function () {
        it('anim 1',function (done) {
            board.resize(2,3);
            board.clear();
            {
                board.setCell(0,0);
                board.setCell(0,1);
                board.setCell(0,2);
                board.setCell(1,0);
            }
            board.start();
            anim(done);//anim останавливается и вызывет аргумент, когда матрица перестает меняться
        });
        it('anim',function () {
            assert.deepEqual(board.matrix,[[true,true,false],[true,true,false]]);
        });
        it('test done', function(done) {
            setTimeout(done,1000);
        });

    });
});
