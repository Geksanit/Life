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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicons_favicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sliders_slider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sliders_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sliders_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controller_Controller__ = __webpack_require__(15);






const controller = new __WEBPACK_IMPORTED_MODULE_4__controller_Controller__["a" /* default */]();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__(3);

faviconsContext.keys().forEach(faviconsContext);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-48x48.png": 4,
	"./apple-touch-icon.png": 5,
	"./browserconfig.xml": 6,
	"./favicon-16x16.png": 7,
	"./favicon-32x32.png": 8,
	"./favicon.ico": 9,
	"./manifest.json": 10,
	"./mstile-150x150.png": 11,
	"./safari-pinned-tab.svg": 12
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-48x48.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/manifest.json";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// slider
const sliderChange = function sliderChange(element) {
  const { value } = element;
  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousElementSibling.innerText = value;
  element.previousElementSibling.style.left = (((width / (max - min)) * (value - min)) - 8.75) + 'px';
};

const sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('.js-slider__input');
  for (let i = 0; i < elements.length; i += 1) {
    sliderChange(elements[i]);
    elements[i].oninput = sliderInput;
  }
}());


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// ripple effect
const buttonClick = function buttonClick(event) {
  const div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY - 25 + 'px';
  div.style.left = event.pageX - 25 + 'px';

  document.body.appendChild(div);
  setTimeout(() => { document.body.removeChild(div); }, 550);
};

(function initButtons() {
  const elements = document.querySelectorAll('.standart-button');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].onclick = buttonClick;
  }
}());


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_Board__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_Painter__ = __webpack_require__(17);




