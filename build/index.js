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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Event {
  constructor(sender) {
    this.sender = sender;
    this.listeners = [];
  }
  attach(listener) {
    this.listeners.push(listener);
  }
  notify(args) {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}
/* harmony default export */ __webpack_exports__["a"] = (Event);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicons_favicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mvc_controller_Controller__ = __webpack_require__(16);






const controller = new __WEBPACK_IMPORTED_MODULE_4__mvc_controller_Controller__["a" /* default */]();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__(4);

faviconsContext.keys().forEach(faviconsContext);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-48x48.png": 5,
	"./apple-touch-icon.png": 6,
	"./browserconfig.xml": 7,
	"./favicon-16x16.png": 8,
	"./favicon-32x32.png": 9,
	"./favicon.ico": 10,
	"./manifest.json": 11,
	"./mstile-150x150.png": 12,
	"./safari-pinned-tab.svg": 13
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
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-48x48.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/manifest.json";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// slider
const sliderChange = function sliderChange(element) {
  const { value } = element;
  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousElementSibling.innerText = value;
  element.previousElementSibling.style.left = `${((width / (max - min)) * (value - min)) - 8.75}px`;
};

const sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('.js-slider__input');
  elements.forEach((element) => {
    sliderChange(element);
    element.oninput = sliderInput;
  });
}());


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// ripple effect
const rippleEffect = function rippleEffect(event) {
  const div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = `${event.pageY - 25}px`;
  div.style.left = `${event.pageX - 25}px`;

  document.body.appendChild(div);
  setTimeout(() => { document.body.removeChild(div); }, 550);
};

(function initButtons() {
  const elements = document.querySelectorAll('.standart-button');
  elements.forEach((element) => {
    element.onclick = rippleEffect;
  });
}());


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_Model__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_View__ = __webpack_require__(18);



class Controller {
  constructor() {
    this.model = new __WEBPACK_IMPORTED_MODULE_0__model_Model__["a" /* default */](10, 10);
    this.view = new __WEBPACK_IMPORTED_MODULE_1__view_View__["a" /* default */]();
    this.running = false;
    this.fps = 1;
    this.setSubscription();
    this.view.initTable(this.model.matrix);// начальная отрисовка
    this.setRunning(false);
  }
  setSubscription() {
    this.model.matrixChanged.attach((sender, obj) => {
      if (obj.resized) this.view.initTable(obj.matrix);
      else this.view.changeTable(obj.matrix);
    });
    this.view.tableClicked.attach((sender, event) => {
      this.handleCell(event);
    });
    this.view.buttonClicked.attach((sender, event) => {
      this.handlerButtons(event);
    });
    this.view.sliderChanged.attach((sender, event) => {
      this.handlerSliders(event);
    });
  }
  setRunning(value) {
    this.running = value;
    this.view.setButtons(this.running);
    this.view.setStatus(this.running);
  }
  anim(callback) {
    // останавливается и вызывет аргумент callback(для тестов), когда матрица перестает меняться
    const self = this;
    const loop = function loop() {
      setTimeout(() => {
        if (self.running) {
          requestAnimationFrame(loop);
          const flag = self.model.calculateMatrix();
          if (flag) { // повторилась ли матрица ?
            self.setRunning(false);
          }
        } else if (callback) {
          callback();
        }
      }, 1000 / self.fps);
    };
    loop();
  }
  handleCell({ target }) {
    const cell = target.cellIndex;
    const row = target.parentElement.sectionRowIndex;
    this.model.toggleCell(row, cell);
  }
  handlerButtons({ target }) {
    switch (target.innerHTML) {
      case 'start':
        this.setRunning(true);
        this.anim();
        break;
      case 'pause':
        this.setRunning(false);
        break;
      case 'clear':
        this.model.clearMatrix();
        this.setRunning(false);
    }
  }
  handlerSliders({ target }) {
    const value = target.valueAsNumber;
    switch (target.parentElement.previousElementSibling.innerText) {
      case 'speed':
        this.fps = value;
        break;
      case 'width':
        this.setRunning(false);
        this.model.resizeMatrix(this.model.rows, value);
        break;
      case 'height':
        this.setRunning(false);
        this.model.resizeMatrix(value, this.model.columns);
    }
  }
}
/* harmony default export */ __webpack_exports__["a"] = (Controller);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Event__ = __webpack_require__(0);


