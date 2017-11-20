'use strict';

import {Board} from '../model/model'
import {newTable,repainter} from '../view/view'
var board,table,controls,fps;
var tableSetCell = function(event) {
    //console.log(event.target);
    var target = event.target;
    if (target.tagName != 'TD') return;
    var j = target.cellIndex;
    var i = target.parentElement.sectionRowIndex;
    board.setCell(i,j);
    target.classList.toggle("live");
};
var buttunsOnclick = function (event) {
    //console.log('oncklick target = ',event.target.innerText);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    switch (target.innerHTML) {
        case 'start':
            //console.log('test start');
            board.start();
            buttonsDisable();
            anim();
            break;
        case 'pause':
            //console.log('test pause');
            board.stop();
            buttonsDisable();
            break;
        case 'clear':
            board.clear();
            buttonsDisable();
            repainter(board, table);
    };
};
var buttonsDisable = function () {
    var buttons = document.getElementsByTagName('BUTTON');
    //console.log(buttons);
    for(var i=0; i<buttons.length; i++){
        var button = buttons[i];
        if (button.innerHTML == 'start'){
            if (board.running) button.disabled = true;
            else button.disabled = false;
        };
        if (button.innerHTML == 'pause'){
            if (board.running) button.disabled = false;
            else button.disabled = true;
        };
    };
};
var slidersChange = function (event){
    var target = event.target;
    //console.log(event);
    //console.log(event.target.parentElement.previousElementSibling.innerText);
    if (target.tagName != 'INPUT') return;
    var value = target.valueAsNumber;
    //console.dir(value);
    switch(target.parentElement.previousElementSibling.innerText) {
        case 'speed':
            fps = value;
            break;
        case 'width':
            board.resize(board.m,value);
            newTable(board,table);
            break;
        case 'height':
            board.resize(value,board.n);
            newTable(board,table);
    };
};

var init = function () {
    {
        board = new Board(10, 10);
        table = document.getElementById('board');
        controls = document.getElementById('controls');
        fps = 1;
    }
    newTable(board, table);//начальная отрисовка
    table.onclick = tableSetCell;
    controls.onclick = buttunsOnclick;
    controls.onchange = slidersChange;
};

var anim = function(callback){//останавливается и вызывет аргумент, когда матрица перестает меняться
    //console.log('anim started');
    var oldMatrix;
    loop();
    function loop() {
        //console.log('loop');
        setTimeout(function() {
            if(board.running) {
                requestAnimationFrame(loop);//не блокирует поток!
                //console.log('test');
                board.worker();
                repainter(board, table);
                if (oldMatrix == board.matrix) {//если матрица не меняется, ссылка остаетя актуальной
                    board.stop();
                    buttonsDisable();
                }
                else oldMatrix = board.matrix;
            }
            else {
                //console.log('anim stopped');
                if(callback) callback();
            }
        }, 1000 / fps);
    };
};

var run = function () {
    init();
    buttonsDisable();
    //console.log('run() started');
};
export {run,init,board,table,controls,fps,buttonsDisable,slidersChange,anim}
