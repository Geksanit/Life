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
var Event = /** @class */ (function () {
    function Event(sender) {
        this.sender = sender;
        this.listeners = [];
    }
    Event.prototype.attach = function (listener) {
        this.listeners.push(listener);
    };
    Event.prototype.notify = function (args) {
        var _this = this;
        this.listeners.forEach(function (listener) {
            listener(_this.sender, args);
        });
    };
    return Event;
}());
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
        var loop = function loop() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Event__ = __webpack_require__(0);

var Model = /** @class */ (function () {
    function Model(rows, columns) {
        if (rows === void 0) { rows = 10; }
        if (columns === void 0) { columns = 10; }
        this.initMatrix(rows, columns);
        this.rows = rows;
        this.columns = columns;
        this.listOldMatrix = [];
        this.matrixChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Event__ = __webpack_require__(0);

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
        this.tableClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
        this.sliderChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_Event__["a" /* default */](this);
    };
    View.prototype.initHandlers = function () {
        var _this = this;
        this.table.onclick = function (event) {
            if (event.target.tagName === 'TD') {
                _this.tableClicked.notify(event);
            }
        };
        this.controls.onclick = function (event) {
            if (event.target.tagName === 'BUTTON') {
                _this.buttonClicked.notify(event);
            }
        };
        this.controls.onchange = function (event) {
            if (event.target.tagName === 'INPUT') {
                _this.sliderChanged.notify(event);
            }
        };
    };
    View.prototype.setButtons = function (running) {
        if (!this.buttons)
            return;
        // forEach для коллекции в браузере работает, а в тестах нет. по докам его быть не должно
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
        // изменение класса у ячеек таблицы
        var table = this.table;
        var tbody = table.children[0];
        matrix.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                _this.setTdClass(tbody.children[i].children[j], cell);
            });
        });
    };
    View.prototype.setTdClass = function (td, flag) {
        if (flag)
            td.className = 'live';
        else
            td.className = '';
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMyMjdjODE0ZTUzYWQ4NzBhNDMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3V0aWxzL0V2ZW50LnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWwiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvbWFuaWZlc3QuanNvbiIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmciLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbXZjL2NvbnRyb2xsZXIvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9tdmMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcvVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtJQUdFLGVBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQU0sR0FBTixVQUFPLFFBQXdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sSUFBUztRQUFoQixpQkFJQztRQUhDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM5QixRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQztBQUNELHlEQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJDO0FBQ087QUFDTztBQUNrQjtBQUNFO0FBRXhELElBQU0sVUFBVSxHQUFHLElBQUksOEVBQVUsRUFBRSxDQUFDOzs7Ozs7O0FDTnBDLHlDOzs7Ozs7QUNBQTs7QUFFQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7OztBQ3pCQSw2RTs7Ozs7O0FDQUEseUU7Ozs7OztBQ0FBLHNFOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLGdFOzs7Ozs7QUNBQSxrRTs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLDBFOzs7Ozs7QUNBQTtBQUNBO0FBQ0EsU0FBUyxRQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELCtDQUErQztBQUNoRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QyxzQkFBc0IsaUJBQWlCOztBQUV2QztBQUNBLG9CQUFvQixnQ0FBZ0MsRUFBRTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7O0FDaEJrQztBQUNIO0FBRWhDO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksNkRBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDJEQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHVCQUFzQjtRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvQ0FBZSxHQUFmO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsR0FBRztZQUMxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxJQUFJO2dCQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUMzQyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDM0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCx5QkFBSSxHQUFKLFVBQUssUUFBUztRQUNaLDRGQUE0RjtRQUM1RixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBTSxJQUFJLEdBQUc7WUFDWCxVQUFVLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixJQUFNLElBQUksR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ2IsQ0FBQztZQUNILENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUNGLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxFQUFVO1lBQVIsa0JBQU07UUFDakIsSUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELG1DQUFjLEdBQWQsVUFBZSxFQUFVO1lBQVIsa0JBQU07UUFDckIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixLQUFLLENBQUM7WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFDRCxtQ0FBYyxHQUFkLFVBQWUsRUFBVTtZQUFSLGtCQUFNO1FBQ3JCLElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDakIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7QUFDRCx5REFBZSxVQUFVLEVBQUM7Ozs7Ozs7OztBQzFGUztBQUVuQztJQU1FLGVBQVksSUFBaUIsRUFBRSxPQUFvQjtRQUF2QyxnQ0FBaUI7UUFBRSxzQ0FBb0I7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZEQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDBCQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsT0FBZTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUNELDRCQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsT0FBZTtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsK0JBQWUsR0FBZjtRQUFBLGlCQVFDO1FBUEMsOENBQThDO1FBQzlDLElBQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWtCLEVBQUUsQ0FBUztZQUM3RSxVQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBb0IsRUFBRSxDQUFTLElBQUssWUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO1FBQzFFLElBQU0sSUFBSSxHQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBdUI7SUFDckMsQ0FBQztJQUNELDhCQUFjLEdBQWQsVUFBZSxTQUFTO1FBQ3RCLElBQU0sSUFBSSxHQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBcUI7WUFDbEUsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQWtCLEVBQUUsQ0FBUztnQkFDekMsVUFBRyxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQW9CLEVBQUUsQ0FBUztvQkFDeEMsUUFBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUExQixDQUEwQixDQUFDO1lBRDdCLENBQzZCLENBQUM7UUFGaEMsQ0FFZ0MsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUk7WUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDZCQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsTUFBYztRQUN2Qyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLGdCQUFlO1FBQ3JDLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7WUFBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNELDBCQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsTUFBYztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7QUFDRCx5REFBZSxLQUFLLEVBQUM7Ozs7Ozs7OztBQ3BGYztBQUVuQztJQVFFO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDhCQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDZEQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZEQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZEQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDJCQUFZLEdBQVo7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFDLEtBQUs7WUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBSztZQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFLO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMxQix5RkFBeUY7UUFDekYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0JBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxJQUFJO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDBCQUFXLEdBQVgsVUFBWSxNQUFXLEVBQUUsVUFBa0I7UUFBM0MsaUJBaUJDO1FBaEJDLDBCQUEwQjtRQUMxQixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQU0sSUFBSSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNqQixJQUFJLEVBQUUsR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxJQUFJLE9BQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxPQUFJLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx3QkFBUyxHQUFULFVBQVUsTUFBcUI7UUFDN0Isa0NBQWtDO1FBQzFCLHNCQUFLLENBQVU7UUFDdkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCwwQkFBVyxHQUFYLFVBQVksTUFBcUI7UUFBakMsaUJBU0M7UUFSQyxtQ0FBbUM7UUFDM0Isc0JBQUssQ0FBVTtRQUN2QixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFtQixFQUFFLENBQVM7WUFDNUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWEsRUFBRSxDQUFTO2dCQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLEVBQU8sRUFBRSxJQUFhO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLElBQUk7WUFBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFDRCx5REFBZSxJQUFJLEVBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMzIyN2M4MTRlNTNhZDg3MGE0MyIsImNsYXNzIEV2ZW50IHtcclxuICBzZW5kZXI6IG9iamVjdDtcclxuICBsaXN0ZW5lcnM6IEFycmF5PChhLCBiKSA9PiB2b2lkPjtcclxuICBjb25zdHJ1Y3RvcihzZW5kZXI6IGFueSkge1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gIH1cclxuICBhdHRhY2gobGlzdGVuZXI6IChhLCBiKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICB9XHJcbiAgbm90aWZ5KGFyZ3M6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIodGhpcy5zZW5kZXIsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy91dGlscy9FdmVudC50cyIsImltcG9ydCAnLi9pbmRleC5zdHlsJztcclxuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMnO1xyXG5cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9pbmRleC50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGZhdmljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnISFmaWxlLWxvYWRlcj9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGljb3x4bWx8anNvbikkLyk7XHJcblxyXG5mYXZpY29uc0NvbnRleHQua2V5cygpLmZvckVhY2goZmF2aWNvbnNDb250ZXh0KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mYXZpY29ucy9mYXZpY29ucy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI6IDUsXG5cdFwiLi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiOiA2LFxuXHRcIi4vYnJvd3NlcmNvbmZpZy54bWxcIjogNyxcblx0XCIuL2Zhdmljb24tMTZ4MTYucG5nXCI6IDgsXG5cdFwiLi9mYXZpY29uLTMyeDMyLnBuZ1wiOiA5LFxuXHRcIi4vZmF2aWNvbi5pY29cIjogMTAsXG5cdFwiLi9tYW5pZmVzdC5qc29uXCI6IDExLFxuXHRcIi4vbXN0aWxlLTE1MHgxNTAucG5nXCI6IDEyLFxuXHRcIi4vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI6IDEzXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zICEuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0gXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSRcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi5pY29cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLmljb1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbWFuaWZlc3QuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzbGlkZXJcclxuY29uc3Qgc2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gc2xpZGVyQ2hhbmdlKGVsZW1lbnQpIHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlbGVtZW50O1xyXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjA7XHJcbiAgY29uc3QgbWluID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1pbi52YWx1ZTtcclxuICBjb25zdCBtYXggPSBlbGVtZW50LmF0dHJpYnV0ZXMubWF4LnZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUubGVmdCA9IGAkeygod2lkdGggLyAobWF4IC0gbWluKSkgKiAodmFsdWUgLSBtaW4pKSAtIDguNzV9cHhgO1xyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVySW5wdXQgPSBmdW5jdGlvbiBzbGlkZXJJbnB1dChldmVudCkge1xyXG4gIHNsaWRlckNoYW5nZShldmVudC50YXJnZXQpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNsaWRlcl9faW5wdXQnKTtcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzbGlkZXJDaGFuZ2UoZWxlbWVudCk7XHJcbiAgICBlbGVtZW50Lm9uaW5wdXQgPSBzbGlkZXJJbnB1dDtcclxuICB9KTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJpcHBsZSBlZmZlY3RcclxuY29uc3QgcmlwcGxlRWZmZWN0ID0gZnVuY3Rpb24gcmlwcGxlRWZmZWN0KGV2ZW50KSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ3JpcHBsZSc7XHJcbiAgZGl2LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZIC0gMjV9cHhgO1xyXG4gIGRpdi5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQucGFnZVggLSAyNX1weGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpOyB9LCA1NTApO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YW5kYXJ0LWJ1dHRvbicpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQub25jbGljayA9IHJpcHBsZUVmZmVjdDtcclxuICB9KTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNb2RlbCBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcvVmlldyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBtb2RlbDogTW9kZWw7XHJcbiAgdmlldzogVmlldztcclxuICBydW5uaW5nOiBib29sZWFuO1xyXG4gIGZwczogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCgxMCwgMTApO1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKTtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5mcHMgPSAxO1xyXG4gICAgdGhpcy5zZXRTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMudmlldy5pbml0VGFibGUodGhpcy5tb2RlbC5tYXRyaXgpOy8vINC90LDRh9Cw0LvRjNC90LDRjyDQvtGC0YDQuNGB0L7QstC60LBcclxuICAgIHRoaXMuc2V0UnVubmluZyhmYWxzZSk7XHJcbiAgfVxyXG4gIHNldFN1YnNjcmlwdGlvbigpOnZvaWQge1xyXG4gICAgdGhpcy5tb2RlbC5tYXRyaXhDaGFuZ2VkLmF0dGFjaCgoc2VuZGVyLCBvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5yZXNpemVkKSB0aGlzLnZpZXcuaW5pdFRhYmxlKG9iai5tYXRyaXgpO1xyXG4gICAgICBlbHNlIHRoaXMudmlldy5jaGFuZ2VUYWJsZShvYmoubWF0cml4KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aWV3LnRhYmxlQ2xpY2tlZC5hdHRhY2goKHNlbmRlciwgZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVDZWxsKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aWV3LmJ1dHRvbkNsaWNrZWQuYXR0YWNoKChzZW5kZXIsIGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlckJ1dHRvbnMoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpZXcuc2xpZGVyQ2hhbmdlZC5hdHRhY2goKHNlbmRlciwgZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVyU2xpZGVycyhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0UnVubmluZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5ydW5uaW5nID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpZXcuc2V0QnV0dG9ucyh0aGlzLnJ1bm5pbmcpO1xyXG4gICAgdGhpcy52aWV3LnNldFN0YXR1cyh0aGlzLnJ1bm5pbmcpO1xyXG4gIH1cclxuICBhbmltKGNhbGxiYWNrPyk6IHZvaWQge1xyXG4gICAgLy8g0L7RgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINC4INCy0YvQt9GL0LLQtdGCINCw0YDQs9GD0LzQtdC90YIgY2FsbGJhY2so0LTQu9GPINGC0LXRgdGC0L7QsiksINC60L7Qs9C00LAg0LzQsNGC0YDQuNGG0LAg0L/QtdGA0LXRgdGC0LDQtdGCINC80LXQvdGP0YLRjNGB0Y9cclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgbG9vcCA9IGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxmLnJ1bm5pbmcpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICAgIGNvbnN0IGZsYWc6IGJvb2xlYW4gPSBzZWxmLm1vZGVsLmNhbGN1bGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgICAgaWYgKGZsYWcpIHsgLy8g0L/QvtCy0YLQvtGA0LjQu9Cw0YHRjCDQu9C4INC80LDRgtGA0LjRhtCwID9cclxuICAgICAgICAgICAgc2VsZi5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCAvIHNlbGYuZnBzKTtcclxuICAgIH07XHJcbiAgICBsb29wKCk7XHJcbiAgfVxyXG4gIGhhbmRsZUNlbGwoeyB0YXJnZXQgfSk6IHZvaWQge1xyXG4gICAgY29uc3QgY2VsbDogbnVtYmVyID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIGNvbnN0IHJvdzogbnVtYmVyID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuc2VjdGlvblJvd0luZGV4O1xyXG4gICAgdGhpcy5tb2RlbC50b2dnbGVDZWxsKHJvdywgY2VsbCk7XHJcbiAgfVxyXG4gIGhhbmRsZXJCdXR0b25zKHsgdGFyZ2V0IH0pOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmlubmVySFRNTCkge1xyXG4gICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKHRydWUpO1xyXG4gICAgICAgIHRoaXMuYW5pbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXVzZSc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMubW9kZWwuY2xlYXJNYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVyU2xpZGVycyh7IHRhcmdldCB9KTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gdGFyZ2V0LnZhbHVlQXNOdW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGNhc2UgJ3NwZWVkJzpcclxuICAgICAgICB0aGlzLmZwcyA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnJlc2l6ZU1hdHJpeCh0aGlzLm1vZGVsLnJvd3MsIHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVzaXplTWF0cml4KHZhbHVlLCB0aGlzLm1vZGVsLmNvbHVtbnMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMiLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvRXZlbnQnO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG4gIG1hdHJpeDogQXJyYXk8b2JqZWN0PjtcclxuICByb3dzOiBudW1iZXI7XHJcbiAgY29sdW1uczogbnVtYmVyO1xyXG4gIGxpc3RPbGRNYXRyaXg6IEFycmF5PG9iamVjdD47XHJcbiAgbWF0cml4Q2hhbmdlZDogRXZlbnQ7XHJcbiAgY29uc3RydWN0b3Iocm93czogbnVtYmVyID0gMTAsIGNvbHVtbnM6IG51bWJlciA9IDEwKSB7XHJcbiAgICB0aGlzLmluaXRNYXRyaXgocm93cywgY29sdW1ucyk7XHJcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuICAgIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xyXG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkID0gbmV3IEV2ZW50KHRoaXMpO1xyXG4gIH1cclxuICBpbml0TWF0cml4KHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hdHJpeCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICs9IDEpIHtcclxuICAgICAgbGV0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGogKz0gMSkge1xyXG4gICAgICAgIHJvdy5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc2l6ZU1hdHJpeChyb3dzOiBudW1iZXIsIGNvbHVtbnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TWF0cml4KHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICB0aGlzLmxpc3RPbGRNYXRyaXggPSBbXTtcclxuICAgIHRoaXMubWF0cml4Q2hhbmdlZC5ub3RpZnkoeyBtYXRyaXg6IHRoaXMubWF0cml4LCByZXNpemVkOiB0cnVlIH0pO1xyXG4gIH1cclxuICBjbGVhck1hdHJpeCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE1hdHJpeCh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XHJcbiAgICB0aGlzLmxpc3RPbGRNYXRyaXggPSBbXTtcclxuICAgIHRoaXMubWF0cml4Q2hhbmdlZC5ub3RpZnkoeyBtYXRyaXg6IHRoaXMubWF0cml4IH0pO1xyXG4gIH1cclxuICBjYWxjdWxhdGVNYXRyaXgoKTogYm9vbGVhbiB7XHJcbiAgICAvLyDQvtCx0YXQvtC0INCy0YHQtdGFINGP0YfQtdC10Log0YEg0LfQsNC/0LjRgdGM0Y4g0L3QvtCy0L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gICAgY29uc3QgbmV3TWF0cml4OiBBcnJheTxvYmplY3Q+ID0gdGhpcy5tYXRyaXgubWFwKChyb3c6IEFycmF5PG9iamVjdD4sIGk6IG51bWJlcikgPT5cclxuICAgICAgcm93Lm1hcCgoY2VsbDogQXJyYXk8Ym9vbGVhbj4sIGo6IG51bWJlcikgPT4gdGhpcy5jYWxjdWxhdGVDZWxsKGksIGopKSk7XHJcbiAgICBjb25zdCBmbGFnOiBib29sZWFuID0gdGhpcy5pc1JlcGVhdE1hdHJpeChuZXdNYXRyaXgpO1xyXG4gICAgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXg7XHJcbiAgICB0aGlzLm1hdHJpeENoYW5nZWQubm90aWZ5KHsgbWF0cml4OiB0aGlzLm1hdHJpeCB9KTtcclxuICAgIHJldHVybiBmbGFnOy8vINC/0L7QstGC0L7RgNC40LvQsNGB0Ywg0LzQsNGC0YDQuNGG0LA/XHJcbiAgfVxyXG4gIGlzUmVwZWF0TWF0cml4KG5ld01hdHJpeCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZmxhZzogYm9vbGVhbiA9IHRoaXMubGlzdE9sZE1hdHJpeC5zb21lKChtYXRyaXg6IEFycmF5PG9iamVjdD4pID0+XHJcbiAgICAgIG1hdHJpeC5ldmVyeSgocm93OiBBcnJheTxvYmplY3Q+LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgcm93LmV2ZXJ5KChjZWxsOiBBcnJheTxib29sZWFuPiwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgKGNlbGwgPT09IG5ld01hdHJpeFtpXVtqXSkpKSk7XHJcbiAgICBpZiAoZmxhZykgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XHJcbiAgICBlbHNlIHRoaXMubGlzdE9sZE1hdHJpeC5wdXNoKG5ld01hdHJpeCk7XHJcbiAgICByZXR1cm4gZmxhZztcclxuICB9XHJcbiAgY2FsY3VsYXRlQ2VsbChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIC8vINGB0L7RgdC10LTQuCDQt9CwINC/0YDQtdC00LXQu9Cw0LzQuCDQv9C+0LvRjyDRgdGH0LjRgtCw0Y7RgtGB0Y8g0LzQtdGA0YLQstGL0LzQuFxyXG4gICAgbGV0IGNvdW50OiBudW1iZXIgPSAwOy8vINC20LjQstGL0LUg0YHQvtGB0LXQtNC4XHJcbiAgICBsZXQgbmV3Q2VsbDogYm9vbGVhbiA9IHRoaXMubWF0cml4W3Jvd11bY29sdW1uXTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbcm93IC0gMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyAtIDFdW2NvbHVtbiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbcm93IC0gMV1bY29sdW1uXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyAtIDFdW2NvbHVtbiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgaWYgKHRoaXMubWF0cml4W3Jvd11bY29sdW1uICsgMV0pIGNvdW50ICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W3JvdyArIDFdKSB7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgKyAxXVtjb2x1bW4gLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W3JvdyArIDFdW2NvbHVtbl0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3cgKyAxXVtjb2x1bW4gKyAxXSkgY291bnQgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnQgPCAyIHx8IGNvdW50ID4gMykgbmV3Q2VsbCA9IGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoY291bnQgPT09IDMpIG5ld0NlbGwgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG5ld0NlbGw7XHJcbiAgfVxyXG4gIHRvZ2dsZUNlbGwocm93OiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl0gPSAhdGhpcy5tYXRyaXhbcm93XVtjb2x1bW5dO1xyXG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL212Yy9tb2RlbC9Nb2RlbC50cyIsImltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9FdmVudCc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICB0YWJsZTogYW55O1xyXG4gIGNvbnRyb2xzOiBhbnk7XHJcbiAgYnV0dG9uczogYW55O1xyXG4gIHN0YXR1czogYW55O1xyXG4gIHRhYmxlQ2xpY2tlZDogRXZlbnQ7XHJcbiAgYnV0dG9uQ2xpY2tlZDogRXZlbnQ7XHJcbiAgc2xpZGVyQ2hhbmdlZDogRXZlbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRET01FbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gIH1cclxuICBpbml0RE9NRWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmNvbnRyb2xzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbiAgfVxyXG4gIGluaXRFdmVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYmxlQ2xpY2tlZCA9IG5ldyBFdmVudCh0aGlzKTtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudCh0aGlzKTtcclxuICAgIHRoaXMuc2xpZGVyQ2hhbmdlZCA9IG5ldyBFdmVudCh0aGlzKTtcclxuICB9XHJcbiAgaW5pdEhhbmRsZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJsZS5vbmNsaWNrID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ1REJykge1xyXG4gICAgICAgIHRoaXMudGFibGVDbGlja2VkLm5vdGlmeShldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnRyb2xzLm9uY2xpY2sgPSAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZC5ub3RpZnkoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNoYW5nZSA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgICAgICB0aGlzLnNsaWRlckNoYW5nZWQubm90aWZ5KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgc2V0QnV0dG9ucyhydW5uaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYnV0dG9ucykgcmV0dXJuO1xyXG4gICAgLy8gZm9yRWFjaCDQtNC70Y8g0LrQvtC70LvQtdC60YbQuNC4INCyINCx0YDQsNGD0LfQtdGA0LUg0YDQsNCx0L7RgtCw0LXRgiwg0LAg0LIg0YLQtdGB0YLQsNGFINC90LXRgi4g0L/QviDQtNC+0LrQsNC8INC10LPQviDQsdGL0YLRjCDQvdC1INC00L7Qu9C20L3QvlxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmJ1dHRvbnMsIChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdzdGFydCcpIHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBydW5uaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAncGF1c2UnKSB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gIXJ1bm5pbmc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRTdGF0dXMocnVubmluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnN0YXR1cykgcmV0dXJuO1xyXG4gICAgaWYgKHJ1bm5pbmcpIHRoaXMuc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXR1c19zdG9wcGVkJyk7XHJcbiAgICBlbHNlIHRoaXMuc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3N0YXR1c19zdG9wcGVkJyk7XHJcbiAgfVxyXG4gIGdldE5ld1Rib2R5KG1hdHJpeDogYW55LCB0YWJsZVdpZHRoOiBudW1iZXIpIHtcclxuICAgIC8vINC30LDQv9C+0LvQvdC10L3QuNC1INGC0LXQu9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCBjb2x1bW5zID0gbWF0cml4WzBdLmxlbmd0aDtcclxuICAgIGNvbnN0IHNpemUgPSB0YWJsZVdpZHRoIC8gY29sdW1ucztcclxuICAgIGxldCB0Ym9keTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgbGV0IHRyOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZDogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICB0aGlzLnNldFRkQ2xhc3ModGQsIGNlbGwpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGJvZHk7XHJcbiAgfVxyXG4gIGluaXRUYWJsZShtYXRyaXg6IEFycmF5PG9iamVjdD4pOiB2b2lkIHtcclxuICAgIC8vINC00LvRjyAg0YHQvtC30LTQsNC90LjRjyDQuCDRgNC10YHQsNC50LfQsCDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyB0YWJsZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHRib2R5ID0gdGhpcy5nZXROZXdUYm9keShtYXRyaXgsIHRhYmxlLmNsaWVudFdpZHRoKTtcclxuICAgIGlmICh0YWJsZS5jaGlsZHJlbi5sZW5ndGgpIHRhYmxlLnJlcGxhY2VDaGlsZCh0Ym9keSwgdGFibGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgZWxzZSB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgfVxyXG4gIGNoYW5nZVRhYmxlKG1hdHJpeDogQXJyYXk8b2JqZWN0Pik6IHZvaWQge1xyXG4gICAgLy8g0LjQt9C80LXQvdC10L3QuNC1INC60LvQsNGB0YHQsCDRgyDRj9GH0LXQtdC6INGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0YWJsZS5jaGlsZHJlblswXTtcclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3c6IEFycmF5PGJvb2xlYW4+LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgcm93LmZvckVhY2goKGNlbGw6IGJvb2xlYW4sIGo6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VGRDbGFzcyh0Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSwgY2VsbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFRkQ2xhc3ModGQ6IGFueSwgZmxhZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGZsYWcpIHRkLmNsYXNzTmFtZSA9ICdsaXZlJztcclxuICAgIGVsc2UgdGQuY2xhc3NOYW1lID0gJyc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vbXZjL3ZpZXcvVmlldy50cyJdLCJzb3VyY2VSb290IjoiIn0=