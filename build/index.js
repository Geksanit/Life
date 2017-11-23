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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_slider_slider__);
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
  element.previousSibling.innerText = value;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.left = (((width / (max - min)) * (value - min)) - 8.75) + 'px';
};

window.sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('input.slider');
  for (let i = 0; i < elements.length; i += 1) {
    sliderChange(elements[i]);
  }
}());

// slider-percentage
const sliderPercentageChange = function sliderPercentageChange(element) {
  const { value } = element;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.width = (((width / (max - min)) * (value - min)) + 1) + 'px';
};

window.sliderPercentageInput = function sliderPercentageInput(event) {
  sliderPercentageChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('input.slider-percentage');
  for (let i = 0; i < elements.length; i += 1) {
    sliderPercentageChange(elements[i]);
  }
}());


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// ripple effect
document.buttonClick = function (event) {
  // console.log(event.screenY,event.pageY,event.y,event);
  const div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY - 25 + 'px';
  div.style.left = event.pageX - 25 + 'px';

  document.body.appendChild(div);
  setTimeout(() => { document.body.removeChild(div); }, 550);
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTA4YjRhMjJmNGUyZDY1ZWM2ZDciLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RhbmRhcnQtYnV0dG9uL3N0YW5kYXJ0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVyL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlldy9QYWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkEseUM7Ozs7OztBQ0FBOztBQUVBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDekJBLDZFOzs7Ozs7QUNBQSx5RTs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLHNFOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLGtFOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsMEU7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxTQUFTLFFBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFNBQVMsUUFBUTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0NBQWdDLEVBQUU7QUFDdEQ7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixlQUFlO0FBQ2YsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMDhiNGEyMmY0ZTJkNjVlYzZkNyIsImltcG9ydCAnLi9pbmRleC5zdHlsJztcclxuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBmYXZpY29uc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJyEhZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLicsIHRydWUsIC9cXC4oc3ZnfHBuZ3xpY298eG1sfGpzb24pJC8pO1xyXG5cclxuZmF2aWNvbnNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGZhdmljb25zQ29udGV4dCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZmF2aWNvbnMvZmF2aWNvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiOiA0LFxuXHRcIi4vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjogNSxcblx0XCIuL2Jyb3dzZXJjb25maWcueG1sXCI6IDYsXG5cdFwiLi9mYXZpY29uLTE2eDE2LnBuZ1wiOiA3LFxuXHRcIi4vZmF2aWNvbi0zMngzMi5wbmdcIjogOCxcblx0XCIuL2Zhdmljb24uaWNvXCI6IDksXG5cdFwiLi9tYW5pZmVzdC5qc29uXCI6IDEwLFxuXHRcIi4vbXN0aWxlLTE1MHgxNTAucG5nXCI6IDExLFxuXHRcIi4vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI6IDEyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zICEuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0gXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSRcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi5pY29cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLmljb1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNsaWRlclxyXG5jb25zdCBzbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiBzbGlkZXJDaGFuZ2UoZWxlbWVudCkge1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGVsZW1lbnQ7XHJcbiAgZWxlbWVudC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcblxyXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjA7XHJcbiAgY29uc3QgbWluID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1pbi52YWx1ZTtcclxuICBjb25zdCBtYXggPSBlbGVtZW50LmF0dHJpYnV0ZXMubWF4LnZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLmxlZnQgPSAoKCh3aWR0aCAvIChtYXggLSBtaW4pKSAqICh2YWx1ZSAtIG1pbikpIC0gOC43NSkgKyAncHgnO1xyXG59O1xyXG5cclxud2luZG93LnNsaWRlcklucHV0ID0gZnVuY3Rpb24gc2xpZGVySW5wdXQoZXZlbnQpIHtcclxuICBzbGlkZXJDaGFuZ2UoZXZlbnQudGFyZ2V0KTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnNsaWRlcicpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHNsaWRlckNoYW5nZShlbGVtZW50c1tpXSk7XHJcbiAgfVxyXG59KCkpO1xyXG5cclxuLy8gc2xpZGVyLXBlcmNlbnRhZ2VcclxuY29uc3Qgc2xpZGVyUGVyY2VudGFnZUNoYW5nZSA9IGZ1bmN0aW9uIHNsaWRlclBlcmNlbnRhZ2VDaGFuZ2UoZWxlbWVudCkge1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjA7XHJcbiAgY29uc3QgbWluID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1pbi52YWx1ZTtcclxuICBjb25zdCBtYXggPSBlbGVtZW50LmF0dHJpYnV0ZXMubWF4LnZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLndpZHRoID0gKCgod2lkdGggLyAobWF4IC0gbWluKSkgKiAodmFsdWUgLSBtaW4pKSArIDEpICsgJ3B4JztcclxufTtcclxuXHJcbndpbmRvdy5zbGlkZXJQZXJjZW50YWdlSW5wdXQgPSBmdW5jdGlvbiBzbGlkZXJQZXJjZW50YWdlSW5wdXQoZXZlbnQpIHtcclxuICBzbGlkZXJQZXJjZW50YWdlQ2hhbmdlKGV2ZW50LnRhcmdldCk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5zbGlkZXItcGVyY2VudGFnZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHNsaWRlclBlcmNlbnRhZ2VDaGFuZ2UoZWxlbWVudHNbaV0pO1xyXG4gIH1cclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJpcHBsZSBlZmZlY3RcclxuZG9jdW1lbnQuYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAvLyBjb25zb2xlLmxvZyhldmVudC5zY3JlZW5ZLGV2ZW50LnBhZ2VZLGV2ZW50LnksZXZlbnQpO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pZCA9ICdyaXBwbGUnO1xyXG4gIGRpdi5zdHlsZS50b3AgPSBldmVudC5wYWdlWSAtIDI1ICsgJ3B4JztcclxuICBkaXYuc3R5bGUubGVmdCA9IGV2ZW50LnBhZ2VYIC0gMjUgKyAncHgnO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTsgfSwgNTUwKTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vbW9kZWwvQm9hcmQnO1xyXG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi92aWV3L1BhaW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcclxuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoMTAsIDEwKTtcclxuICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuYm9hcmQsIHRoaXMudGFibGUpO1xyXG4gICAgdGhpcy5mcHMgPSAxO1xyXG4gICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7Ly8g0L3QsNGH0LDQu9GM0L3QsNGPINC+0YLRgNC40YHQvtCy0LrQsFxyXG4gICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgdGhpcy50YWJsZS5vbmNsaWNrID0gdGhpcy50YWJsZVNldENlbGwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udHJvbHMub25jbGljayA9IHRoaXMuYnV0dHVuc09uY2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udHJvbHMub25jaGFuZ2UgPSB0aGlzLnNsaWRlcnNDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgYnV0dG9uc0Rpc2FibGUoKSB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JVVFRPTicpO1xyXG4gICAgaWYgKGJ1dHRvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnYnV0dHVucyBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coYnV0dG9ucyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXTtcclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdzdGFydCcpIHtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdwYXVzZScpIHtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBlbHNlIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdGFibGVTZXRDZWxsKGV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnVEQnKSByZXR1cm47XHJcbiAgICBjb25zdCBqID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIGNvbnN0IGkgPSB0YXJnZXQucGFyZW50RWxlbWVudC5zZWN0aW9uUm93SW5kZXg7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbGl2ZScpO1xyXG4gICAgdGhpcy5ib2FyZC5zZXRDZWxsKGksIGopO1xyXG4gIH1cclxuICBhbmltKGNhbGxiYWNrKSB7XHJcbiAgICAvLyDQvtGB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0Lgg0LLRi9C30YvQstC10YIg0LDRgNCz0YPQvNC10L3Rgiwg0LrQvtCz0LTQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdGB0YLQsNC10YIg0LzQtdC90Y/RgtGM0YHRj1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2FuaW0gc3RhcnRlZCcpO1xyXG4gICAgbGV0IG9sZE1hdHJpeDtcclxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgIGNvbnN0IHsgZnBzIH0gPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTsvLyDQvdC1INCx0LvQvtC60LjRgNGD0LXRgiDQv9C+0YLQvtC6IVxyXG4gICAgICAgICAgdGhpcy5ib2FyZC53b3JrZXIoKTtcclxuICAgICAgICAgIHRoaXMucGFpbnRlci5yZXBhaW50ZXIoKTtcclxuICAgICAgICAgIC8vINC10YHQu9C4INC80LDRgtGA0LjRhtCwINC90LUg0LzQtdC90Y/QtdGC0YHRjywg0YHRgdGL0LvQutCwINC+0YHRgtCw0LXRgtGPINCw0LrRgtGD0LDQu9GM0L3QvtC5XHJcbiAgICAgICAgICBpZiAob2xkTWF0cml4ID09PSB0aGlzLmJvYXJkLm1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIG9sZE1hdHJpeCA9IHRoaXMuYm9hcmQubWF0cml4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhbmltIHN0b3BwZWQnKTtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwIC8gZnBzKTtcclxuICAgIH1cclxuICAgIGxvb3AuY2FsbCh0aGlzKTtcclxuICB9XHJcbiAgYnV0dHVuc09uY2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcclxuICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0JVVFRPTicpIHJldHVybjtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmlubmVySFRNTCkge1xyXG4gICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhdXNlJzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMucGFpbnRlci5yZXBhaW50ZXIoKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2xpZGVyc0NoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSByZXR1cm47XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZUFzTnVtYmVyO1xyXG4gICAgc3dpdGNoICh0YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCkge1xyXG4gICAgICBjYXNlICdzcGVlZCc6XHJcbiAgICAgICAgdGhpcy5mcHMgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2lkdGgnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2l6ZSh0aGlzLmJvYXJkLm0sIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNpemUodmFsdWUsIHRoaXMuYm9hcmQubik7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlci9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IobSA9IDEwLCBuID0gMTApIHtcclxuICAgIC8vINC80LDRgtGA0LjRhtCwIG0g0L3QsCBuINC30LDQv9C+0LvQvdC10L3QvdCw0Y8gZmFsc2VcclxuICAgIHRoaXMubWF0cml4ID0gW107XHJcbiAgICB0aGlzLm0gPSBtOy8vINGB0YLRgNC+0LrQuFxyXG4gICAgdGhpcy5uID0gbjsvLyDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgbGluZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgIGxpbmUucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubWF0cml4LnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc2l6ZShtLCBuKSB7XHJcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gdGhpcztcclxuICAgIGNvbnN0IG8gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgcCA9IG1hdHJpeFswXS5sZW5ndGg7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZScsbyxwLCcgdG8gJyxtLG4pO1xyXG4gICAgLy8g0YPQsdC40YDQsNC10Lwg0YHRgtC+0LvQsdGG0YtcclxuICAgIGlmIChwID4gbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG87IGkgKz0gMSkge1xyXG4gICAgICAgIG1hdHJpeFtpXS5zcGxpY2UobiAtIDEsIHAgLSBuKTsvLyDQuNC30LzQtdC90LjRgtGMIGxlbmd0aD9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgaWYgKHAgPCBuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbzsgaSArPSAxKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICAgIG1hdHJpeFtpXS5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRgdGC0YDQvtC60LhcclxuICAgIGlmIChvID4gbSkgbWF0cml4LnNwbGljZShtIC0gMSwgbyAtIG0pOy8vINC40LfQvNC10L3QuNGC0YwgbGVuZ3RoP1xyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdGC0YDQvtC60LhcclxuICAgIGlmIChvIDwgbSkge1xyXG4gICAgICBjb25zdCBsaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IG87IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgICBtYXRyaXgucHVzaChsaW5lLnNsaWNlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tID0gbTtcclxuICAgIHRoaXMubiA9IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY2xlYXIoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uOyBqICs9IDEpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHdvcmtlcigpIHtcclxuICAgIC8vINC+0LHRhdC+0LQg0LLRgdC10YUg0Y/Rh9C10LXQuiDRgSDQt9Cw0L/QuNGB0YzRjiDQvdC+0LLQvtCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPXHJcbiAgICBjb25zdCBuZXdNYXRyaXggPSBbXTtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7Ly8g0LjQt9C80LXQvdC80LvQsNGB0Ywg0LvQuCDQvNCw0YLRgNC40YbQsD9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgbmV3TGluZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF0cml4WzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbChpLCBqKTtcclxuICAgICAgICBuZXdMaW5lLnB1c2goY2VsbCk7XHJcbiAgICAgICAgaWYgKGNlbGwgIT09IHRoaXMubWF0cml4W2ldW2pdKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3TWF0cml4LnB1c2gobmV3TGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZsYWcpIHRoaXMubWF0cml4ID0gbmV3TWF0cml4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNlbGwoaSwgaikge1xyXG4gICAgLy8g0LLRi9GH0LjRgdC70Y/QtdGCINC90L7QstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC60LvQtdGC0LrQuFxyXG4gICAgLy8g0YHQvtGB0LXQtNC4INC30LAg0L/RgNC10LTQtdC70LDQvNC4INC/0L7Qu9GPINGB0YfQuNGC0LDRjtGC0YHRjyDQvNC10YDRgtCy0YvQvNC4XHJcbiAgICBsZXQgY291bnQgPSAwOy8vINC20LjQstGL0LUg0YHQvtGB0LXQtNC4XHJcbiAgICBsZXQgbmV3Q2VsbCA9IHRoaXMubWF0cml4W2ldW2pdO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV1bal0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV1baiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICBpZiAodGhpcy5tYXRyaXhbaV1baiArIDFdKSBjb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV1bal0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV1baiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3VudCA8IDIgfHwgY291bnQgPiAzKSBuZXdDZWxsID0gZmFsc2U7XHJcbiAgICBlbHNlIGlmIChjb3VudCA9PT0gMykgbmV3Q2VsbCA9IHRydWU7XHJcbiAgICByZXR1cm4gbmV3Q2VsbDtcclxuICB9XHJcbiAgc2V0Q2VsbChpLCBqKSB7XHJcbiAgICB0aGlzLm1hdHJpeFtpXVtqXSA9ICF0aGlzLm1hdHJpeFtpXVtqXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2RlbC9Cb2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmQsIHRhYmxlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY29uc3RydWN0JywgdGFibGUpO1xyXG4gICAgdGhpcy50YWJsZSA9IHRhYmxlO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgcGFpbnRlcih0YWJsZVdpZHRoKSB7XHJcbiAgICAvLyDQt9Cw0L/QvtC70L3QtdC90LjQtSDRgtC10LvQsCDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuYm9hcmQ7XHJcbiAgICBjb25zdCBtID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG4gPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgLy8gY29uc29sZS5sb2cobSxuKTtcclxuICAgIGNvbnN0IHdpZHRoID0gdGFibGVXaWR0aCAvIG47XHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aWR0aDtcclxuXHJcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkgdGQuY2xhc3NOYW1lID0gJ2xpdmUnO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0Ym9keTtcclxuICB9XHJcblxyXG4gIG5ld1RhYmxlKCkge1xyXG4gICAgLy8g0LTQu9GPICDRgdC+0LfQtNCw0L3QuNGPINC4INGA0LXRgdCw0LnQt9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnBhaW50ZXIodGFibGUuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuLmxlbmd0aCkgdGFibGUucmVwbGFjZUNoaWxkKHRib2R5LCB0YWJsZS5jaGlsZHJlblswXSk7XHJcbiAgICBlbHNlIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICB9XHJcblxyXG4gIHJlcGFpbnRlcigpIHtcclxuICAgIC8vINC40LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0LAg0YMg0Y/Rh9C10LXQuiDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyB0YWJsZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLmJvYXJkO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0YWJsZS5jaGlsZHJlblswXTtcclxuICAgIGNvbnN0IG0gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtLG4pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSB0Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICBpZiAobWF0cml4W2ldW2pdKSB0ZC5jbGFzc05hbWUgPSAnbGl2ZSc7XHJcbiAgICAgICAgZWxzZSB0ZC5jbGFzc05hbWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3ZpZXcvUGFpbnRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==