class Model {
  constructor(rows = 10, columns = 10) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
  }
  initMatrix(rows, columns) {
    this.matrix = [];
    for (let i = 0; i < rows; i += 1) {
      let row = [];
      for (let j = 0; j < columns; j += 1) {
        row.push(false);
      }
      this.matrix.push(row);
    }
  }
  resizeMatrix(rows, columns) {
    this.initMatrix(rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix, resized: true });
  }
  clearMatrix() {
    this.initMatrix(this.rows, this.columns);
    this.listOldMatrix = [];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
  calculateMatrix() {
    // обход всех ячеек с записью нового состояния
    const newMatrix = this.matrix.map((row, i) => row.map((cell, j) => this.calculateCell(i, j)));
    const flag = this.isRepeatMatrix(newMatrix); // повторилась ли матрица?
    this.matrix = newMatrix;
    this.matrixChanged.notify({ matrix: this.matrix });
    return flag;
  }
  isRepeatMatrix(newMatrix) {
    const flag = this.listOldMatrix.some(matrix =>
      matrix.every((row, i) =>
        row.every((cell, j) =>
          (cell === newMatrix[i][j]))));
    if (flag) this.listOldMatrix = [];
    else this.listOldMatrix.push(newMatrix);
    return flag;
  }
  calculateCell(row, column) {
    // соседи за пределами поля считаются мертвыми
    let count = 0;// живые соседи
    let newCell = this.matrix[row][column];

    if (this.matrix[row - 1]) {
      if (this.matrix[row - 1][column - 1]) count += 1;
      if (this.matrix[row - 1][column]) count += 1;
      if (this.matrix[row - 1][column + 1]) count += 1;
    }

    if (this.matrix[row][column - 1]) count += 1;
    if (this.matrix[row][column + 1]) count += 1;

    if (this.matrix[row + 1]) {
      if (this.matrix[row + 1][column - 1]) count += 1;
      if (this.matrix[row + 1][column]) count += 1;
      if (this.matrix[row + 1][column + 1]) count += 1;
    }

    if (count < 2 || count > 3) newCell = false;
    else if (count === 3) newCell = true;
    return newCell;
  }
  toggleCell(row, column) {
    this.matrix[row][column] = !this.matrix[row][column];
    this.matrixChanged.notify({ matrix: this.matrix });
  }
}
/* harmony default export */ __webpack_exports__["a"] = (Model);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Event__ = __webpack_require__(0);


