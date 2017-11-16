import {Board} from '../model/model'
import {newTable,repainter} from '../view/view'

export var tableOnclick = function(event) {
    //console.log(event);
    var target = event.target;
    if (target.tagName != 'TD') return;
    var j = target.cellIndex;
    var i = target.parentElement.sectionRowIndex;
    //console.log(i,j);
    board.setCell(i,j);
    target.classList.toggle("live");
};
var tableMouse = function (event) {
    console.log(event);
};
var controlsOnclick = function (event) {
    //console.log(event);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    if (target.innerText == 'START') {board.start(); buttonsDisabled(board);};
    if (target.innerText == 'PAUSE') {board.pause(); buttonsDisabled(board);};
    if (target.innerText == 'CLEAR') {board.clear(); buttonsDisabled(board); repainter(board.matrix, table.children[0])};
};
var buttonsDisabled = function (board) {
    var buttons = document.getElementsByTagName('BUTTON');
    //console.log(buttons);
    for(var i=0; i<buttons.length; i++){
        var button = buttons[i];
        if (button.innerText == 'START'){
            if (board.running) button.disabled = true;
            else button.disabled = false;
        };
        if (button.innerText == 'PAUSE'){
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
{
    var board = new Board(10, 10);
    var table = document.getElementById('board');
    //console.dir(table);
    var controls = table.nextElementSibling;

    newTable(board, table);//начальная отрисовка
    table.onclick = tableOnclick;
    controls.onclick = controlsOnclick;
    controls.onchange = controlsUnfocus;
    controls.onmousedown = tableMouse;
    buttonsDisabled(board);

    //console.log(board);
    //console.dir(table);
}
var fps = 1;
function anim(){
    setTimeout(function() {
        requestAnimationFrame(anim);//не блокирует поток!
        if(board.running) {
            board.worker();
            repainter(board.matrix, table.children[0])
        }
    }, 1000 / fps);
};
anim();
