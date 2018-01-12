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
var EventSender = /** @class */ (function () {
    function EventSender(sender) {
        this.sender = sender;
        this.listeners = [];
    }
    EventSender.prototype.attach = function (listener) {
        this.listeners.push(listener);
    };
    EventSender.prototype.notify = function (args) {
        var _this = this;
        this.listeners.forEach(function (listener) {
            listener(_this.sender, args);
        });
    };
    return EventSender;
}());
/* harmony default export */ __webpack_exports__["a"] = (EventSender);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mvc_controller_Controller_ts__ = __webpack_require__(16);





var controller = new __WEBPACK_IMPORTED_MODULE_4__mvc_controller_Controller_ts__["a" /* default */]();


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


var Controller = /** @class */ (function () {
    function Controller() {
        this.model = new __WEBPACK_IMPORTED_MODULE_0__model_Model__["a" /* default */](10, 10);
        this.view = new __WEBPACK_IMPORTED_MODULE_1__view_View__["a" /* default */]();
        this.running = false;
        this.fps = 1;
        this.setSubscription();
        this.view.initTable(this.model.matrix); // начальная отрисовка
        this.setRunning(false);
    }
    Controller.prototype.setSubscription = function () {
        var _this = this;
        this.model.matrixChanged.attach(function (sender, obj) {
            if (obj.resized)
                _this.view.initTable(obj.matrix);
            else
                _this.view.changeTable(obj.matrix);
        });
        this.view.tableClicked.attach(function (sender, event) {
            _this.handleCell(event);
        });
        this.view.buttonClicked.attach(function (sender, event) {
            _this.handlerButtons(event);
        });
        this.view.sliderChanged.attach(function (sender, event) {
            _this.handlerSliders(event);
        });
    };
    Controller.prototype.setRunning = function (value) {
        this.running = value;
        this.view.setButtons(this.running);
        this.view.setStatus(this.running);
    };
    Controller.prototype.anim = function (callback) {
        // останавливается и вызывет аргумент callback(для тестов), когда матрица перестает меняться
        var self = this;
        var loop = function () {
            setTimeout(function () {
                if (self.running) {
                    requestAnimationFrame(loop);
                    var flag = self.model.calculateMatrix();
                    if (flag) {
                        self.setRunning(false);
                    }
                }
                else if (callback) {
                    callback();
                }
            }, 1000 / self.fps);
        };
        loop();
    };
    Controller.prototype.handleCell = function (_a) {
        var target = _a.target;
        var cell = target.cellIndex;
        var row = target.parentElement.sectionRowIndex;
        this.model.toggleCell(row, cell);
    };
    Controller.prototype.handlerButtons = function (_a) {
        var target = _a.target;
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
    };
    Controller.prototype.handlerSliders = function (_a) {
        var target = _a.target;
        var value = target.valueAsNumber;
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
    };
    return Controller;
}());
/* harmony default export */ __webpack_exports__["a"] = (Controller);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__ = __webpack_require__(0);

