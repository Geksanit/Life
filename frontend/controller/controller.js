import {Board} from '../model/model'
import {newTable,repainter} from '../view/view'
export var board,table,controls,fps;
var tableOnclick = function(event) {
    //console.log(event.target);
    var target = event.target;
    if (target.tagName != 'TD') return;
    var j = target.cellIndex;
    var i = target.parentElement.sectionRowIndex;
    board.setCell(i,j);
    target.classList.toggle("live");
};
var controlsOnclick = function (event) {
    //console.log('oncklick target = ',event.target.innerText);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    switch (target.innerHTML) {
        case 'start':
            //console.log('test start');
            board.start();
            buttonsDisable();
            break;
        case 'pause':
            //console.log('test pause');
            board.pause();
            buttonsDisable();
            break;
        case 'clear':
            board.clear();
            buttonsDisable();
            repainter(board, table);
    };
};
export var buttonsDisable = function () {
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
export var controlsChange = function (event){
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
/*
 var tableMouseDoswn = function (event) {
 console.log(event);
 };
 */
export var init = function () {
    {
        board = new Board(10, 10);
        table = document.getElementById('board');
        controls = document.getElementById('controls');
        fps = 1;
    }
    newTable(board, table);//начальная отрисовка
    table.onclick = tableOnclick;
    controls.onclick = controlsOnclick;
    controls.onchange = controlsChange;
    //table.onmousedown = tableMouse;
};

function anim(){
    setTimeout(function() {
        requestAnimationFrame(anim);//не блокирует поток!
        if(board.running) {
            board.worker();
            repainter(board, table)
        }
    }, 1000 / fps);
};

export var run = function () {
    init();
    buttonsDisable();
    anim();
};