class Controller {
  constructor() {
    this.running = false;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.board = new __WEBPACK_IMPORTED_MODULE_0__model_Board__["a" /* default */](10, 10);
    this.painter = new __WEBPACK_IMPORTED_MODULE_1__view_Painter__["a" /* default */](this.board, this.table);
    this.fps = 1;
    this.painter.newTable();// начальная отрисовка
    this.buttonsDisable();
    this.table.onclick = this.tableSetCell.bind(this);
    this.controls.onclick = this.buttunsOnclick.bind(this);
    this.controls.onchange = this.slidersChange.bind(this);
  }
  buttonsDisable() {
    const buttons = document.getElementsByTagName('BUTTON');
    if (buttons === undefined) {
      console.log('buttuns not found');
      return;
    }
    // console.log(buttons);
    for (let i = 0; i < buttons.length; i += 1) {
      const button = buttons[i];
      if (button.innerHTML === 'start') {
        if (this.running) button.disabled = true;
        else button.disabled = false;
      }
      if (button.innerHTML === 'pause') {
        if (this.running) button.disabled = false;
        else button.disabled = true;
      }
    }
  }
  tableSetCell(event) {
    // console.log(event.target);
    const { target } = event;
    if (target.tagName !== 'TD') return;
    const j = target.cellIndex;
    const i = target.parentElement.sectionRowIndex;
    target.classList.toggle('live');
    this.board.setCell(i, j);
  }
  anim(callback) {
    // останавливается и вызывет аргумент, когда матрица перестает меняться
    // console.log('anim started');
    let oldMatrix;
    function loop() {
      const { fps } = this;
      setTimeout(() => {
        if (this.running) {
          requestAnimationFrame(loop.bind(this));// не блокирует поток!
          this.board.worker();
          this.painter.repainter();
          // если матрица не меняется, ссылка остаетя актуальной
          if (oldMatrix === this.board.matrix) {
            this.running = false;
            this.buttonsDisable();
          } else oldMatrix = this.board.matrix;
        } else if (callback) {
          // console.log('anim stopped');
          callback();
        }
      }, 1000 / fps);
    }
    loop.call(this);
  }
  buttunsOnclick(event) {
    const { target } = event;
    if (target.tagName !== 'BUTTON') return;
    switch (target.innerHTML) {
      case 'start':
        this.running = true;
        this.buttonsDisable();
        this.anim();
        break;
      case 'pause':
        this.running = false;
        this.buttonsDisable();
        break;
      case 'clear':
        this.board.clear();
        this.running = false;
        this.buttonsDisable();
        this.painter.repainter();
    }
  }
  slidersChange(event) {
    const { target } = event;
    if (target.tagName !== 'INPUT') return;
    const value = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.running = false;
        this.buttonsDisable();
        this.board.resize(this.board.m, value);
        this.painter.newTable();
        break;
      case 'height':
        this.running = false;
        this.buttonsDisable();
        this.board.resize(value, this.board.n);
        this.painter.newTable();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Board {
  constructor(m = 10, n = 10) {
    // матрица m на n заполненная false
    this.matrix = [];
    this.m = m;// строки
    this.n = n;// столбцы
    for (let i = 0; i < m; i += 1) {
      const line = [];
      for (let j = 0; j < n; j += 1) {
        line.push(false);
      }

      this.matrix.push(line);
    }
  }
  resize(m, n) {
    const { matrix } = this;
    const o = matrix.length;
    const p = matrix[0].length;

    // console.log('resize',o,p,' to ',m,n);
    // убираем столбцы
    if (p > n) {
      for (let i = 0; i < o; i += 1) {
        matrix[i].splice(n - 1, p - n);// изменить length?
      }
    }

    // добавляем столбцы
    if (p < n) {
      for (let i = 0; i < o; i += 1) {
        for (let j = p; j < n; j += 1) {
          matrix[i].push(false);
        }
      }
    }

    // убираем строки
    if (o > m) matrix.splice(m - 1, o - m);// изменить length?

    // добавляем строки
    if (o < m) {
      const line = [];
      for (let j = 0; j < n; j += 1) {
        line.push(false);
      }

      for (let i = o; i < m; i += 1) {
        matrix.push(line.slice());
      }
    }

    this.m = m;
    this.n = n;
    return this;
  }
  clear() {
    for (let i = 0; i < this.m; i += 1) {
      for (let j = 0; j < this.n; j += 1) {
        this.matrix[i][j] = false;
      }
    }

    return this;
  }
  worker() {
    // обход всех ячеек с записью нового состояния
    const newMatrix = [];
    let flag = false;// изменмлась ли матрица?
    for (let i = 0; i < this.matrix.length; i += 1) {
      const newLine = [];
      for (let j = 0; j < this.matrix[0].length; j += 1) {
        const cell = this.cell(i, j);
        newLine.push(cell);
        if (cell !== this.matrix[i][j]) flag = true;
      }

      newMatrix.push(newLine);
    }

    if (flag) this.matrix = newMatrix;
    return this;
  }
  cell(i, j) {
    // вычисляет новое состояние клетки
    // соседи за пределами поля считаются мертвыми
    let count = 0;// живые соседи
    let newCell = this.matrix[i][j];

    if (this.matrix[i - 1]) {
      if (this.matrix[i - 1][j - 1]) count += 1;
      if (this.matrix[i - 1][j]) count += 1;
      if (this.matrix[i - 1][j + 1]) count += 1;
    }

    if (this.matrix[i][j - 1]) count += 1;
    if (this.matrix[i][j + 1]) count += 1;

    if (this.matrix[i + 1]) {
      if (this.matrix[i + 1][j - 1]) count += 1;
      if (this.matrix[i + 1][j]) count += 1;
      if (this.matrix[i + 1][j + 1]) count += 1;
    }

    if (count < 2 || count > 3) newCell = false;
    else if (count === 3) newCell = true;
    return newCell;
  }
  setCell(i, j) {
    this.matrix[i][j] = !this.matrix[i][j];
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Board;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Painter {
  constructor(board, table) {
    // console.log('construct', table);
    this.table = table;
    this.board = board;
  }

  painter(tableWidth) {
    // заполнение тела таблицы
    const { matrix } = this.board;
    const m = matrix.length;
    const n = matrix[0].length;
    // console.log(m,n);
    const width = tableWidth / n;
    const height = width;

    const tbody = document.createElement('tbody');
    for (let i = 0; i < m; i += 1) {
      const tr = document.createElement('tr');
      for (let j = 0; j < n; j += 1) {
        const td = document.createElement('td');
        td.style.width = width + 'px';
        td.style.height = height + 'px';
        if (matrix[i][j]) td.className = 'live';
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    return tbody;
  }

  newTable() {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.painter(table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }

  repainter() {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const { matrix } = this.board;
    const tbody = table.children[0];
    const m = matrix.length;
    const n = matrix[0].length;
    // console.log(m,n);

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const td = tbody.children[i].children[j];
        if (matrix[i][j]) td.className = 'live';
        else td.className = '';
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Painter;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWI0NzFlYjIxYTIyYjZiMmJjZTYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zbGlkZXJzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZGVsL0JvYXJkLmpzIiwid2VicGFjazovLy8uL3ZpZXcvUGFpbnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YjQ3MWViMjFhMjJiNmIyYmNlNiIsImltcG9ydCAnLi9pbmRleC5zdHlsJztcclxuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVycy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZmF2aWNvbnNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCchIWZpbGUtbG9hZGVyP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvKTtcclxuXHJcbmZhdmljb25zQ29udGV4dC5rZXlzKCkuZm9yRWFjaChmYXZpY29uc0NvbnRleHQpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zL2Zhdmljb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmdcIjogNCxcblx0XCIuL2FwcGxlLXRvdWNoLWljb24ucG5nXCI6IDUsXG5cdFwiLi9icm93c2VyY29uZmlnLnhtbFwiOiA2LFxuXHRcIi4vZmF2aWNvbi0xNngxNi5wbmdcIjogNyxcblx0XCIuL2Zhdmljb24tMzJ4MzIucG5nXCI6IDgsXG5cdFwiLi9mYXZpY29uLmljb1wiOiA5LFxuXHRcIi4vbWFuaWZlc3QuanNvblwiOiAxMCxcblx0XCIuL21zdGlsZS0xNTB4MTUwLnBuZ1wiOiAxMSxcblx0XCIuL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiOiAxMlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mYXZpY29ucyAhLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIFxcLihzdmd8cG5nfGljb3x4bWx8anNvbikkXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Jyb3dzZXJjb25maWcueG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24uaWNvXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi5pY29cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbWFuaWZlc3QuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzbGlkZXJcclxuY29uc3Qgc2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gc2xpZGVyQ2hhbmdlKGVsZW1lbnQpIHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlbGVtZW50O1xyXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjA7XHJcbiAgY29uc3QgbWluID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1pbi52YWx1ZTtcclxuICBjb25zdCBtYXggPSBlbGVtZW50LmF0dHJpYnV0ZXMubWF4LnZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUubGVmdCA9ICgoKHdpZHRoIC8gKG1heCAtIG1pbikpICogKHZhbHVlIC0gbWluKSkgLSA4Ljc1KSArICdweCc7XHJcbn07XHJcblxyXG5jb25zdCBzbGlkZXJJbnB1dCA9IGZ1bmN0aW9uIHNsaWRlcklucHV0KGV2ZW50KSB7XHJcbiAgc2xpZGVyQ2hhbmdlKGV2ZW50LnRhcmdldCk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2xpZGVyX19pbnB1dCcpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHNsaWRlckNoYW5nZShlbGVtZW50c1tpXSk7XHJcbiAgICBlbGVtZW50c1tpXS5vbmlucHV0ID0gc2xpZGVySW5wdXQ7XHJcbiAgfVxyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc2xpZGVycy9zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJpcHBsZSBlZmZlY3RcclxuY29uc3QgYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBidXR0b25DbGljayhldmVudCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pZCA9ICdyaXBwbGUnO1xyXG4gIGRpdi5zdHlsZS50b3AgPSBldmVudC5wYWdlWSAtIDI1ICsgJ3B4JztcclxuICBkaXYuc3R5bGUubGVmdCA9IGV2ZW50LnBhZ2VYIC0gMjUgKyAncHgnO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTsgfSwgNTUwKTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0QnV0dG9ucygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFuZGFydC1idXR0b24nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBlbGVtZW50c1tpXS5vbmNsaWNrID0gYnV0dG9uQ2xpY2s7XHJcbiAgfVxyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc3RhbmRhcnQtYnV0dG9uL3N0YW5kYXJ0LWJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9tb2RlbC9Cb2FyZCc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3ZpZXcvUGFpbnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgxMCwgMTApO1xyXG4gICAgdGhpcy5wYWludGVyID0gbmV3IFBhaW50ZXIodGhpcy5ib2FyZCwgdGhpcy50YWJsZSk7XHJcbiAgICB0aGlzLmZwcyA9IDE7XHJcbiAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTsvLyDQvdCw0YfQsNC70YzQvdCw0Y8g0L7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICB0aGlzLnRhYmxlLm9uY2xpY2sgPSB0aGlzLnRhYmxlU2V0Q2VsbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNsaWNrID0gdGhpcy5idXR0dW5zT25jbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNoYW5nZSA9IHRoaXMuc2xpZGVyc0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBidXR0b25zRGlzYWJsZSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQlVUVE9OJyk7XHJcbiAgICBpZiAoYnV0dG9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdidXR0dW5zIG5vdCBmb3VuZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhidXR0b25zKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldO1xyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3BhdXNlJykge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0YWJsZVNldENlbGwoZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdURCcpIHJldHVybjtcclxuICAgIGNvbnN0IGogPSB0YXJnZXQuY2VsbEluZGV4O1xyXG4gICAgY29uc3QgaSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnNlY3Rpb25Sb3dJbmRleDtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdsaXZlJyk7XHJcbiAgICB0aGlzLmJvYXJkLnNldENlbGwoaSwgaik7XHJcbiAgfVxyXG4gIGFuaW0oY2FsbGJhY2spIHtcclxuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPXHJcbiAgICAvLyBjb25zb2xlLmxvZygnYW5pbSBzdGFydGVkJyk7XHJcbiAgICBsZXQgb2xkTWF0cml4O1xyXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgY29uc3QgeyBmcHMgfSA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wLmJpbmQodGhpcykpOy8vINC90LUg0LHQu9C+0LrQuNGA0YPQtdGCINC/0L7RgtC+0LohXHJcbiAgICAgICAgICB0aGlzLmJvYXJkLndvcmtlcigpO1xyXG4gICAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0LzQsNGC0YDQuNGG0LAg0L3QtSDQvNC10L3Rj9C10YLRgdGPLCDRgdGB0YvQu9C60LAg0L7RgdGC0LDQtdGC0Y8g0LDQutGC0YPQsNC70YzQvdC+0LlcclxuICAgICAgICAgIGlmIChvbGRNYXRyaXggPT09IHRoaXMuYm9hcmQubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgICB9IGVsc2Ugb2xkTWF0cml4ID0gdGhpcy5ib2FyZC5tYXRyaXg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FuaW0gc3RvcHBlZCcpO1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDAgLyBmcHMpO1xyXG4gICAgfVxyXG4gICAgbG9vcC5jYWxsKHRoaXMpO1xyXG4gIH1cclxuICBidXR0dW5zT25jbGljayhldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0YXJnZXQuaW5uZXJIVE1MKSB7XHJcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmFuaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGF1c2UnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzbGlkZXJzQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcpIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlQXNOdW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGNhc2UgJ3NwZWVkJzpcclxuICAgICAgICB0aGlzLmZwcyA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzaXplKHRoaXMuYm9hcmQubSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGFpbnRlci5uZXdUYWJsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoZWlnaHQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2l6ZSh2YWx1ZSwgdGhpcy5ib2FyZC5uKTtcclxuICAgICAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250cm9sbGVyL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcihtID0gMTAsIG4gPSAxMCkge1xyXG4gICAgLy8g0LzQsNGC0YDQuNGG0LAgbSDQvdCwIG4g0LfQsNC/0L7Qu9C90LXQvdC90LDRjyBmYWxzZVxyXG4gICAgdGhpcy5tYXRyaXggPSBbXTtcclxuICAgIHRoaXMubSA9IG07Ly8g0YHRgtGA0L7QutC4XHJcbiAgICB0aGlzLm4gPSBuOy8vINGB0YLQvtC70LHRhtGLXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBsaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tYXRyaXgucHVzaChsaW5lKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzaXplKG0sIG4pIHtcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBwID0gbWF0cml4WzBdLmxlbmd0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVzaXplJyxvLHAsJyB0byAnLG0sbik7XHJcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgaWYgKHAgPiBuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbzsgaSArPSAxKSB7XHJcbiAgICAgICAgbWF0cml4W2ldLnNwbGljZShuIC0gMSwgcCAtIG4pOy8vINC40LfQvNC10L3QuNGC0YwgbGVuZ3RoP1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGB0YLQvtC70LHRhtGLXHJcbiAgICBpZiAocCA8IG4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvOyBpICs9IDEpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gcDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgICAgbWF0cml4W2ldLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINGD0LHQuNGA0LDQtdC8INGB0YLRgNC+0LrQuFxyXG4gICAgaWYgKG8gPiBtKSBtYXRyaXguc3BsaWNlKG0gLSAxLCBvIC0gbSk7Ly8g0LjQt9C80LXQvdC40YLRjCBsZW5ndGg/XHJcblxyXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGB0YLRgNC+0LrQuFxyXG4gICAgaWYgKG8gPCBtKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBsaW5lLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gbzsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICAgIG1hdHJpeC5wdXNoKGxpbmUuc2xpY2UoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm0gPSBtO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjbGVhcigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm47IGogKz0gMSkge1xyXG4gICAgICAgIHRoaXMubWF0cml4W2ldW2pdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgd29ya2VyKCkge1xyXG4gICAgLy8g0L7QsdGF0L7QtCDQstGB0LXRhSDRj9GH0LXQtdC6INGBINC30LDQv9C40YHRjNGOINC90L7QstC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICAgIGNvbnN0IG5ld01hdHJpeCA9IFtdO1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTsvLyDQuNC30LzQtdC90LzQu9Cw0YHRjCDQu9C4INC80LDRgtGA0LjRhtCwP1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBuZXdMaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXRyaXhbMF0ubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5jZWxsKGksIGopO1xyXG4gICAgICAgIG5ld0xpbmUucHVzaChjZWxsKTtcclxuICAgICAgICBpZiAoY2VsbCAhPT0gdGhpcy5tYXRyaXhbaV1bal0pIGZsYWcgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdNYXRyaXgucHVzaChuZXdMaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmxhZykgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY2VsbChpLCBqKSB7XHJcbiAgICAvLyDQstGL0YfQuNGB0LvRj9C10YIg0L3QvtCy0L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQu9C10YLQutC4XHJcbiAgICAvLyDRgdC+0YHQtdC00Lgg0LfQsCDQv9GA0LXQtNC10LvQsNC80Lgg0L/QvtC70Y8g0YHRh9C40YLQsNGO0YLRgdGPINC80LXRgNGC0LLRi9C80LhcclxuICAgIGxldCBjb3VudCA9IDA7Ly8g0LbQuNCy0YvQtSDRgdC+0YHQtdC00LhcclxuICAgIGxldCBuZXdDZWxsID0gdGhpcy5tYXRyaXhbaV1bal07XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSAtIDFdW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2ldW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgIGlmICh0aGlzLm1hdHJpeFtpXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSArIDFdW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50IDwgMiB8fCBjb3VudCA+IDMpIG5ld0NlbGwgPSBmYWxzZTtcclxuICAgIGVsc2UgaWYgKGNvdW50ID09PSAzKSBuZXdDZWxsID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXdDZWxsO1xyXG4gIH1cclxuICBzZXRDZWxsKGksIGopIHtcclxuICAgIHRoaXMubWF0cml4W2ldW2pdID0gIXRoaXMubWF0cml4W2ldW2pdO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZGVsL0JvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyIHtcclxuICBjb25zdHJ1Y3Rvcihib2FyZCwgdGFibGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3QnLCB0YWJsZSk7XHJcbiAgICB0aGlzLnRhYmxlID0gdGFibGU7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBwYWludGVyKHRhYmxlV2lkdGgpIHtcclxuICAgIC8vINC30LDQv9C+0LvQvdC10L3QuNC1INGC0LXQu9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gdGhpcy5ib2FyZDtcclxuICAgIGNvbnN0IG0gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtLG4pO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0YWJsZVdpZHRoIC8gbjtcclxuICAgIGNvbnN0IGhlaWdodCA9IHdpZHRoO1xyXG5cclxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgdGQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBpZiAobWF0cml4W2ldW2pdKSB0ZC5jbGFzc05hbWUgPSAnbGl2ZSc7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRib2R5O1xyXG4gIH1cclxuXHJcbiAgbmV3VGFibGUoKSB7XHJcbiAgICAvLyDQtNC70Y8gINGB0L7Qt9C00LDQvdC40Y8g0Lgg0YDQtdGB0LDQudC30LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIGNvbnN0IHsgdGFibGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRoaXMucGFpbnRlcih0YWJsZS5jbGllbnRXaWR0aCk7XHJcbiAgICBpZiAodGFibGUuY2hpbGRyZW4ubGVuZ3RoKSB0YWJsZS5yZXBsYWNlQ2hpbGQodGJvZHksIHRhYmxlLmNoaWxkcmVuWzBdKTtcclxuICAgIGVsc2UgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gIH1cclxuXHJcbiAgcmVwYWludGVyKCkge1xyXG4gICAgLy8g0LjQt9C80LXQvdC10L3QuNC1INC60LvQsNGB0YHQsCDRgyDRj9GH0LXQtdC6INGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuYm9hcmQ7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRhYmxlLmNoaWxkcmVuWzBdO1xyXG4gICAgY29uc3QgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBuID0gbWF0cml4WzBdLmxlbmd0aDtcclxuICAgIC8vIGNvbnNvbGUubG9nKG0sbik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IHRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgIGlmIChtYXRyaXhbaV1bal0pIHRkLmNsYXNzTmFtZSA9ICdsaXZlJztcclxuICAgICAgICBlbHNlIHRkLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdmlldy9QYWludGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9