var Model = /** @class */ (function () {
    function Model(rows, columns) {
        if (rows === void 0) { rows = 10; }
        if (columns === void 0) { columns = 10; }
        this.initMatrix(rows, columns);
        this.rows = rows;
        this.columns = columns;
        this.listOldMatrix = [];
        this.matrixChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
    }
    Model.prototype.initMatrix = function (rows, columns) {
        this.matrix = [];
        for (var i = 0; i < rows; i += 1) {
            var row = [];
            for (var j = 0; j < columns; j += 1) {
                row.push(false);
            }
            this.matrix.push(row);
        }
    };
    Model.prototype.resizeMatrix = function (rows, columns) {
        this.initMatrix(rows, columns);
        this.rows = rows;
        this.columns = columns;
        this.listOldMatrix = [];
        this.matrixChanged.notify({ matrix: this.matrix, resized: true });
    };
    Model.prototype.clearMatrix = function () {
        this.initMatrix(this.rows, this.columns);
        this.listOldMatrix = [];
        this.matrixChanged.notify({ matrix: this.matrix });
    };
    Model.prototype.calculateMatrix = function () {
        var _this = this;
        // обход всех ячеек с записью нового состояния
        var newMatrix = this.matrix.map(function (row, i) {
            return row.map(function (cell, j) { return _this.calculateCell(i, j); });
        });
        var flag = this.isRepeatMatrix(newMatrix);
        this.matrix = newMatrix;
        this.matrixChanged.notify({ matrix: this.matrix });
        return flag; // повторилась матрица?
    };
    Model.prototype.isRepeatMatrix = function (newMatrix) {
        var flag = this.listOldMatrix.some(function (matrix) {
            return matrix.every(function (row, i) {
                return row.every(function (cell, j) {
                    return (cell === newMatrix[i][j]);
                });
            });
        });
        if (flag)
            this.listOldMatrix = [];
        else
            this.listOldMatrix.push(newMatrix);
        return flag;
    };
    Model.prototype.calculateCell = function (row, column) {
        // соседи за пределами поля считаются мертвыми
        var count = 0; // живые соседи
        var newCell = this.matrix[row][column];
        if (this.matrix[row - 1]) {
            if (this.matrix[row - 1][column - 1])
                count += 1;
            if (this.matrix[row - 1][column])
                count += 1;
            if (this.matrix[row - 1][column + 1])
                count += 1;
        }
        if (this.matrix[row][column - 1])
            count += 1;
        if (this.matrix[row][column + 1])
            count += 1;
        if (this.matrix[row + 1]) {
            if (this.matrix[row + 1][column - 1])
                count += 1;
            if (this.matrix[row + 1][column])
                count += 1;
            if (this.matrix[row + 1][column + 1])
                count += 1;
        }
        if (count < 2 || count > 3)
            newCell = false;
        else if (count === 3)
            newCell = true;
        return newCell;
    };
    Model.prototype.toggleCell = function (row, column) {
        this.matrix[row][column] = !this.matrix[row][column];
        this.matrixChanged.notify({ matrix: this.matrix });
    };
    return Model;
}());
/* harmony default export */ __webpack_exports__["a"] = (Model);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__ = __webpack_require__(0);

