import {Board} from '../model/model'
import {newTable} from '../view/view'

export var tableOnclick = function(event) {
    console.log(event);
    var target = event.target;
    if (target.tagName != 'TD') return;
    var j = target.cellIndex;
    var i = target.parentElement.sectionRowIndex;
    console.log(i,j);
    board.setCell(i,j);
    target.classList.toggle("live");
};
var controlOnclick = function (event) {
    console.log(event);
    var target = event.target;
};





console.log('begin');
var board = new Board(10,10);
var init = function() {
    board.setCell(1,1);
    console.log(board);
    newTable(board);//начальная отрисовка
    console.dir(document.getElementById('board'));
    document.getElementById('board').onclick = tableOnclick;

}();

console.log('end');

var fps = 1;

function anim() {
    setTimeout(function() {
        requestAnimationFrame(anim);
// Drawing code goes here
    }, 1000 / fps);
}
