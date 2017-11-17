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
var tableMouse = function (event) {
    console.log(event);
};
var controlsOnclick = function (event) {
    //console.log('oncklick target = ',event.target.innerText);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    switch (target.innerHTML) {
        case 'start':
            //console.log('test start');
            board.start();
            buttonsDisabled();
            break;
        case 'pause':
            //console.log('test pause');
            board.pause();
            buttonsDisabled();
            break;
        case 'clear':
            //console.log('test clear');
            board.clear();
            buttonsDisabled();
            repainter(board.matrix, table.children[0]);
            break;
        default:
            //console.log('мимо');
    }
};
export var buttonsDisabled = function () {
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
var controlsUnfocus = function (event){
    //console.log(event);
    var target = event.target;
    if (target.tagName != 'INPUT') return;
    var value = target.valueAsNumber;
    //console.dir(value);
    if(target.parentElement.previousElementSibling.innerText == 'speed') {
        //console.log('speed');
        fps = value;
    };
    if(target.parentElement.previousElementSibling.innerText == 'width') {
        //console.log('width');
        board.resize(board.m,value);
        newTable(board,table);
    };
    if(target.parentElement.previousElementSibling.innerText == 'height') {
        //console.log('height');
        board.resize(value,board.n);
        newTable(board,table);
    };
};
export var init = function () {
    {
        board = new Board(10, 10);
        table = document.getElementById('board');
        controls = table.nextElementSibling;
        fps = 1;
    }

    newTable(board, table);//начальная отрисовка
    table.onclick = tableOnclick;
    controls.onclick = controlsOnclick;
    controls.onchange = controlsUnfocus;
    //table.onmousedown = tableMouse;
    //return [board,table,controls,fps]
};
function anim(){
    setTimeout(function() {
        requestAnimationFrame(anim);//не блокирует поток!
        if(board.running) {
            board.worker();
            repainter(board.matrix, table.children[0])
        }
    }, 1000 / fps);
};

export var run = function () {
    init();
    buttonsDisabled();
    anim();
};