class View {
  constructor() {
    this.initDOMElements();
    this.initEvents();
    this.initHandlers();
  }
  initDOMElements() {
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.buttons = this.controls.getElementsByTagName('button');
    this.status = this.controls.querySelector('.status');
  }
  initEvents() {
    this.tableClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
    this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
    this.sliderChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
  }
  initHandlers() {
    this.table.onclick = (event) => {
      if (event.target.tagName === 'TD') {
        this.tableClicked.notify(event);
      }
    };
    this.controls.onclick = (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.buttonClicked.notify(event);
      }
    };
    this.controls.onchange = (event) => {
      if (event.target.tagName === 'INPUT') {
        this.sliderChanged.notify(event);
      }
    };
  }
  setButtons(running) {
    if (!this.buttons) return;
    // forEach в браузере работает, а в тестах нет. по докам его быть не должно
    Array.prototype.forEach.call(this.buttons, (button) => {
      if (button.innerHTML === 'start') {
        button.disabled = running;
      }
      if (button.innerHTML === 'pause') {
        button.disabled = !running;
      }
    });
  }
  setStatus(running) {
    if (!this.status) return;
    if (running) this.status.classList.remove('status_stopped');
    else this.status.classList.add('status_stopped');
  }
  getNewTbody(matrix, tableWidth) {
    // заполнение тела таблицы
    const columns = matrix[0].length;
    const size = tableWidth / columns;
    let tbody = document.createElement('tbody');
    matrix.forEach((row) => {
      let tr = document.createElement('tr');
      row.forEach((cell) => {
        let td = document.createElement('td');
        this.setTdClass(td, cell);
        td.style.width = `${size}px`;
        td.style.height = `${size}px`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
  initTable(matrix) {
    // для  создания и ресайза таблицы
    const { table } = this;
    const tbody = this.getNewTbody(matrix, table.clientWidth);
    if (table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
  }
  changeTable(matrix) {
    // изменение класса у ячеек таблицы
    const { table } = this;
    const tbody = table.children[0];
    matrix.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.setTdClass(tbody.children[i].children[j], cell);
      });
    });
  }
  setTdClass(td, flag) {
    if (flag) td.className = 'live';
    else td.className = '';
  }
}
/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA4ZDU2ODI3YTE2OTUyODhhZDMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3V0aWxzL0V2ZW50LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvbWFuaWZlc3QuanNvbiIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbXZjL2NvbnRyb2xsZXIvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tdmMvbW9kZWwvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakMsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwOGQ1NjgyN2ExNjk1Mjg4YWQzIiwiY2xhc3MgRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKHNlbmRlcikge1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gIH1cclxuICBhdHRhY2gobGlzdGVuZXIpIHtcclxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuICBub3RpZnkoYXJncykge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIodGhpcy5zZW5kZXIsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL212Yy91dGlscy9FdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vaW5kZXguc3R5bCc7XHJcbmltcG9ydCAnLi9mYXZpY29ucy9mYXZpY29ucyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9tdmMvY29udHJvbGxlci9Db250cm9sbGVyJztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGZhdmljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnISFmaWxlLWxvYWRlcj9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGljb3x4bWx8anNvbikkLyk7XHJcblxyXG5mYXZpY29uc0NvbnRleHQua2V5cygpLmZvckVhY2goZmF2aWNvbnNDb250ZXh0KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mYXZpY29ucy9mYXZpY29ucy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI6IDUsXG5cdFwiLi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiOiA2LFxuXHRcIi4vYnJvd3NlcmNvbmZpZy54bWxcIjogNyxcblx0XCIuL2Zhdmljb24tMTZ4MTYucG5nXCI6IDgsXG5cdFwiLi9mYXZpY29uLTMyeDMyLnBuZ1wiOiA5LFxuXHRcIi4vZmF2aWNvbi5pY29cIjogMTAsXG5cdFwiLi9tYW5pZmVzdC5qc29uXCI6IDExLFxuXHRcIi4vbXN0aWxlLTE1MHgxNTAucG5nXCI6IDEyLFxuXHRcIi4vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI6IDEzXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zICEuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0gXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSRcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi5pY29cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLmljb1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbWFuaWZlc3QuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzbGlkZXJcclxuY29uc3Qgc2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gc2xpZGVyQ2hhbmdlKGVsZW1lbnQpIHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlbGVtZW50O1xyXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjA7XHJcbiAgY29uc3QgbWluID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1pbi52YWx1ZTtcclxuICBjb25zdCBtYXggPSBlbGVtZW50LmF0dHJpYnV0ZXMubWF4LnZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUubGVmdCA9IGAkeygod2lkdGggLyAobWF4IC0gbWluKSkgKiAodmFsdWUgLSBtaW4pKSAtIDguNzV9cHhgO1xyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVySW5wdXQgPSBmdW5jdGlvbiBzbGlkZXJJbnB1dChldmVudCkge1xyXG4gIHNsaWRlckNoYW5nZShldmVudC50YXJnZXQpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNsaWRlcl9faW5wdXQnKTtcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzbGlkZXJDaGFuZ2UoZWxlbWVudCk7XHJcbiAgICBlbGVtZW50Lm9uaW5wdXQgPSBzbGlkZXJJbnB1dDtcclxuICB9KTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJpcHBsZSBlZmZlY3RcclxuY29uc3QgcmlwcGxlRWZmZWN0ID0gZnVuY3Rpb24gcmlwcGxlRWZmZWN0KGV2ZW50KSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ3JpcHBsZSc7XHJcbiAgZGl2LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZIC0gMjV9cHhgO1xyXG4gIGRpdi5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQucGFnZVggLSAyNX1weGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpOyB9LCA1NTApO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YW5kYXJ0LWJ1dHRvbicpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQub25jbGljayA9IHJpcHBsZUVmZmVjdDtcclxuICB9KTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNb2RlbCBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcvVmlldyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoMTAsIDEwKTtcclxuICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KCk7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZnBzID0gMTtcclxuICAgIHRoaXMuc2V0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLnZpZXcuaW5pdFRhYmxlKHRoaXMubW9kZWwubWF0cml4KTsvLyDQvdCw0YfQsNC70YzQvdCw0Y8g0L7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gIH1cclxuICBzZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICB0aGlzLm1vZGVsLm1hdHJpeENoYW5nZWQuYXR0YWNoKChzZW5kZXIsIG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLnJlc2l6ZWQpIHRoaXMudmlldy5pbml0VGFibGUob2JqLm1hdHJpeCk7XHJcbiAgICAgIGVsc2UgdGhpcy52aWV3LmNoYW5nZVRhYmxlKG9iai5tYXRyaXgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpZXcudGFibGVDbGlja2VkLmF0dGFjaCgoc2VuZGVyLCBldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUNlbGwoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpZXcuYnV0dG9uQ2xpY2tlZC5hdHRhY2goKHNlbmRlciwgZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVyQnV0dG9ucyhldmVudCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlldy5zbGlkZXJDaGFuZ2VkLmF0dGFjaCgoc2VuZGVyLCBldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZXJTbGlkZXJzKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRSdW5uaW5nKHZhbHVlKSB7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSB2YWx1ZTtcclxuICAgIHRoaXMudmlldy5zZXRCdXR0b25zKHRoaXMucnVubmluZyk7XHJcbiAgICB0aGlzLnZpZXcuc2V0U3RhdHVzKHRoaXMucnVubmluZyk7XHJcbiAgfVxyXG4gIGFuaW0oY2FsbGJhY2spIHtcclxuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCIGNhbGxiYWNrKNC00LvRjyDRgtC10YHRgtC+0LIpLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPXHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGxvb3AgPSBmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZi5ydW5uaW5nKSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgICAgICBjb25zdCBmbGFnID0gc2VsZi5tb2RlbC5jYWxjdWxhdGVNYXRyaXgoKTtcclxuICAgICAgICAgIGlmIChmbGFnKSB7IC8vINC/0L7QstGC0L7RgNC40LvQsNGB0Ywg0LvQuCDQvNCw0YLRgNC40YbQsCA/XHJcbiAgICAgICAgICAgIHNlbGYuc2V0UnVubmluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDAgLyBzZWxmLmZwcyk7XHJcbiAgICB9O1xyXG4gICAgbG9vcCgpO1xyXG4gIH1cclxuICBoYW5kbGVDZWxsKHsgdGFyZ2V0IH0pIHtcclxuICAgIGNvbnN0IGNlbGwgPSB0YXJnZXQuY2VsbEluZGV4O1xyXG4gICAgY29uc3Qgcm93ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuc2VjdGlvblJvd0luZGV4O1xyXG4gICAgdGhpcy5tb2RlbC50b2dnbGVDZWxsKHJvdywgY2VsbCk7XHJcbiAgfVxyXG4gIGhhbmRsZXJCdXR0b25zKHsgdGFyZ2V0IH0pIHtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmlubmVySFRNTCkge1xyXG4gICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKHRydWUpO1xyXG4gICAgICAgIHRoaXMuYW5pbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXVzZSc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMubW9kZWwuY2xlYXJNYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVyU2xpZGVycyh7IHRhcmdldCB9KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZUFzTnVtYmVyO1xyXG4gICAgc3dpdGNoICh0YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCkge1xyXG4gICAgICBjYXNlICdzcGVlZCc6XHJcbiAgICAgICAgdGhpcy5mcHMgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2lkdGgnOlxyXG4gICAgICAgIHRoaXMuc2V0UnVubmluZyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZXNpemVNYXRyaXgodGhpcy5tb2RlbC5yb3dzLCB2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hlaWdodCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnJlc2l6ZU1hdHJpeCh2YWx1ZSwgdGhpcy5tb2RlbC5jb2x1bW5zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tdmMvY29udHJvbGxlci9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvRXZlbnQnO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKHJvd3MgPSAxMCwgY29sdW1ucyA9IDEwKSB7XHJcbiAgICB0aGlzLmluaXRNYXRyaXgocm93cywgY29sdW1ucyk7XHJcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuICAgIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xyXG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkID0gbmV3IEV2ZW50KHRoaXMpO1xyXG4gIH1cclxuICBpbml0TWF0cml4KHJvd3MsIGNvbHVtbnMpIHtcclxuICAgIHRoaXMubWF0cml4ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkgKz0gMSkge1xyXG4gICAgICBsZXQgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaiArPSAxKSB7XHJcbiAgICAgICAgcm93LnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWF0cml4LnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzaXplTWF0cml4KHJvd3MsIGNvbHVtbnMpIHtcclxuICAgIHRoaXMuaW5pdE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcclxuICAgIHRoaXMucm93cyA9IHJvd3M7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCwgcmVzaXplZDogdHJ1ZSB9KTtcclxuICB9XHJcbiAgY2xlYXJNYXRyaXgoKSB7XHJcbiAgICB0aGlzLmluaXRNYXRyaXgodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xyXG4gICAgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCB9KTtcclxuICB9XHJcbiAgY2FsY3VsYXRlTWF0cml4KCkge1xyXG4gICAgLy8g0L7QsdGF0L7QtCDQstGB0LXRhSDRj9GH0LXQtdC6INGBINC30LDQv9C40YHRjNGOINC90L7QstC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICAgIGNvbnN0IG5ld01hdHJpeCA9IHRoaXMubWF0cml4Lm1hcCgocm93LCBpKSA9PiByb3cubWFwKChjZWxsLCBqKSA9PiB0aGlzLmNhbGN1bGF0ZUNlbGwoaSwgaikpKTtcclxuICAgIGNvbnN0IGZsYWcgPSB0aGlzLmlzUmVwZWF0TWF0cml4KG5ld01hdHJpeCk7IC8vINC/0L7QstGC0L7RgNC40LvQsNGB0Ywg0LvQuCDQvNCw0YLRgNC40YbQsD9cclxuICAgIHRoaXMubWF0cml4ID0gbmV3TWF0cml4O1xyXG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XHJcbiAgICByZXR1cm4gZmxhZztcclxuICB9XHJcbiAgaXNSZXBlYXRNYXRyaXgobmV3TWF0cml4KSB7XHJcbiAgICBjb25zdCBmbGFnID0gdGhpcy5saXN0T2xkTWF0cml4LnNvbWUobWF0cml4ID0+XHJcbiAgICAgIG1hdHJpeC5ldmVyeSgocm93LCBpKSA9PlxyXG4gICAgICAgIHJvdy5ldmVyeSgoY2VsbCwgaikgPT5cclxuICAgICAgICAgIChjZWxsID09PSBuZXdNYXRyaXhbaV1bal0pKSkpO1xyXG4gICAgaWYgKGZsYWcpIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xyXG4gICAgZWxzZSB0aGlzLmxpc3RPbGRNYXRyaXgucHVzaChuZXdNYXRyaXgpO1xyXG4gICAgcmV0dXJuIGZsYWc7XHJcbiAgfVxyXG4gIGNhbGN1bGF0ZUNlbGwocm93LCBjb2x1bW4pIHtcclxuICAgIC8vINGB0L7RgdC10LTQuCDQt9CwINC/0YDQtdC00LXQu9Cw0LzQuCDQv9C+0LvRjyDRgdGH0LjRgtCw0Y7RgtGB0Y8g0LzQtdGA0YLQstGL0LzQuFxyXG4gICAgbGV0IGNvdW50ID0gMDsvLyDQttC40LLRi9C1INGB0L7RgdC10LTQuFxyXG4gICAgbGV0IG5ld0NlbGwgPSB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl07XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W3JvdyAtIDFdKSB7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgLSAxXVtjb2x1bW4gLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyAtIDFdW2NvbHVtbl0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgLSAxXVtjb2x1bW4gKyAxXSkgY291bnQgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbcm93XVtjb2x1bW4gLSAxXSkgY291bnQgKz0gMTtcclxuICAgIGlmICh0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbiArIDFdKSBjb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgKyAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93ICsgMV1bY29sdW1uIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgKyAxXVtjb2x1bW5dKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93ICsgMV1bY29sdW1uICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50IDwgMiB8fCBjb3VudCA+IDMpIG5ld0NlbGwgPSBmYWxzZTtcclxuICAgIGVsc2UgaWYgKGNvdW50ID09PSAzKSBuZXdDZWxsID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXdDZWxsO1xyXG4gIH1cclxuICB0b2dnbGVDZWxsKHJvdywgY29sdW1uKSB7XHJcbiAgICB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl0gPSAhdGhpcy5tYXRyaXhbcm93XVtjb2x1bW5dO1xyXG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL212Yy9tb2RlbC9Nb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL0V2ZW50JztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0RE9NRWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICB9XHJcbiAgaW5pdERPTUVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgdGhpcy5idXR0b25zID0gdGhpcy5jb250cm9scy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4gIH1cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy50YWJsZUNsaWNrZWQgPSBuZXcgRXZlbnQodGhpcyk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrZWQgPSBuZXcgRXZlbnQodGhpcyk7XHJcbiAgICB0aGlzLnNsaWRlckNoYW5nZWQgPSBuZXcgRXZlbnQodGhpcyk7XHJcbiAgfVxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMudGFibGUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdURCcpIHtcclxuICAgICAgICB0aGlzLnRhYmxlQ2xpY2tlZC5ub3RpZnkoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWQubm90aWZ5KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29udHJvbHMub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDaGFuZ2VkLm5vdGlmeShldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIHNldEJ1dHRvbnMocnVubmluZykge1xyXG4gICAgaWYgKCF0aGlzLmJ1dHRvbnMpIHJldHVybjtcclxuICAgIC8vIGZvckVhY2gg0LIg0LHRgNCw0YPQt9C10YDQtSDRgNCw0LHQvtGC0LDQtdGCLCDQsCDQsiDRgtC10YHRgtCw0YUg0L3QtdGCLiDQv9C+INC00L7QutCw0Lwg0LXQs9C+INCx0YvRgtGMINC90LUg0LTQvtC70LbQvdC+XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuYnV0dG9ucywgKGJ1dHRvbikgPT4ge1xyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHJ1bm5pbmc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdwYXVzZScpIHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSAhcnVubmluZztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFN0YXR1cyhydW5uaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdHVzKSByZXR1cm47XHJcbiAgICBpZiAocnVubmluZykgdGhpcy5zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnc3RhdHVzX3N0b3BwZWQnKTtcclxuICAgIGVsc2UgdGhpcy5zdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzX3N0b3BwZWQnKTtcclxuICB9XHJcbiAgZ2V0TmV3VGJvZHkobWF0cml4LCB0YWJsZVdpZHRoKSB7XHJcbiAgICAvLyDQt9Cw0L/QvtC70L3QtdC90LjQtSDRgtC10LvQsCDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgY29sdW1ucyA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICBjb25zdCBzaXplID0gdGFibGVXaWR0aCAvIGNvbHVtbnM7XHJcbiAgICBsZXQgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgbWF0cml4LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgdGhpcy5zZXRUZENsYXNzKHRkLCBjZWxsKTtcclxuICAgICAgICB0ZC5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRib2R5O1xyXG4gIH1cclxuICBpbml0VGFibGUobWF0cml4KSB7XHJcbiAgICAvLyDQtNC70Y8gINGB0L7Qt9C00LDQvdC40Y8g0Lgg0YDQtdGB0LDQudC30LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIGNvbnN0IHsgdGFibGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRoaXMuZ2V0TmV3VGJvZHkobWF0cml4LCB0YWJsZS5jbGllbnRXaWR0aCk7XHJcbiAgICBpZiAodGFibGUuY2hpbGRyZW4ubGVuZ3RoKSB0YWJsZS5yZXBsYWNlQ2hpbGQodGJvZHksIHRhYmxlLmNoaWxkcmVuWzBdKTtcclxuICAgIGVsc2UgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gIH1cclxuICBjaGFuZ2VUYWJsZShtYXRyaXgpIHtcclxuICAgIC8vINC40LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0LAg0YMg0Y/Rh9C10LXQuiDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyB0YWJsZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHRib2R5ID0gdGFibGUuY2hpbGRyZW5bMF07XHJcbiAgICBtYXRyaXguZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBqKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRUZENsYXNzKHRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLCBjZWxsKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0VGRDbGFzcyh0ZCwgZmxhZykge1xyXG4gICAgaWYgKGZsYWcpIHRkLmNsYXNzTmFtZSA9ICdsaXZlJztcclxuICAgIGVsc2UgdGQuY2xhc3NOYW1lID0gJyc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbXZjL3ZpZXcvVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==