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
var controlsOnclick = function (event) {
    //console.log(event);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    if (target.innerText == 'START') board.start();
    if (target.innerText == 'PAUSE') board.pause();
    if (target.innerText == 'CLEAR') {board.clear(); repainter(board.matrix, table.children[0])};
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


var board = new Board(10,10);
var table = document.getElementById('board');
var controls = table.nextElementSibling;

newTable(board,table);//начальная отрисовка
table.onclick = tableOnclick;
controls.onclick = controlsOnclick;
controls.onchange = controlsUnfocus;

console.log(board);
console.dir(table);

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
