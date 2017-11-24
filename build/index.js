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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(13);

__webpack_require__(14);

var _Controller = __webpack_require__(15);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = new _Controller2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var faviconsContext = __webpack_require__(3);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// slider
var sliderChange = function sliderChange(element) {
  var value = element.value;

  var width = element.parentElement.clientWidth - 20;
  var min = element.attributes.min.value;
  var max = element.attributes.max.value;
  element.previousElementSibling.innerText = value;
  element.previousElementSibling.style.left = width / (max - min) * (value - min) - 8.75 + 'px';
};

var sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  var elements = document.querySelectorAll('.js-slider__input');
  for (var i = 0; i < elements.length; i += 1) {
    sliderChange(elements[i]);
    elements[i].oninput = sliderInput;
  }
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ripple effect
var buttonClick = function buttonClick(event) {
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY - 25 + 'px';
  div.style.left = event.pageX - 25 + 'px';

  document.body.appendChild(div);
  setTimeout(function () {
    document.body.removeChild(div);
  }, 550);
};

(function initButtons() {
  var elements = document.querySelectorAll('.standart-button');
  for (var i = 0; i < elements.length; i += 1) {
    elements[i].onclick = buttonClick;
  }
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Board = __webpack_require__(16);

var _Board2 = _interopRequireDefault(_Board);

var _Painter = __webpack_require__(17);

var _Painter2 = _interopRequireDefault(_Painter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.running = false;
    this.table = document.getElementById('board');
    this.controls = document.getElementById('controls');
    this.board = new _Board2.default(10, 10);
    this.painter = new _Painter2.default(this.board, this.table);
    this.fps = 1;
    this.painter.newTable(); // начальная отрисовка
    this.buttonsDisable();
    this.table.onclick = this.tableSetCell.bind(this);
    this.controls.onclick = this.buttunsOnclick.bind(this);
    this.controls.onchange = this.slidersChange.bind(this);
  }

  _createClass(Controller, [{
    key: 'buttonsDisable',
    value: function buttonsDisable() {
      var buttons = document.getElementsByTagName('BUTTON');
      if (buttons === undefined) {
        console.log('buttuns not found');
        return;
      }
      // console.log(buttons);
      for (var i = 0; i < buttons.length; i += 1) {
        var button = buttons[i];
        if (button.innerHTML === 'start') {
          if (this.running) button.disabled = true;else button.disabled = false;
        }
        if (button.innerHTML === 'pause') {
          if (this.running) button.disabled = false;else button.disabled = true;
        }
      }
    }
  }, {
    key: 'tableSetCell',
    value: function tableSetCell(event) {
      // console.log(event.target);
      var target = event.target;

      if (target.tagName !== 'TD') return;
      var j = target.cellIndex;
      var i = target.parentElement.sectionRowIndex;
      target.classList.toggle('live');
      this.board.setCell(i, j);
    }
  }, {
    key: 'anim',
    value: function anim(callback) {
      // останавливается и вызывет аргумент, когда матрица перестает меняться
      // console.log('anim started');
      var oldMatrix = void 0;
      function loop() {
        var _this = this;

        var fps = this.fps;

        setTimeout(function () {
          if (_this.running) {
            requestAnimationFrame(loop.bind(_this)); // не блокирует поток!
            _this.board.worker();
            _this.painter.repainter();
            // если матрица не меняется, ссылка остаетя актуальной
            if (oldMatrix === _this.board.matrix) {
              _this.running = false;
              _this.buttonsDisable();
            } else oldMatrix = _this.board.matrix;
          } else if (callback) {
            // console.log('anim stopped');
            callback();
          }
        }, 1000 / fps);
      }
      loop.call(this);
    }
  }, {
    key: 'buttunsOnclick',
    value: function buttunsOnclick(event) {
      var target = event.target;

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
  }, {
    key: 'slidersChange',
    value: function slidersChange(event) {
      var target = event.target;

      if (target.tagName !== 'INPUT') return;
      var value = target.valueAsNumber;
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
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, Board);

    // матрица m на n заполненная false
    this.matrix = [];
    this.m = m; // строки
    this.n = n; // столбцы
    for (var i = 0; i < m; i += 1) {
      var line = [];
      for (var j = 0; j < n; j += 1) {
        line.push(false);
      }

      this.matrix.push(line);
    }
  }

  _createClass(Board, [{
    key: "resize",
    value: function resize(m, n) {
      var matrix = this.matrix;

      var o = matrix.length;
      var p = matrix[0].length;

      // console.log('resize',o,p,' to ',m,n);
      // убираем столбцы
      if (p > n) {
        for (var i = 0; i < o; i += 1) {
          matrix[i].splice(n - 1, p - n); // изменить length?
        }
      }

      // добавляем столбцы
      if (p < n) {
        for (var _i = 0; _i < o; _i += 1) {
          for (var j = p; j < n; j += 1) {
            matrix[_i].push(false);
          }
        }
      }

      // убираем строки
      if (o > m) matrix.splice(m - 1, o - m); // изменить length?

      // добавляем строки
      if (o < m) {
        var line = [];
        for (var _j = 0; _j < n; _j += 1) {
          line.push(false);
        }

        for (var _i2 = o; _i2 < m; _i2 += 1) {
          matrix.push(line.slice());
        }
      }

      this.m = m;
      this.n = n;
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var i = 0; i < this.m; i += 1) {
        for (var j = 0; j < this.n; j += 1) {
          this.matrix[i][j] = false;
        }
      }

      return this;
    }
  }, {
    key: "worker",
    value: function worker() {
      // обход всех ячеек с записью нового состояния
      var newMatrix = [];
      var flag = false; // изменмлась ли матрица?
      for (var i = 0; i < this.matrix.length; i += 1) {
        var newLine = [];
        for (var j = 0; j < this.matrix[0].length; j += 1) {
          var cell = this.cell(i, j);
          newLine.push(cell);
          if (cell !== this.matrix[i][j]) flag = true;
        }

        newMatrix.push(newLine);
      }

      if (flag) this.matrix = newMatrix;
      return this;
    }
  }, {
    key: "cell",
    value: function cell(i, j) {
      // вычисляет новое состояние клетки
      // соседи за пределами поля считаются мертвыми
      var count = 0; // живые соседи
      var newCell = this.matrix[i][j];

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

      if (count < 2 || count > 3) newCell = false;else if (count === 3) newCell = true;
      return newCell;
    }
  }, {
    key: "setCell",
    value: function setCell(i, j) {
      this.matrix[i][j] = !this.matrix[i][j];
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Painter = function () {
  function Painter(board, table) {
    _classCallCheck(this, Painter);

    // console.log('construct', table);
    this.table = table;
    this.board = board;
  }

  _createClass(Painter, [{
    key: 'painter',
    value: function painter(tableWidth) {
      // заполнение тела таблицы
      var matrix = this.board.matrix;

      var m = matrix.length;
      var n = matrix[0].length;
      // console.log(m,n);
      var width = tableWidth / n;
      var height = width;

      var tbody = document.createElement('tbody');
      for (var i = 0; i < m; i += 1) {
        var tr = document.createElement('tr');
        for (var j = 0; j < n; j += 1) {
          var td = document.createElement('td');
          td.style.width = width + 'px';
          td.style.height = height + 'px';
          if (matrix[i][j]) td.className = 'live';
          tr.appendChild(td);
        }

        tbody.appendChild(tr);
      }

      return tbody;
    }
  }, {
    key: 'newTable',
    value: function newTable() {
      // для  создания и ресайза таблицы
      var table = this.table;

      var tbody = this.painter(table.clientWidth);
      if (table.children.length) table.replaceChild(tbody, table.children[0]);else table.appendChild(tbody);
    }
  }, {
    key: 'repainter',
    value: function repainter() {
      // изменение класса у ячеек таблицы
      var table = this.table;
      var matrix = this.board.matrix;

      var tbody = table.children[0];
      var m = matrix.length;
      var n = matrix[0].length;
      // console.log(m,n);

      for (var i = 0; i < m; i += 1) {
        for (var j = 0; j < n; j += 1) {
          var td = tbody.children[i].children[j];
          if (matrix[i][j]) td.className = 'live';else td.className = '';
        }
      }
    }
  }]);

  return Painter;
}();

exports.default = Painter;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOThmMjg3MDY4N2I3OTIzNzY3N2YiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zbGlkZXJzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZGVsL0JvYXJkLmpzIiwid2VicGFjazovLy8uL3ZpZXcvUGFpbnRlci5qcyJdLCJuYW1lcyI6WyJjb250cm9sbGVyIiwiZmF2aWNvbnNDb250ZXh0Iiwia2V5cyIsImZvckVhY2giLCJzbGlkZXJDaGFuZ2UiLCJlbGVtZW50IiwidmFsdWUiLCJ3aWR0aCIsInBhcmVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIm1pbiIsImF0dHJpYnV0ZXMiLCJtYXgiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJsZWZ0Iiwic2xpZGVySW5wdXQiLCJldmVudCIsInRhcmdldCIsImluaXRTbGlkZXJzIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwib25pbnB1dCIsImJ1dHRvbkNsaWNrIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlkIiwidG9wIiwicGFnZVkiLCJwYWdlWCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsImluaXRCdXR0b25zIiwib25jbGljayIsIkNvbnRyb2xsZXIiLCJydW5uaW5nIiwidGFibGUiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRyb2xzIiwiYm9hcmQiLCJwYWludGVyIiwiZnBzIiwibmV3VGFibGUiLCJidXR0b25zRGlzYWJsZSIsInRhYmxlU2V0Q2VsbCIsImJpbmQiLCJidXR0dW5zT25jbGljayIsIm9uY2hhbmdlIiwic2xpZGVyc0NoYW5nZSIsImJ1dHRvbnMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJpbm5lckhUTUwiLCJkaXNhYmxlZCIsInRhZ05hbWUiLCJqIiwiY2VsbEluZGV4Iiwic2VjdGlvblJvd0luZGV4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2V0Q2VsbCIsImNhbGxiYWNrIiwib2xkTWF0cml4IiwibG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndvcmtlciIsInJlcGFpbnRlciIsIm1hdHJpeCIsImNhbGwiLCJhbmltIiwiY2xlYXIiLCJ2YWx1ZUFzTnVtYmVyIiwicmVzaXplIiwibSIsIm4iLCJCb2FyZCIsImxpbmUiLCJwdXNoIiwibyIsInAiLCJzcGxpY2UiLCJzbGljZSIsIm5ld01hdHJpeCIsImZsYWciLCJuZXdMaW5lIiwiY2VsbCIsImNvdW50IiwibmV3Q2VsbCIsIlBhaW50ZXIiLCJ0YWJsZVdpZHRoIiwiaGVpZ2h0IiwidGJvZHkiLCJ0ciIsInRkIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXBsYWNlQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsMEJBQW5CLEM7Ozs7OztBQ05BLHlDOzs7Ozs7Ozs7QUNBQSxJQUFNQyxrQkFBa0Isc0JBQXhCOztBQUVBQSxnQkFBZ0JDLElBQWhCLEdBQXVCQyxPQUF2QixDQUErQkYsZUFBL0IsRTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDekJBLDZFOzs7Ozs7QUNBQSx5RTs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLHNFOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLGtFOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsMEU7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBTUcsZUFB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QU9uRCxNQUFqQjtBQUNBLFVBQU0wRCxJQUFJUCxPQUFPLENBQVAsRUFBVW5ELE1BQXBCO0FBQ0E7O0FBRUEsV0FBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUkwRCxDQUFwQixFQUF1QjFELEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsYUFBSyxJQUFJd0MsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUIsQ0FBcEIsRUFBdUJuQixLQUFLLENBQTVCLEVBQStCO0FBQzdCLGNBQU1zQyxLQUFLRixNQUFNSSxRQUFOLENBQWVoRixDQUFmLEVBQWtCZ0YsUUFBbEIsQ0FBMkJ4QyxDQUEzQixDQUFYO0FBQ0EsY0FBSVksT0FBT3BELENBQVAsRUFBVXdDLENBQVYsQ0FBSixFQUFrQnNDLEdBQUdDLFNBQUgsR0FBZSxNQUFmLENBQWxCLEtBQ0tELEdBQUdDLFNBQUgsR0FBZSxFQUFmO0FBQ047QUFDRjtBQUNGOzs7Ozs7a0JBekRrQk4sTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4ZjI4NzA2ODdiNzkyMzc2NzdmIiwiaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xyXG5pbXBvcnQgJy4vZmF2aWNvbnMvZmF2aWNvbnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXJzL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBmYXZpY29uc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJyEhZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLicsIHRydWUsIC9cXC4oc3ZnfHBuZ3xpY298eG1sfGpzb24pJC8pO1xyXG5cclxuZmF2aWNvbnNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGZhdmljb25zQ29udGV4dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zhdmljb25zL2Zhdmljb25zLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiOiA0LFxuXHRcIi4vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjogNSxcblx0XCIuL2Jyb3dzZXJjb25maWcueG1sXCI6IDYsXG5cdFwiLi9mYXZpY29uLTE2eDE2LnBuZ1wiOiA3LFxuXHRcIi4vZmF2aWNvbi0zMngzMi5wbmdcIjogOCxcblx0XCIuL2Zhdmljb24uaWNvXCI6IDksXG5cdFwiLi9tYW5pZmVzdC5qc29uXCI6IDEwLFxuXHRcIi4vbXN0aWxlLTE1MHgxNTAucG5nXCI6IDExLFxuXHRcIi4vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI6IDEyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zICEuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0gXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSRcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi5pY29cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLmljb1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNsaWRlclxyXG5jb25zdCBzbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiBzbGlkZXJDaGFuZ2UoZWxlbWVudCkge1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGVsZW1lbnQ7XHJcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAyMDtcclxuICBjb25zdCBtaW4gPSBlbGVtZW50LmF0dHJpYnV0ZXMubWluLnZhbHVlO1xyXG4gIGNvbnN0IG1heCA9IGVsZW1lbnQuYXR0cmlidXRlcy5tYXgudmFsdWU7XHJcbiAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5sZWZ0ID0gKCgod2lkdGggLyAobWF4IC0gbWluKSkgKiAodmFsdWUgLSBtaW4pKSAtIDguNzUpICsgJ3B4JztcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlcklucHV0ID0gZnVuY3Rpb24gc2xpZGVySW5wdXQoZXZlbnQpIHtcclxuICBzbGlkZXJDaGFuZ2UoZXZlbnQudGFyZ2V0KTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zbGlkZXJfX2lucHV0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgc2xpZGVyQ2hhbmdlKGVsZW1lbnRzW2ldKTtcclxuICAgIGVsZW1lbnRzW2ldLm9uaW5wdXQgPSBzbGlkZXJJbnB1dDtcclxuICB9XHJcbn0oKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2xpZGVycy9zbGlkZXIuanMiLCIvLyByaXBwbGUgZWZmZWN0XHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gYnV0dG9uQ2xpY2soZXZlbnQpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuaWQgPSAncmlwcGxlJztcclxuICBkaXYuc3R5bGUudG9wID0gZXZlbnQucGFnZVkgLSAyNSArICdweCc7XHJcbiAgZGl2LnN0eWxlLmxlZnQgPSBldmVudC5wYWdlWCAtIDI1ICsgJ3B4JztcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4geyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7IH0sIDU1MCk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gaW5pdEJ1dHRvbnMoKSB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhbmRhcnQtYnV0dG9uJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZWxlbWVudHNbaV0ub25jbGljayA9IGJ1dHRvbkNsaWNrO1xyXG4gIH1cclxufSgpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uLmpzIiwiXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9tb2RlbC9Cb2FyZCc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3ZpZXcvUGFpbnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgxMCwgMTApO1xyXG4gICAgdGhpcy5wYWludGVyID0gbmV3IFBhaW50ZXIodGhpcy5ib2FyZCwgdGhpcy50YWJsZSk7XHJcbiAgICB0aGlzLmZwcyA9IDE7XHJcbiAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTsvLyDQvdCw0YfQsNC70YzQvdCw0Y8g0L7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICB0aGlzLnRhYmxlLm9uY2xpY2sgPSB0aGlzLnRhYmxlU2V0Q2VsbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNsaWNrID0gdGhpcy5idXR0dW5zT25jbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNoYW5nZSA9IHRoaXMuc2xpZGVyc0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBidXR0b25zRGlzYWJsZSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQlVUVE9OJyk7XHJcbiAgICBpZiAoYnV0dG9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdidXR0dW5zIG5vdCBmb3VuZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhidXR0b25zKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldO1xyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3BhdXNlJykge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0YWJsZVNldENlbGwoZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdURCcpIHJldHVybjtcclxuICAgIGNvbnN0IGogPSB0YXJnZXQuY2VsbEluZGV4O1xyXG4gICAgY29uc3QgaSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnNlY3Rpb25Sb3dJbmRleDtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdsaXZlJyk7XHJcbiAgICB0aGlzLmJvYXJkLnNldENlbGwoaSwgaik7XHJcbiAgfVxyXG4gIGFuaW0oY2FsbGJhY2spIHtcclxuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPXHJcbiAgICAvLyBjb25zb2xlLmxvZygnYW5pbSBzdGFydGVkJyk7XHJcbiAgICBsZXQgb2xkTWF0cml4O1xyXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgY29uc3QgeyBmcHMgfSA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wLmJpbmQodGhpcykpOy8vINC90LUg0LHQu9C+0LrQuNGA0YPQtdGCINC/0L7RgtC+0LohXHJcbiAgICAgICAgICB0aGlzLmJvYXJkLndvcmtlcigpO1xyXG4gICAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0LzQsNGC0YDQuNGG0LAg0L3QtSDQvNC10L3Rj9C10YLRgdGPLCDRgdGB0YvQu9C60LAg0L7RgdGC0LDQtdGC0Y8g0LDQutGC0YPQsNC70YzQvdC+0LlcclxuICAgICAgICAgIGlmIChvbGRNYXRyaXggPT09IHRoaXMuYm9hcmQubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgICB9IGVsc2Ugb2xkTWF0cml4ID0gdGhpcy5ib2FyZC5tYXRyaXg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FuaW0gc3RvcHBlZCcpO1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDAgLyBmcHMpO1xyXG4gICAgfVxyXG4gICAgbG9vcC5jYWxsKHRoaXMpO1xyXG4gIH1cclxuICBidXR0dW5zT25jbGljayhldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0YXJnZXQuaW5uZXJIVE1MKSB7XHJcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmFuaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGF1c2UnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzbGlkZXJzQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcpIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlQXNOdW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGNhc2UgJ3NwZWVkJzpcclxuICAgICAgICB0aGlzLmZwcyA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzaXplKHRoaXMuYm9hcmQubSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGFpbnRlci5uZXdUYWJsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoZWlnaHQnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2l6ZSh2YWx1ZSwgdGhpcy5ib2FyZC5uKTtcclxuICAgICAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udHJvbGxlci9Db250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKG0gPSAxMCwgbiA9IDEwKSB7XHJcbiAgICAvLyDQvNCw0YLRgNC40YbQsCBtINC90LAgbiDQt9Cw0L/QvtC70L3QtdC90L3QsNGPIGZhbHNlXHJcbiAgICB0aGlzLm1hdHJpeCA9IFtdO1xyXG4gICAgdGhpcy5tID0gbTsvLyDRgdGC0YDQvtC60LhcclxuICAgIHRoaXMubiA9IG47Ly8g0YHRgtC+0LvQsdGG0YtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBsaW5lLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1hdHJpeC5wdXNoKGxpbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXNpemUobSwgbikge1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXM7XHJcbiAgICBjb25zdCBvID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IHAgPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUnLG8scCwnIHRvICcsbSxuKTtcclxuICAgIC8vINGD0LHQuNGA0LDQtdC8INGB0YLQvtC70LHRhtGLXHJcbiAgICBpZiAocCA+IG4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvOyBpICs9IDEpIHtcclxuICAgICAgICBtYXRyaXhbaV0uc3BsaWNlKG4gLSAxLCBwIC0gbik7Ly8g0LjQt9C80LXQvdC40YLRjCBsZW5ndGg/XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHRgtC+0LvQsdGG0YtcclxuICAgIGlmIChwIDwgbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG87IGkgKz0gMSkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgICBtYXRyaXhbaV0ucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0YPQsdC40YDQsNC10Lwg0YHRgtGA0L7QutC4XHJcbiAgICBpZiAobyA+IG0pIG1hdHJpeC5zcGxpY2UobSAtIDEsIG8gLSBtKTsvLyDQuNC30LzQtdC90LjRgtGMIGxlbmd0aD9cclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHRgtGA0L7QutC4XHJcbiAgICBpZiAobyA8IG0pIHtcclxuICAgICAgY29uc3QgbGluZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgIGxpbmUucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSBvOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgICAgbWF0cml4LnB1c2gobGluZS5zbGljZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubSA9IG07XHJcbiAgICB0aGlzLm4gPSBuO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNsZWFyKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm07IGkgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubjsgaiArPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB3b3JrZXIoKSB7XHJcbiAgICAvLyDQvtCx0YXQvtC0INCy0YHQtdGFINGP0YfQtdC10Log0YEg0LfQsNC/0LjRgdGM0Y4g0L3QvtCy0L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gICAgY29uc3QgbmV3TWF0cml4ID0gW107XHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlOy8vINC40LfQvNC10L3QvNC70LDRgdGMINC70Lgg0LzQsNGC0YDQuNGG0LA/XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG5ld0xpbmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hdHJpeFswXS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmNlbGwoaSwgaik7XHJcbiAgICAgICAgbmV3TGluZS5wdXNoKGNlbGwpO1xyXG4gICAgICAgIGlmIChjZWxsICE9PSB0aGlzLm1hdHJpeFtpXVtqXSkgZmxhZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld01hdHJpeC5wdXNoKG5ld0xpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmbGFnKSB0aGlzLm1hdHJpeCA9IG5ld01hdHJpeDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjZWxsKGksIGopIHtcclxuICAgIC8vINCy0YvRh9C40YHQu9GP0LXRgiDQvdC+0LLQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQutC70LXRgtC60LhcclxuICAgIC8vINGB0L7RgdC10LTQuCDQt9CwINC/0YDQtdC00LXQu9Cw0LzQuCDQv9C+0LvRjyDRgdGH0LjRgtCw0Y7RgtGB0Y8g0LzQtdGA0YLQstGL0LzQuFxyXG4gICAgbGV0IGNvdW50ID0gMDsvLyDQttC40LLRi9C1INGB0L7RgdC10LTQuFxyXG4gICAgbGV0IG5ld0NlbGwgPSB0aGlzLm1hdHJpeFtpXVtqXTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbaSAtIDFdKSB7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV1baiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSAtIDFdW2pdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSAtIDFdW2ogKyAxXSkgY291bnQgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbaV1baiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgaWYgKHRoaXMubWF0cml4W2ldW2ogKyAxXSkgY291bnQgKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXRyaXhbaSArIDFdKSB7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV1baiAtIDFdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSArIDFdW2pdKSBjb3VudCArPSAxO1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSArIDFdW2ogKyAxXSkgY291bnQgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnQgPCAyIHx8IGNvdW50ID4gMykgbmV3Q2VsbCA9IGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoY291bnQgPT09IDMpIG5ld0NlbGwgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG5ld0NlbGw7XHJcbiAgfVxyXG4gIHNldENlbGwoaSwgaikge1xyXG4gICAgdGhpcy5tYXRyaXhbaV1bal0gPSAhdGhpcy5tYXRyaXhbaV1bal07XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZGVsL0JvYXJkLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmQsIHRhYmxlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY29uc3RydWN0JywgdGFibGUpO1xyXG4gICAgdGhpcy50YWJsZSA9IHRhYmxlO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgcGFpbnRlcih0YWJsZVdpZHRoKSB7XHJcbiAgICAvLyDQt9Cw0L/QvtC70L3QtdC90LjQtSDRgtC10LvQsCDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuYm9hcmQ7XHJcbiAgICBjb25zdCBtID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG4gPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgLy8gY29uc29sZS5sb2cobSxuKTtcclxuICAgIGNvbnN0IHdpZHRoID0gdGFibGVXaWR0aCAvIG47XHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aWR0aDtcclxuXHJcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkgdGQuY2xhc3NOYW1lID0gJ2xpdmUnO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0Ym9keTtcclxuICB9XHJcblxyXG4gIG5ld1RhYmxlKCkge1xyXG4gICAgLy8g0LTQu9GPICDRgdC+0LfQtNCw0L3QuNGPINC4INGA0LXRgdCw0LnQt9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnBhaW50ZXIodGFibGUuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuLmxlbmd0aCkgdGFibGUucmVwbGFjZUNoaWxkKHRib2R5LCB0YWJsZS5jaGlsZHJlblswXSk7XHJcbiAgICBlbHNlIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICB9XHJcblxyXG4gIHJlcGFpbnRlcigpIHtcclxuICAgIC8vINC40LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0LAg0YMg0Y/Rh9C10LXQuiDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyB0YWJsZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLmJvYXJkO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0YWJsZS5jaGlsZHJlblswXTtcclxuICAgIGNvbnN0IG0gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtLG4pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSB0Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICBpZiAobWF0cml4W2ldW2pdKSB0ZC5jbGFzc05hbWUgPSAnbGl2ZSc7XHJcbiAgICAgICAgZWxzZSB0ZC5jbGFzc05hbWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92aWV3L1BhaW50ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9