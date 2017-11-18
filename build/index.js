var scripts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_controller__ = __webpack_require__(4);





Object(__WEBPACK_IMPORTED_MODULE_3__controller_controller__["a" /* run */])();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//slider

var sliderChange = function(element){
    var value = element.value;
    element.previousSibling.innerText = value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.left = width/(max-min)*(value-min)-8.75+'px';
};
window.sliderInput = function (event) {
    sliderChange(event.target);
};
var sliderInit = function () {
    var elements = document.querySelectorAll('input.slider');
    for(var i=0; i<elements.length; i++){
        sliderChange(elements[i]);
    }
}();

//slider-percentage
var sliderPercentageChange = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};
var sliderPercentageInit = function(){
    var elements = document.querySelectorAll('input.slider-percentage');
    for(var i=0; i<elements.length; i++){
        sliderPercentageChange(elements[i]);
    }
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

//ripple effect
document.buttonClick = function (event) {
  //console.log(event.screenY,event.pageY,event.y,event);
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY-25+'px';
  div.style.left = event.pageX-25+'px';

  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 550);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export board */
/* unused harmony export table */
/* unused harmony export controls */
/* unused harmony export fps */
/* unused harmony export buttonsDisable */
/* unused harmony export controlsChange */
/* unused harmony export init */
/* unused harmony export anim */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return run; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view__ = __webpack_require__(6);


var board,table,controls,fps;
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
            anim();
            break;
        case 'pause':
            //console.log('test pause');
            board.pause();
            buttonsDisable();
            break;
        case 'clear':
            board.clear();
            buttonsDisable();
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["b" /* repainter */])(board, table);
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
var controlsChange = function (event){
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
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board,table);
            break;
        case 'height':
            board.resize(value,board.n);
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board,table);
    };
};
/*
 var tableMouseDoswn = function (event) {
 console.log(event);
 };
 */
var init = function () {
    {
        board = new __WEBPACK_IMPORTED_MODULE_0__model_model__["a" /* Board */](10, 10);
        table = document.getElementById('board');
        controls = document.getElementById('controls');
        fps = 1;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board, table);//начальная отрисовка
    table.onclick = tableOnclick;
    controls.onclick = controlsOnclick;
    controls.onchange = controlsChange;
    //table.onmousedown = tableMouse;
};

var anim = function(callback){//останавливается и вызывет аргумент, когда матрица перестает меняться
    console.log('anim started');
    var oldMatrix;
    loop();
    function loop() {
        //console.log('loop');
        setTimeout(function() {
            if(board.running) {
                requestAnimationFrame(loop);//не блокирует поток!
                //console.log('test');
                board.worker();
                Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["b" /* repainter */])(board, table);
                if (oldMatrix == board.matrix) {//если матрица не меняется, ссылка остаетя актуальной
                    board.pause();
                    buttonsDisable();
                }
                else oldMatrix = board.matrix;
            }
            else {
                console.log('anim stopped');
                if(callback) callback();
            }
        }, 1000 / fps);
    };
};

var run = function () {
    init();
    buttonsDisable();
    //anim();
    console.log('run() started');
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });


//конструктор
var Board = function(m,n) {
    this.matrix = [];//матрица m на n заполненная false
    this.running = false;//для циклической обработки
    this.m = m;//строки
    this.n = n;//столбцы

    for(var i=0; i<m; i++){
        var line = [];
        for(var j=0; j<n; j++){
            line.push(false);
        }
        this.matrix.push(line);
    }
};
//методы
Board.prototype={
    resize : function (m,n) {
        this.running = false;
        var matrix = this.matrix;
        var o = matrix.length;
        var p = matrix[0].length;
        //console.log('resize',o,p,' to ',m,n);
        if(p > n){//убираем столбцы
            for(var i=0; i<o; i++){
                matrix[i].splice(n-1,p-n);//изменить length?
            }
        }
        if(p < n){//добавляем столбцы
            for(var i=0; i<o; i++){
                for(var j=p; j<n; j++){
                    matrix[i].push(false);
                }
            }
        }
        if(o > m){//убираем строки
            matrix.splice(m-1,o-m);//изменить length?
        }
        if(o < m){//добавляем строки
            var line = [];
            for(var j=0; j<n; j++){
                line.push(false);
            }
            for(var i=o; i<m; i++){
                matrix.push(line.slice());
            }
        }
        this.m = m;
        this.n = n;
    },
    pause : function () {
        this.running = false;
    },
    clear : function () {
        //this = new Board(this.m,this.n);
        this.running = false;
        for(var i=0; i<this.m; i++){
            for(var j=0; j<this.n; j++){
                this.matrix[i][j] = false;
            }
        }
    },
    start : function () {
        this.running = true;
    },
    worker : function () {//обход всех ячеек с записью нового состояния
        var newMatrix = [];
        var flag = false;//изменмлась ли матрица?
        for(var i=0; i<this.matrix.length; i++){
            var newLine = [];
            for(var j=0; j<this.matrix[0].length; j++){
                var cell = this.cell(i,j);
                newLine.push(cell);
                if(cell != this.matrix[i][j]) flag = true;
            }
            newMatrix.push(newLine);
        }
        if(flag) this.matrix = newMatrix;
    },
    cell : function (i,j) {
        //новое состояние клетки
        //соседи за пределами поля считаются мертвыми
        var count = 0;//живые соседи
        var newCell = this.matrix[i][j];//клетка

        if(this.matrix[i-1]) {
            if (this.matrix[i - 1][j - 1]) count++;
            if (this.matrix[i - 1][j]) count++;
            if (this.matrix[i - 1][j + 1]) count++;
        }
        if(this.matrix[i][j-1]) count++;
        if(this.matrix[i][j+1]) count++;

        if(this.matrix[i+1]) {
            if (this.matrix[i + 1][j - 1]) count++;
            if (this.matrix[i + 1][j]) count++;
            if (this.matrix[i + 1][j + 1]) count++;
        }

        //console.log(i,j,newCell,'count=',count);
        if(count<2 || count>3) newCell = false;
        else if(count == 3) newCell = true;
        //console.log(i,j,newCell,'count=',count,'after');
        return newCell
    },
    setCell : function (i,j) {
        this.matrix[i][j] = !this.matrix[i][j];
    }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export painter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return repainter; });
//отрисовка матрицы

var painter = function (board) {
    //заполнение таблицы
    var matrix = board.matrix;
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);
    var width = 400/n;
    var height = 400/m;

    var tbody = document.createElement('tbody');
    for(var i=0; i<m; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<n; j++){
            var  td = document.createElement('td');
            td.style.width=width+'px';
            td.style.height=width+'px';
            if(matrix[i][j]) td.className = 'live';
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
    return tbody
};

var newTable = function (board,table) {
    //для  создания и ресайза таблицы
    var tbody = painter(board);
    if(table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
};

var repainter = function (board,table) {
    //перерисовка таблицы
    var matrix = board.matrix;
    var tbody = table.children[0];
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);

    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){//строка
            var td = tbody.children[i].children[j];
            if(matrix[i][j]) td.className = 'live';
            else td.className = '';
        };
    };
};

/***/ })
/******/ ]);