var View = /** @class */ (function () {
    function View() {
        this.initDOMElements();
        this.initEvents();
        this.initHandlers();
    }
    View.prototype.initDOMElements = function () {
        this.table = document.getElementById('board');
        this.controls = document.getElementById('controls');
        this.buttons = this.controls.getElementsByTagName('button');
        this.status = this.controls.querySelector('.status');
    };
    View.prototype.initEvents = function () {
        this.tableClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.sliderChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
    };
    View.prototype.initHandlers = function () {
        var _this = this;
        this.table.onclick = function (event) {
            var element = event.target;
            if (element.tagName === 'TD') {
                _this.tableClicked.notify(event);
            }
        };
        this.controls.onclick = function (event) {
            var element = event.target;
            if (element.tagName === 'BUTTON') {
                _this.buttonClicked.notify(event);
            }
        };
        this.controls.onchange = function (event) {
            var element = event.target;
            if (element.tagName === 'INPUT') {
                _this.sliderChanged.notify(event);
            }
        };
    };
    View.prototype.setButtons = function (running) {
        if (!this.buttons)
            return;
        // встроенный forEach для коллекции в браузере работает, а в тестах нет
        // по докам его быть не должно
        Array.prototype.forEach.call(this.buttons, function (button) {
            if (button.innerHTML === 'start') {
                button.disabled = running;
            }
            if (button.innerHTML === 'pause') {
                button.disabled = !running;
            }
        });
    };
    View.prototype.setStatus = function (running) {
        if (!this.status)
            return;
        if (running)
            this.status.classList.remove('status_stopped');
        else
            this.status.classList.add('status_stopped');
    };
    View.prototype.getNewTbody = function (matrix, tableWidth) {
        var _this = this;
        // заполнение тела таблицы
        var columns = matrix[0].length;
        var size = tableWidth / columns;
        var tbody = document.createElement('tbody');
        matrix.forEach(function (row) {
            var tr = document.createElement('tr');
            row.forEach(function (cell) {
                var td = document.createElement('td');
                _this.setTdClass(td, cell);
                td.style.width = size + "px";
                td.style.height = size + "px";
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        return tbody;
    };
    View.prototype.initTable = function (matrix) {
        // для  создания и ресайза таблицы
        var table = this.table;
        var tbody = this.getNewTbody(matrix, table.clientWidth);
        if (table.children.length)
            table.replaceChild(tbody, table.children[0]);
        else
            table.appendChild(tbody);
    };
    View.prototype.changeTable = function (matrix) {
        var _this = this;
        matrix.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                _this.setTdClass(_this.table.rows[i].cells[j], cell);
            });
        });
    };
    View.prototype.setTdClass = function (td, flag) {
        if (flag)
            td.classList.add('live');
        else
            td.classList.remove('live');
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDIwN2FlZDkxNjVlNmI3MzBiZmEiLCJ3ZWJwYWNrOi8vLy4vbXZjL3V0aWxzL0V2ZW50U2VuZGVyLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvbWFuaWZlc3QuanNvbiIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbXZjL2NvbnRyb2xsZXIvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9tdmMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcvVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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QUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFDRCx5REFBZSxJQUFJLEVBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMjA3YWVkOTE2NWU2YjczMGJmYSIsImNsYXNzIEV2ZW50U2VuZGVyIHtcclxuICBzZW5kZXI6IG9iamVjdDtcclxuICBsaXN0ZW5lcnM6IEFycmF5PChhLCBiKSA9PiB2b2lkPjtcclxuICBjb25zdHJ1Y3RvcihzZW5kZXI6IG9iamVjdCkge1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gIH1cclxuICBhdHRhY2gobGlzdGVuZXI6IChhLCBiKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICB9XHJcbiAgbm90aWZ5KGFyZ3M6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIodGhpcy5zZW5kZXIsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VuZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy91dGlscy9FdmVudFNlbmRlci50cyIsImltcG9ydCAnLi9pbmRleC5zdHlsJztcclxuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMnO1xyXG5cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vaW5kZXgudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBmYXZpY29uc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJyEhZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLicsIHRydWUsIC9cXC4oc3ZnfHBuZ3xpY298eG1sfGpzb24pJC8pO1xyXG5cclxuZmF2aWNvbnNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGZhdmljb25zQ29udGV4dCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZmF2aWNvbnMvZmF2aWNvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiOiA1LFxuXHRcIi4vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjogNixcblx0XCIuL2Jyb3dzZXJjb25maWcueG1sXCI6IDcsXG5cdFwiLi9mYXZpY29uLTE2eDE2LnBuZ1wiOiA4LFxuXHRcIi4vZmF2aWNvbi0zMngzMi5wbmdcIjogOSxcblx0XCIuL2Zhdmljb24uaWNvXCI6IDEwLFxuXHRcIi4vbWFuaWZlc3QuanNvblwiOiAxMSxcblx0XCIuL21zdGlsZS0xNTB4MTUwLnBuZ1wiOiAxMixcblx0XCIuL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiOiAxM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mYXZpY29ucyAhLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIFxcLihzdmd8cG5nfGljb3x4bWx8anNvbikkXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Jyb3dzZXJjb25maWcueG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24uaWNvXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi5pY29cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL21hbmlmZXN0Lmpzb25cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2xpZGVyXHJcbmNvbnN0IHNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIHNsaWRlckNoYW5nZShlbGVtZW50KSB7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZWxlbWVudDtcclxuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDIwO1xyXG4gIGNvbnN0IG1pbiA9IGVsZW1lbnQuYXR0cmlidXRlcy5taW4udmFsdWU7XHJcbiAgY29uc3QgbWF4ID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1heC52YWx1ZTtcclxuICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmxlZnQgPSBgJHsoKHdpZHRoIC8gKG1heCAtIG1pbikpICogKHZhbHVlIC0gbWluKSkgLSA4Ljc1fXB4YDtcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlcklucHV0ID0gZnVuY3Rpb24gc2xpZGVySW5wdXQoZXZlbnQpIHtcclxuICBzbGlkZXJDaGFuZ2UoZXZlbnQudGFyZ2V0KTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zbGlkZXJfX2lucHV0Jyk7XHJcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc2xpZGVyQ2hhbmdlKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5vbmlucHV0ID0gc2xpZGVySW5wdXQ7XHJcbiAgfSk7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByaXBwbGUgZWZmZWN0XHJcbmNvbnN0IHJpcHBsZUVmZmVjdCA9IGZ1bmN0aW9uIHJpcHBsZUVmZmVjdChldmVudCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pZCA9ICdyaXBwbGUnO1xyXG4gIGRpdi5zdHlsZS50b3AgPSBgJHtldmVudC5wYWdlWSAtIDI1fXB4YDtcclxuICBkaXYuc3R5bGUubGVmdCA9IGAke2V2ZW50LnBhZ2VYIC0gMjV9cHhgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTsgfSwgNTUwKTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0QnV0dG9ucygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFuZGFydC1idXR0b24nKTtcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSByaXBwbGVFZmZlY3Q7XHJcbiAgfSk7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vbW9kZWwvTW9kZWwnO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuLi92aWV3L1ZpZXcnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgbW9kZWw6IE1vZGVsO1xyXG4gIHZpZXc6IFZpZXc7XHJcbiAgcnVubmluZzogYm9vbGVhbjtcclxuICBmcHM6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoMTAsIDEwKTtcclxuICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KCk7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZnBzID0gMTtcclxuICAgIHRoaXMuc2V0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLnZpZXcuaW5pdFRhYmxlKHRoaXMubW9kZWwubWF0cml4KTsvLyDQvdCw0YfQsNC70YzQvdCw0Y8g0L7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gIH1cclxuICBzZXRTdWJzY3JpcHRpb24oKTp2b2lkIHtcclxuICAgIHRoaXMubW9kZWwubWF0cml4Q2hhbmdlZC5hdHRhY2goKHNlbmRlciwgb2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmoucmVzaXplZCkgdGhpcy52aWV3LmluaXRUYWJsZShvYmoubWF0cml4KTtcclxuICAgICAgZWxzZSB0aGlzLnZpZXcuY2hhbmdlVGFibGUob2JqLm1hdHJpeCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlldy50YWJsZUNsaWNrZWQuYXR0YWNoKChzZW5kZXIsIGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2VsbChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlldy5idXR0b25DbGlja2VkLmF0dGFjaCgoc2VuZGVyLCBldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZXJCdXR0b25zKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aWV3LnNsaWRlckNoYW5nZWQuYXR0YWNoKChzZW5kZXIsIGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlclNsaWRlcnMoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFJ1bm5pbmcodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMucnVubmluZyA9IHZhbHVlO1xyXG4gICAgdGhpcy52aWV3LnNldEJ1dHRvbnModGhpcy5ydW5uaW5nKTtcclxuICAgIHRoaXMudmlldy5zZXRTdGF0dXModGhpcy5ydW5uaW5nKTtcclxuICB9XHJcbiAgYW5pbShjYWxsYmFjaz8pOiB2b2lkIHtcclxuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCIGNhbGxiYWNrKNC00LvRjyDRgtC10YHRgtC+0LIpLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPXHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxmLnJ1bm5pbmcpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICAgIGNvbnN0IGZsYWc6IGJvb2xlYW4gPSBzZWxmLm1vZGVsLmNhbGN1bGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgICAgaWYgKGZsYWcpIHsgLy8g0L/QvtCy0YLQvtGA0LjQu9Cw0YHRjCDQu9C4INC80LDRgtGA0LjRhtCwID9cclxuICAgICAgICAgICAgc2VsZi5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCAvIHNlbGYuZnBzKTtcclxuICAgIH07XHJcbiAgICBsb29wKCk7XHJcbiAgfVxyXG4gIGhhbmRsZUNlbGwoeyB0YXJnZXQgfSk6IHZvaWQge1xyXG4gICAgY29uc3QgY2VsbDogbnVtYmVyID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIGNvbnN0IHJvdzogbnVtYmVyID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuc2VjdGlvblJvd0luZGV4O1xyXG4gICAgdGhpcy5tb2RlbC50b2dnbGVDZWxsKHJvdywgY2VsbCk7XHJcbiAgfVxyXG4gIGhhbmRsZXJCdXR0b25zKHsgdGFyZ2V0IH0pOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmlubmVySFRNTCkge1xyXG4gICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKHRydWUpO1xyXG4gICAgICAgIHRoaXMuYW5pbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXVzZSc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMubW9kZWwuY2xlYXJNYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVyU2xpZGVycyh7IHRhcmdldCB9KTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gdGFyZ2V0LnZhbHVlQXNOdW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGNhc2UgJ3NwZWVkJzpcclxuICAgICAgICB0aGlzLmZwcyA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnJlc2l6ZU1hdHJpeCh0aGlzLm1vZGVsLnJvd3MsIHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVzaXplTWF0cml4KHZhbHVlLCB0aGlzLm1vZGVsLmNvbHVtbnMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMiLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvRXZlbnRTZW5kZXInO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG4gIG1hdHJpeDogYm9vbGVhbltdW107XHJcbiAgcm93czogbnVtYmVyO1xyXG4gIGNvbHVtbnM6IG51bWJlcjtcclxuICBsaXN0T2xkTWF0cml4OiBib29sZWFuW11bXVtdO1xyXG4gIG1hdHJpeENoYW5nZWQ6IEV2ZW50O1xyXG4gIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciA9IDEwLCBjb2x1bW5zOiBudW1iZXIgPSAxMCkge1xyXG4gICAgdGhpcy5pbml0TWF0cml4KHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICB0aGlzLmxpc3RPbGRNYXRyaXggPSBbXTtcclxuICAgIHRoaXMubWF0cml4Q2hhbmdlZCA9IG5ldyBFdmVudCh0aGlzKTtcclxuICB9XHJcbiAgaW5pdE1hdHJpeChyb3dzOiBudW1iZXIsIGNvbHVtbnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRyaXggPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSArPSAxKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqICs9IDEpIHtcclxuICAgICAgICByb3cucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tYXRyaXgucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXNpemVNYXRyaXgocm93czogbnVtYmVyLCBjb2x1bW5zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcclxuICAgIHRoaXMucm93cyA9IHJvd3M7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCwgcmVzaXplZDogdHJ1ZSB9KTtcclxuICB9XHJcbiAgY2xlYXJNYXRyaXgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRNYXRyaXgodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xyXG4gICAgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCB9KTtcclxuICB9XHJcbiAgY2FsY3VsYXRlTWF0cml4KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8g0L7QsdGF0L7QtCDQstGB0LXRhSDRj9GH0LXQtdC6INGBINC30LDQv9C40YHRjNGOINC90L7QstC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICAgIGNvbnN0IG5ld01hdHJpeDogYm9vbGVhbltdW10gPSB0aGlzLm1hdHJpeC5tYXAoKHJvdzogYm9vbGVhbltdLCBpOiBudW1iZXIpID0+XHJcbiAgICAgIHJvdy5tYXAoKGNlbGw6IGJvb2xlYW4sIGo6IG51bWJlcikgPT4gdGhpcy5jYWxjdWxhdGVDZWxsKGksIGopKSk7XHJcbiAgICBjb25zdCBmbGFnOiBib29sZWFuID0gdGhpcy5pc1JlcGVhdE1hdHJpeChuZXdNYXRyaXgpO1xyXG4gICAgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXg7XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCB9KTtcclxuICAgIHJldHVybiBmbGFnOy8vINC/0L7QstGC0L7RgNC40LvQsNGB0Ywg0LzQsNGC0YDQuNGG0LA/XHJcbiAgfVxyXG4gIGlzUmVwZWF0TWF0cml4KG5ld01hdHJpeCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZmxhZzogYm9vbGVhbiA9IHRoaXMubGlzdE9sZE1hdHJpeC5zb21lKChtYXRyaXg6IGJvb2xlYW5bXVtdKSA9PlxyXG4gICAgICBtYXRyaXguZXZlcnkoKHJvdzogYm9vbGVhbltdLCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgcm93LmV2ZXJ5KChjZWxsOiBib29sZWFuLCBqOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAoY2VsbCA9PT0gbmV3TWF0cml4W2ldW2pdKSkpKTtcclxuICAgIGlmIChmbGFnKSB0aGlzLmxpc3RPbGRNYXRyaXggPSBbXTtcclxuICAgIGVsc2UgdGhpcy5saXN0T2xkTWF0cml4LnB1c2gobmV3TWF0cml4KTtcclxuICAgIHJldHVybiBmbGFnO1xyXG4gIH1cclxuICBjYWxjdWxhdGVDZWxsKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgLy8g0YHQvtGB0LXQtNC4INC30LAg0L/RgNC10LTQtdC70LDQvNC4INC/0L7Qu9GPINGB0YfQuNGC0LDRjtGC0YHRjyDQvNC10YDRgtCy0YvQvNC4XHJcbiAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7Ly8g0LbQuNCy0YvQtSDRgdC+0YHQtdC00LhcclxuICAgIGxldCBuZXdDZWxsOiBib29sZWFuID0gdGhpcy5tYXRyaXhbcm93XVtjb2x1bW5dO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgLSAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93IC0gMV1bY29sdW1uIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgLSAxXVtjb2x1bW5dKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93IC0gMV1bY29sdW1uICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W3Jvd11bY29sdW1uIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICBpZiAodGhpcy5tYXRyaXhbcm93XVtjb2x1bW4gKyAxXSkgY291bnQgKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbcm93ICsgMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyArIDFdW2NvbHVtbiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93ICsgMV1bY29sdW1uXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyArIDFdW2NvbHVtbiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3VudCA8IDIgfHwgY291bnQgPiAzKSBuZXdDZWxsID0gZmFsc2U7XHJcbiAgICBlbHNlIGlmIChjb3VudCA9PT0gMykgbmV3Q2VsbCA9IHRydWU7XHJcbiAgICByZXR1cm4gbmV3Q2VsbDtcclxuICB9XHJcbiAgdG9nZ2xlQ2VsbChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubWF0cml4W3Jvd11bY29sdW1uXSA9ICF0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl07XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vbXZjL21vZGVsL01vZGVsLnRzIiwiaW1wb3J0IEV2ZW50U2VuZGVyIGZyb20gJy4uL3V0aWxzL0V2ZW50U2VuZGVyJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG4gIGNvbnRyb2xzOiBIVE1MRWxlbWVudDtcclxuICBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PjtcclxuICBzdGF0dXM6IEhUTUxFbGVtZW50O1xyXG4gIHRhYmxlQ2xpY2tlZDogRXZlbnRTZW5kZXI7XHJcbiAgYnV0dG9uQ2xpY2tlZDogRXZlbnRTZW5kZXI7XHJcbiAgc2xpZGVyQ2hhbmdlZDogRXZlbnRTZW5kZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRET01FbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gIH1cclxuICBpbml0RE9NRWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJykgYXMgSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHRoaXMuY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcclxuICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuY29udHJvbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcbiAgaW5pdEV2ZW50cygpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGVDbGlja2VkID0gbmV3IEV2ZW50U2VuZGVyKHRoaXMpO1xyXG4gICAgdGhpcy5idXR0b25DbGlja2VkID0gbmV3IEV2ZW50U2VuZGVyKHRoaXMpO1xyXG4gICAgdGhpcy5zbGlkZXJDaGFuZ2VkID0gbmV3IEV2ZW50U2VuZGVyKHRoaXMpO1xyXG4gIH1cclxuICBpbml0SGFuZGxlcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYmxlLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1REJykge1xyXG4gICAgICAgIHRoaXMudGFibGVDbGlja2VkLm5vdGlmeShldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnRyb2xzLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWQubm90aWZ5KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29udHJvbHMub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgICAgICB0aGlzLnNsaWRlckNoYW5nZWQubm90aWZ5KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgc2V0QnV0dG9ucyhydW5uaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYnV0dG9ucykgcmV0dXJuO1xyXG4gICAgLy8g0LLRgdGC0YDQvtC10L3QvdGL0LkgZm9yRWFjaCDQtNC70Y8g0LrQvtC70LvQtdC60YbQuNC4INCyINCx0YDQsNGD0LfQtdGA0LUg0YDQsNCx0L7RgtCw0LXRgiwg0LAg0LIg0YLQtdGB0YLQsNGFINC90LXRglxyXG4gICAgLy8g0L/QviDQtNC+0LrQsNC8INC10LPQviDQsdGL0YLRjCDQvdC1INC00L7Qu9C20L3QvlxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmJ1dHRvbnMsIChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdzdGFydCcpIHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBydW5uaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAncGF1c2UnKSB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gIXJ1bm5pbmc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRTdGF0dXMocnVubmluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnN0YXR1cykgcmV0dXJuO1xyXG4gICAgaWYgKHJ1bm5pbmcpIHRoaXMuc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXR1c19zdG9wcGVkJyk7XHJcbiAgICBlbHNlIHRoaXMuc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3N0YXR1c19zdG9wcGVkJyk7XHJcbiAgfVxyXG4gIGdldE5ld1Rib2R5KG1hdHJpeDogYm9vbGVhbltdW10sIHRhYmxlV2lkdGg6IG51bWJlcik6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50IHtcclxuICAgIC8vINC30LDQv9C+0LvQvdC10L3QuNC1INGC0LXQu9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCBjb2x1bW5zOiBudW1iZXIgPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgY29uc3Qgc2l6ZTogbnVtYmVyID0gdGFibGVXaWR0aCAvIGNvbHVtbnM7XHJcbiAgICBsZXQgdGJvZHk6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgbGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgcm93LmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICB0aGlzLnNldFRkQ2xhc3ModGQsIGNlbGwpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGJvZHk7XHJcbiAgfVxyXG4gIGluaXRUYWJsZShtYXRyaXg6IGJvb2xlYW5bXVtdKTogdm9pZCB7XHJcbiAgICAvLyDQtNC70Y8gINGB0L7Qt9C00LDQvdC40Y8g0Lgg0YDQtdGB0LDQudC30LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIGNvbnN0IHsgdGFibGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB0Ym9keTogSFRNTEVsZW1lbnQgPSB0aGlzLmdldE5ld1Rib2R5KG1hdHJpeCwgdGFibGUuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuLmxlbmd0aCkgdGFibGUucmVwbGFjZUNoaWxkKHRib2R5LCB0YWJsZS5jaGlsZHJlblswXSk7XHJcbiAgICBlbHNlIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICB9XHJcbiAgY2hhbmdlVGFibGUobWF0cml4OiBib29sZWFuW11bXSk6IHZvaWQge1xyXG4gICAgbWF0cml4LmZvckVhY2goKHJvdzogYm9vbGVhbltdLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgcm93LmZvckVhY2goKGNlbGw6IGJvb2xlYW4sIGo6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VGRDbGFzcyh0aGlzLnRhYmxlLnJvd3NbaV0uY2VsbHNbal0sIGNlbGwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRUZENsYXNzKHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCwgZmxhZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGZsYWcpIHRkLmNsYXNzTGlzdC5hZGQoJ2xpdmUnKTtcclxuICAgIGVsc2UgdGQuY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZScpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy92aWV3L1ZpZXcudHMiXSwic291cmNlUm9vdCI6IiJ9