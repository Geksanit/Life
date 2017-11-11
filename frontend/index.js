import './index.styl'
import './components/slider/slider'
import './components/standart-button/standart-button'

import {Board} from './model/model'
import {newTable} from './view/view'

console.log('begin');
var board = new Board(10,10);
board.setCell(1,1);
console.log(board);
newTable(board);
console.log('end');