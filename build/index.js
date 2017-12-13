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
  elements.forEach(function (element) {
    sliderChange(element);
    element.oninput = sliderInput;
  });
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ripple effect
var rippleEffect = function rippleEffect(event) {
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
  elements.forEach(function (element) {
    element.onclick = rippleEffect;
  });
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
    this.painter = new _Painter2.default(this.board, this.table, this.controls);
    this.fps = 1;
    this.cellToggle = this.cellToggle.bind(this);
    this.setRunning = this.setRunning.bind(this);
    this.resizeBoard = this.resizeBoard.bind(this);
    this.painter.newTable(); // начальная отрисовка
    this.buttonsToggle();
    this.table.onclick = this.cellToggle;
    this.controls.onclick = this.setRunning;
    this.controls.onchange = this.resizeBoard;
  }

  _createClass(Controller, [{
    key: 'buttonsToggle',
    value: function buttonsToggle() {
      this.painter.statusToggle(this.running);
    }
  }, {
    key: 'cellToggle',
    value: function cellToggle(_ref) {
      var target = _ref.target;

      if (target.tagName !== 'TD') return;
      var j = target.cellIndex;
      var i = target.parentElement.sectionRowIndex;
      this.painter.tableCellToggle(target);
      this.board.setCell(i, j);
    }
  }, {
    key: 'anim',
    value: function anim(callback) {
      // останавливается и вызывет аргумент, когда матрица перестает меняться(для тестов)
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
              _this.buttonsToggle();
            } else oldMatrix = _this.board.matrix;
          } else if (callback) {
            callback();
          }
        }, 1000 / fps);
      }
      loop.call(this);
    }
  }, {
    key: 'setRunning',
    value: function setRunning(_ref2) {
      var target = _ref2.target;

      if (target.tagName !== 'BUTTON') return;
      switch (target.innerHTML) {
        case 'start':
          this.running = true;
          this.buttonsToggle();
          this.anim();
          break;
        case 'pause':
          this.running = false;
          this.buttonsToggle();
          break;
        case 'clear':
          this.board.clear();
          this.running = false;
          this.buttonsToggle();
          this.painter.repainter();
      }
    }
  }, {
    key: 'resizeBoard',
    value: function resizeBoard(_ref3) {
      var target = _ref3.target;

      if (target.tagName !== 'INPUT') return;
      var value = target.valueAsNumber;
      switch (target.parentElement.previousElementSibling.innerText) {
        case 'speed':
          this.fps = value;
          break;
        case 'width':
          this.running = false;
          this.buttonsToggle();
          this.board.resize(this.board.m, value);
          this.painter.newTable();
          break;
        case 'height':
          this.running = false;
          this.buttonsToggle();
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
  function Painter(board, table, controls) {
    _classCallCheck(this, Painter);

    this.board = board;
    this.table = table || document.getElementById('board');
    this.controls = controls || document.getElementById('controls');
    this.buttons = this.controls.getElementsByTagName('BUTTON');
  }

  _createClass(Painter, [{
    key: 'statusToggle',
    value: function statusToggle(running) {
      if (!this.buttons) return;
      for (var i = 0; i < this.buttons.length; i += 1) {
        var button = this.buttons[i];
        if (button.innerHTML === 'start') {
          if (running) button.disabled = true;else button.disabled = false;
        }
        if (button.innerHTML === 'pause') {
          if (running) button.disabled = false;else button.disabled = true;
        }
      }
      var status = this.controls.getElementsByClassName('status')[0];
      if (!status) return;
      if (running) status.classList.remove('status_stopped');else status.classList.add('status_stopped');
    }
  }, {
    key: 'tableCellToggle',
    value: function tableCellToggle(target) {
      target.classList.toggle('live');
    }
  }, {
    key: 'painter',
    value: function painter(tableWidth) {
      // заполнение тела таблицы
      var matrix = this.board.matrix;

      var m = matrix.length;
      var n = matrix[0].length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTViZGUwYTJhZjI4MTVhYzUxYjYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RhbmRhcnQtYnV0dG9uL3N0YW5kYXJ0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9tdmMvY29udHJvbGxlci9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9tdmMvdmlldy9QYWludGVyLmpzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXIiLCJmYXZpY29uc0NvbnRleHQiLCJrZXlzIiwiZm9yRWFjaCIsInNsaWRlckNoYW5nZSIsImVsZW1lbnQiLCJ2YWx1ZSIsIndpZHRoIiwicGFyZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwibWluIiwiYXR0cmlidXRlcyIsIm1heCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJpbm5lclRleHQiLCJzdHlsZSIsImxlZnQiLCJzbGlkZXJJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwiaW5pdFNsaWRlcnMiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9uaW5wdXQiLCJyaXBwbGVFZmZlY3QiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0b3AiLCJwYWdlWSIsInBhZ2VYIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiaW5pdEJ1dHRvbnMiLCJvbmNsaWNrIiwiQ29udHJvbGxlciIsInJ1bm5pbmciLCJ0YWJsZSIsImdldEVsZW1lbnRCeUlkIiwiY29udHJvbHMiLCJib2FyZCIsInBhaW50ZXIiLCJmcHMiLCJjZWxsVG9nZ2xlIiwiYmluZCIsInNldFJ1bm5pbmciLCJyZXNpemVCb2FyZCIsIm5ld1RhYmxlIiwiYnV0dG9uc1RvZ2dsZSIsIm9uY2hhbmdlIiwic3RhdHVzVG9nZ2xlIiwidGFnTmFtZSIsImoiLCJjZWxsSW5kZXgiLCJpIiwic2VjdGlvblJvd0luZGV4IiwidGFibGVDZWxsVG9nZ2xlIiwic2V0Q2VsbCIsImNhbGxiYWNrIiwib2xkTWF0cml4IiwibG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndvcmtlciIsInJlcGFpbnRlciIsIm1hdHJpeCIsImNhbGwiLCJpbm5lckhUTUwiLCJhbmltIiwiY2xlYXIiLCJ2YWx1ZUFzTnVtYmVyIiwicmVzaXplIiwibSIsIm4iLCJCb2FyZCIsImxpbmUiLCJwdXNoIiwibyIsImxlbmd0aCIsInAiLCJzcGxpY2UiLCJzbGljZSIsIm5ld01hdHJpeCIsImZsYWciLCJuZXdMaW5lIiwiY2VsbCIsImNvdW50IiwibmV3Q2VsbCIsIlBhaW50ZXIiLCJidXR0b25zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJidXR0b24iLCJkaXNhYmxlZCIsInN0YXR1cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGUiLCJ0YWJsZVdpZHRoIiwiaGVpZ2h0IiwidGJvZHkiLCJ0ciIsInRkIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXBsYWNlQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsMEJBQW5CLEM7Ozs7OztBQ05BLHlDOzs7Ozs7Ozs7QUNBQSxJQUFNQyxrQkFBa0Isc0JBQXhCOztBQUVBQSxnQkFBZ0JDLElBQWhCLEdBQXVCQyxPQUF2QixDQUErQkYsZUFBL0IsRTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDekJBLDZFOzs7Ozs7QUNBQSx5RTs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLHNFOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLGtFOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsMEU7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBTUcsZUFBZSxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUFBLE1BQzFDQyxLQUQwQyxHQUNoQ0QsT0FEZ0MsQ0FDMUNDLEtBRDBDOztBQUVsRCxNQUFNQyxRQUFRRixRQUFRRyxhQUFSLENBQXNCQyxXQUF0QixHQUFvQyxFQUFsRDtBQUNBLE1BQU1DLE1BQU1MLFFBQVFNLFVBQVIsQ0FBbUJELEdBQW5CLENBQXVCSixLQUFuQztBQUNBLE1BQU1NLE1BQU1QLFFBQVFNLFVBQVIsQ0FBbUJDLEdBQW5CLENBQXVCTixLQUFuQztBQUNBRCxVQUFRUSxzQkFBUixDQUErQkMsU0FBL0IsR0FBMkNSLEtBQTNDO0FBQ0FELFVBQVFRLHNCQUFSLENBQStCRSxLQUEvQixDQUFxQ0MsSUFBckMsR0FBaURULFNBQVNLLE1BQU1GLEdBQWYsQ0FBRCxJQUF5QkosUUFBUUksR0FBakMsQ0FBRCxHQUEwQyxJQUF6RjtBQUNELENBUEQ7O0FBU0EsSUFBTU8sY0FBYyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUM5Q2QsZUFBYWMsTUFBTUMsTUFBbkI7QUFDRCxDQUZEOztBQUlDLFVBQVNDLFdBQVQsR0FBdUI7QUFDdEIsTUFBTUMsV0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWpCO0FBQ0FGLFdBQVNsQixPQUFULENBQWlCLFVBQUNFLE9BQUQsRUFBYTtBQUM1QkQsaUJBQWFDLE9BQWI7QUFDQUEsWUFBUW1CLE9BQVIsR0FBa0JQLFdBQWxCO0FBQ0QsR0FIRDtBQUlELENBTkEsR0FBRCxDOzs7Ozs7Ozs7QUNkQTtBQUNBLElBQU1RLGVBQWUsU0FBU0EsWUFBVCxDQUFzQlAsS0FBdEIsRUFBNkI7QUFDaEQsTUFBTVEsTUFBTUosU0FBU0ssYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELE1BQUlFLEVBQUosR0FBUyxRQUFUO0FBQ0FGLE1BQUlYLEtBQUosQ0FBVWMsR0FBVixHQUFtQlgsTUFBTVksS0FBTixHQUFjLEVBQWpDO0FBQ0FKLE1BQUlYLEtBQUosQ0FBVUMsSUFBVixHQUFvQkUsTUFBTWEsS0FBTixHQUFjLEVBQWxDOztBQUVBVCxXQUFTVSxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLEdBQTFCO0FBQ0FRLGFBQVcsWUFBTTtBQUFFWixhQUFTVSxJQUFULENBQWNHLFdBQWQsQ0FBMEJULEdBQTFCO0FBQWlDLEdBQXBELEVBQXNELEdBQXREO0FBQ0QsQ0FSRDs7QUFVQyxVQUFTVSxXQUFULEdBQXVCO0FBQ3RCLE1BQU1mLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixDQUFqQjtBQUNBRixXQUFTbEIsT0FBVCxDQUFpQixVQUFDRSxPQUFELEVBQWE7QUFDNUJBLFlBQVFnQyxPQUFSLEdBQWtCWixZQUFsQjtBQUNELEdBRkQ7QUFHRCxDQUxBLEdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJhLFU7QUFDbkIsd0JBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYWxCLFNBQVNtQixjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCcEIsU0FBU21CLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBaEI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsb0JBQVUsRUFBVixFQUFjLEVBQWQsQ0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxzQkFBWSxLQUFLRCxLQUFqQixFQUF3QixLQUFLSCxLQUE3QixFQUFvQyxLQUFLRSxRQUF6QyxDQUFmO0FBQ0EsU0FBS0csR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUFsQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLSCxPQUFMLENBQWFNLFFBQWIsR0FWWSxDQVVZO0FBQ3hCLFNBQUtDLGFBQUw7QUFDQSxTQUFLWCxLQUFMLENBQVdILE9BQVgsR0FBcUIsS0FBS1MsVUFBMUI7QUFDQSxTQUFLSixRQUFMLENBQWNMLE9BQWQsR0FBd0IsS0FBS1csVUFBN0I7QUFDQSxTQUFLTixRQUFMLENBQWNVLFFBQWQsR0FBeUIsS0FBS0gsV0FBOUI7QUFDRDs7OztvQ0FDZTtBQUNkLFdBQUtMLE9BQUwsQ0FBYVMsWUFBYixDQUEwQixLQUFLZCxPQUEvQjtBQUNEOzs7cUNBQ3NCO0FBQUEsVUFBVnBCLE1BQVUsUUFBVkEsTUFBVTs7QUFDckIsVUFBSUEsT0FBT21DLE9BQVAsS0FBbUIsSUFBdkIsRUFBNkI7QUFDN0IsVUFBTUMsSUFBSXBDLE9BQU9xQyxTQUFqQjtBQUNBLFVBQU1DLElBQUl0QyxPQUFPWCxhQUFQLENBQXFCa0QsZUFBL0I7QUFDQSxXQUFLZCxPQUFMLENBQWFlLGVBQWIsQ0FBNkJ4QyxNQUE3QjtBQUNBLFdBQUt3QixLQUFMLENBQVdpQixPQUFYLENBQW1CSCxDQUFuQixFQUFzQkYsQ0FBdEI7QUFDRDs7O3lCQUNJTSxRLEVBQVU7QUFDYjtBQUNBLFVBQUlDLGtCQUFKO0FBQ0EsZUFBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBLFlBQ05sQixHQURNLEdBQ0UsSUFERixDQUNOQSxHQURNOztBQUVkWCxtQkFBVyxZQUFNO0FBQ2YsY0FBSSxNQUFLSyxPQUFULEVBQWtCO0FBQ2hCeUIsa0NBQXNCRCxLQUFLaEIsSUFBTCxPQUF0QixFQURnQixDQUN1QjtBQUN2QyxrQkFBS0osS0FBTCxDQUFXc0IsTUFBWDtBQUNBLGtCQUFLckIsT0FBTCxDQUFhc0IsU0FBYjtBQUNBO0FBQ0EsZ0JBQUlKLGNBQWMsTUFBS25CLEtBQUwsQ0FBV3dCLE1BQTdCLEVBQXFDO0FBQ25DLG9CQUFLNUIsT0FBTCxHQUFlLEtBQWY7QUFDQSxvQkFBS1ksYUFBTDtBQUNELGFBSEQsTUFHT1csWUFBWSxNQUFLbkIsS0FBTCxDQUFXd0IsTUFBdkI7QUFDUixXQVRELE1BU08sSUFBSU4sUUFBSixFQUFjO0FBQ25CQTtBQUNEO0FBQ0YsU0FiRCxFQWFHLE9BQU9oQixHQWJWO0FBY0Q7QUFDRGtCLFdBQUtLLElBQUwsQ0FBVSxJQUFWO0FBQ0Q7OztzQ0FDc0I7QUFBQSxVQUFWakQsTUFBVSxTQUFWQSxNQUFVOztBQUNyQixVQUFJQSxPQUFPbUMsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUNqQyxjQUFRbkMsT0FBT2tELFNBQWY7QUFDRSxhQUFLLE9BQUw7QUFDRSxlQUFLOUIsT0FBTCxHQUFlLElBQWY7QUFDQSxlQUFLWSxhQUFMO0FBQ0EsZUFBS21CLElBQUw7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUsvQixPQUFMLEdBQWUsS0FBZjtBQUNBLGVBQUtZLGFBQUw7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUtSLEtBQUwsQ0FBVzRCLEtBQVg7QUFDQSxlQUFLaEMsT0FBTCxHQUFlLEtBQWY7QUFDQSxlQUFLWSxhQUFMO0FBQ0EsZUFBS1AsT0FBTCxDQUFhc0IsU0FBYjtBQWRKO0FBZ0JEOzs7dUNBQ3VCO0FBQUEsVUFBVi9DLE1BQVUsU0FBVkEsTUFBVTs7QUFDdEIsVUFBSUEsT0FBT21DLE9BQVAsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDaEMsVUFBTWhELFFBQVFhLE9BQU9xRCxhQUFyQjtBQUNBLGNBQVFyRCxPQUFPWCxhQUFQLENBQXFCSyxzQkFBckIsQ0FBNENDLFNBQXBEO0FBQ0UsYUFBSyxPQUFMO0FBQ0UsZUFBSytCLEdBQUwsR0FBV3ZDLEtBQVg7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUtpQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGVBQUtZLGFBQUw7QUFDQSxlQUFLUixLQUFMLENBQVc4QixNQUFYLENBQWtCLEtBQUs5QixLQUFMLENBQVcrQixDQUE3QixFQUFnQ3BFLEtBQWhDO0FBQ0EsZUFBS3NDLE9BQUwsQ0FBYU0sUUFBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0UsZUFBS1gsT0FBTCxHQUFlLEtBQWY7QUFDQSxlQUFLWSxhQUFMO0FBQ0EsZUFBS1IsS0FBTCxDQUFXOEIsTUFBWCxDQUFrQm5FLEtBQWxCLEVBQXlCLEtBQUtxQyxLQUFMLENBQVdnQyxDQUFwQztBQUNBLGVBQUsvQixPQUFMLENBQWFNLFFBQWI7QUFkSjtBQWdCRDs7Ozs7O2tCQXZGa0JaLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSkFzQyxLO0FBQ25CLG1CQUE0QjtBQUFBLFFBQWhCRixDQUFnQix1RUFBWixFQUFZO0FBQUEsUUFBUkMsQ0FBUSx1RUFBSixFQUFJOztBQUFBOztBQUMxQjtBQUNBLFNBQUtSLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS08sQ0FBTCxHQUFTQSxDQUFULENBSDBCLENBR2Y7QUFDWCxTQUFLQyxDQUFMLEdBQVNBLENBQVQsQ0FKMEIsQ0FJZjtBQUNYLFNBQUssSUFBSWxCLElBQUksQ0FBYixFQUFnQkEsSUFBSWlCLENBQXBCLEVBQXVCakIsS0FBSyxDQUE1QixFQUErQjtBQUM3QixVQUFNb0IsT0FBTyxFQUFiO0FBQ0EsV0FBSyxJQUFJdEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb0IsQ0FBcEIsRUFBdUJwQixLQUFLLENBQTVCLEVBQStCO0FBQzdCc0IsYUFBS0MsSUFBTCxDQUFVLEtBQVY7QUFDRDs7QUFFRCxXQUFLWCxNQUFMLENBQVlXLElBQVosQ0FBaUJELElBQWpCO0FBQ0Q7QUFDRjs7OzsyQkFDTUgsQyxFQUFHQyxDLEVBQUc7QUFBQSxVQUNIUixNQURHLEdBQ1EsSUFEUixDQUNIQSxNQURHOztBQUVYLFVBQU1ZLElBQUlaLE9BQU9hLE1BQWpCO0FBQ0EsVUFBTUMsSUFBSWQsT0FBTyxDQUFQLEVBQVVhLE1BQXBCOztBQUVBO0FBQ0E7QUFDQSxVQUFJQyxJQUFJTixDQUFSLEVBQVc7QUFDVCxhQUFLLElBQUlsQixJQUFJLENBQWIsRUFBZ0JBLElBQUlzQixDQUFwQixFQUF1QnRCLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0JVLGlCQUFPVixDQUFQLEVBQVV5QixNQUFWLENBQWlCUCxJQUFJLENBQXJCLEVBQXdCTSxJQUFJTixDQUE1QixFQUQ2QixDQUNFO0FBQ2hDO0FBQ0Y7O0FBRUQ7QUFDQSxVQUFJTSxJQUFJTixDQUFSLEVBQVc7QUFDVCxhQUFLLElBQUlsQixLQUFJLENBQWIsRUFBZ0JBLEtBQUlzQixDQUFwQixFQUF1QnRCLE1BQUssQ0FBNUIsRUFBK0I7QUFDN0IsZUFBSyxJQUFJRixJQUFJMEIsQ0FBYixFQUFnQjFCLElBQUlvQixDQUFwQixFQUF1QnBCLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0JZLG1CQUFPVixFQUFQLEVBQVVxQixJQUFWLENBQWUsS0FBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLFVBQUlDLElBQUlMLENBQVIsRUFBV1AsT0FBT2UsTUFBUCxDQUFjUixJQUFJLENBQWxCLEVBQXFCSyxJQUFJTCxDQUF6QixFQXZCQSxDQXVCNEI7O0FBRXZDO0FBQ0EsVUFBSUssSUFBSUwsQ0FBUixFQUFXO0FBQ1QsWUFBTUcsT0FBTyxFQUFiO0FBQ0EsYUFBSyxJQUFJdEIsS0FBSSxDQUFiLEVBQWdCQSxLQUFJb0IsQ0FBcEIsRUFBdUJwQixNQUFLLENBQTVCLEVBQStCO0FBQzdCc0IsZUFBS0MsSUFBTCxDQUFVLEtBQVY7QUFDRDs7QUFFRCxhQUFLLElBQUlyQixNQUFJc0IsQ0FBYixFQUFnQnRCLE1BQUlpQixDQUFwQixFQUF1QmpCLE9BQUssQ0FBNUIsRUFBK0I7QUFDN0JVLGlCQUFPVyxJQUFQLENBQVlELEtBQUtNLEtBQUwsRUFBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBS1QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFDTztBQUNOLFdBQUssSUFBSWxCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLaUIsQ0FBekIsRUFBNEJqQixLQUFLLENBQWpDLEVBQW9DO0FBQ2xDLGFBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtvQixDQUF6QixFQUE0QnBCLEtBQUssQ0FBakMsRUFBb0M7QUFDbEMsZUFBS1ksTUFBTCxDQUFZVixDQUFaLEVBQWVGLENBQWYsSUFBb0IsS0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7NkJBQ1E7QUFDUDtBQUNBLFVBQU02QixZQUFZLEVBQWxCO0FBQ0EsVUFBSUMsT0FBTyxLQUFYLENBSE8sQ0FHVTtBQUNqQixXQUFLLElBQUk1QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1UsTUFBTCxDQUFZYSxNQUFoQyxFQUF3Q3ZCLEtBQUssQ0FBN0MsRUFBZ0Q7QUFDOUMsWUFBTTZCLFVBQVUsRUFBaEI7QUFDQSxhQUFLLElBQUkvQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1ksTUFBTCxDQUFZLENBQVosRUFBZWEsTUFBbkMsRUFBMkN6QixLQUFLLENBQWhELEVBQW1EO0FBQ2pELGNBQU1nQyxPQUFPLEtBQUtBLElBQUwsQ0FBVTlCLENBQVYsRUFBYUYsQ0FBYixDQUFiO0FBQ0ErQixrQkFBUVIsSUFBUixDQUFhUyxJQUFiO0FBQ0EsY0FBSUEsU0FBUyxLQUFLcEIsTUFBTCxDQUFZVixDQUFaLEVBQWVGLENBQWYsQ0FBYixFQUFnQzhCLE9BQU8sSUFBUDtBQUNqQzs7QUFFREQsa0JBQVVOLElBQVYsQ0FBZVEsT0FBZjtBQUNEOztBQUVELFVBQUlELElBQUosRUFBVSxLQUFLbEIsTUFBTCxHQUFjaUIsU0FBZDtBQUNWLGFBQU8sSUFBUDtBQUNEOzs7eUJBQ0kzQixDLEVBQUdGLEMsRUFBRztBQUNUO0FBQ0E7QUFDQSxVQUFJaUMsUUFBUSxDQUFaLENBSFMsQ0FHSztBQUNkLFVBQUlDLFVBQVUsS0FBS3RCLE1BQUwsQ0FBWVYsQ0FBWixFQUFlRixDQUFmLENBQWQ7O0FBRUEsVUFBSSxLQUFLWSxNQUFMLENBQVlWLElBQUksQ0FBaEIsQ0FBSixFQUF3QjtBQUN0QixZQUFJLEtBQUtVLE1BQUwsQ0FBWVYsSUFBSSxDQUFoQixFQUFtQkYsSUFBSSxDQUF2QixDQUFKLEVBQStCaUMsU0FBUyxDQUFUO0FBQy9CLFlBQUksS0FBS3JCLE1BQUwsQ0FBWVYsSUFBSSxDQUFoQixFQUFtQkYsQ0FBbkIsQ0FBSixFQUEyQmlDLFNBQVMsQ0FBVDtBQUMzQixZQUFJLEtBQUtyQixNQUFMLENBQVlWLElBQUksQ0FBaEIsRUFBbUJGLElBQUksQ0FBdkIsQ0FBSixFQUErQmlDLFNBQVMsQ0FBVDtBQUNoQzs7QUFFRCxVQUFJLEtBQUtyQixNQUFMLENBQVlWLENBQVosRUFBZUYsSUFBSSxDQUFuQixDQUFKLEVBQTJCaUMsU0FBUyxDQUFUO0FBQzNCLFVBQUksS0FBS3JCLE1BQUwsQ0FBWVYsQ0FBWixFQUFlRixJQUFJLENBQW5CLENBQUosRUFBMkJpQyxTQUFTLENBQVQ7O0FBRTNCLFVBQUksS0FBS3JCLE1BQUwsQ0FBWVYsSUFBSSxDQUFoQixDQUFKLEVBQXdCO0FBQ3RCLFlBQUksS0FBS1UsTUFBTCxDQUFZVixJQUFJLENBQWhCLEVBQW1CRixJQUFJLENBQXZCLENBQUosRUFBK0JpQyxTQUFTLENBQVQ7QUFDL0IsWUFBSSxLQUFLckIsTUFBTCxDQUFZVixJQUFJLENBQWhCLEVBQW1CRixDQUFuQixDQUFKLEVBQTJCaUMsU0FBUyxDQUFUO0FBQzNCLFlBQUksS0FBS3JCLE1BQUwsQ0FBWVYsSUFBSSxDQUFoQixFQUFtQkYsSUFBSSxDQUF2QixDQUFKLEVBQStCaUMsU0FBUyxDQUFUO0FBQ2hDOztBQUVELFVBQUlBLFFBQVEsQ0FBUixJQUFhQSxRQUFRLENBQXpCLEVBQTRCQyxVQUFVLEtBQVYsQ0FBNUIsS0FDSyxJQUFJRCxVQUFVLENBQWQsRUFBaUJDLFVBQVUsSUFBVjtBQUN0QixhQUFPQSxPQUFQO0FBQ0Q7Ozs0QkFDT2hDLEMsRUFBR0YsQyxFQUFHO0FBQ1osV0FBS1ksTUFBTCxDQUFZVixDQUFaLEVBQWVGLENBQWYsSUFBb0IsQ0FBQyxLQUFLWSxNQUFMLENBQVlWLENBQVosRUFBZUYsQ0FBZixDQUFyQjtBQUNEOzs7Ozs7a0JBOUdrQnFCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUFjLE87QUFDbkIsbUJBQVkvQyxLQUFaLEVBQW1CSCxLQUFuQixFQUEwQkUsUUFBMUIsRUFBb0M7QUFBQTs7QUFDbEMsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0gsS0FBTCxHQUFhQSxTQUFTbEIsU0FBU21CLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxZQUFZcEIsU0FBU21CLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBNUI7QUFDQSxTQUFLa0QsT0FBTCxHQUFlLEtBQUtqRCxRQUFMLENBQWNrRCxvQkFBZCxDQUFtQyxRQUFuQyxDQUFmO0FBQ0Q7Ozs7aUNBQ1lyRCxPLEVBQVM7QUFDcEIsVUFBSSxDQUFDLEtBQUtvRCxPQUFWLEVBQW1CO0FBQ25CLFdBQUssSUFBSWxDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLa0MsT0FBTCxDQUFhWCxNQUFqQyxFQUF5Q3ZCLEtBQUssQ0FBOUMsRUFBaUQ7QUFDL0MsWUFBTW9DLFNBQVMsS0FBS0YsT0FBTCxDQUFhbEMsQ0FBYixDQUFmO0FBQ0EsWUFBSW9DLE9BQU94QixTQUFQLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ2hDLGNBQUk5QixPQUFKLEVBQWFzRCxPQUFPQyxRQUFQLEdBQWtCLElBQWxCLENBQWIsS0FDS0QsT0FBT0MsUUFBUCxHQUFrQixLQUFsQjtBQUNOO0FBQ0QsWUFBSUQsT0FBT3hCLFNBQVAsS0FBcUIsT0FBekIsRUFBa0M7QUFDaEMsY0FBSTlCLE9BQUosRUFBYXNELE9BQU9DLFFBQVAsR0FBa0IsS0FBbEIsQ0FBYixLQUNLRCxPQUFPQyxRQUFQLEdBQWtCLElBQWxCO0FBQ047QUFDRjtBQUNELFVBQU1DLFNBQVMsS0FBS3JELFFBQUwsQ0FBY3NELHNCQUFkLENBQXFDLFFBQXJDLEVBQStDLENBQS9DLENBQWY7QUFDQSxVQUFJLENBQUNELE1BQUwsRUFBYTtBQUNiLFVBQUl4RCxPQUFKLEVBQWF3RCxPQUFPRSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixnQkFBeEIsRUFBYixLQUNLSCxPQUFPRSxTQUFQLENBQWlCRSxHQUFqQixDQUFxQixnQkFBckI7QUFDTjs7O29DQUNlaEYsTSxFQUFRO0FBQ3RCQSxhQUFPOEUsU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0IsTUFBeEI7QUFDRDs7OzRCQUNPQyxVLEVBQVk7QUFDbEI7QUFEa0IsVUFFVmxDLE1BRlUsR0FFQyxLQUFLeEIsS0FGTixDQUVWd0IsTUFGVTs7QUFHbEIsVUFBTU8sSUFBSVAsT0FBT2EsTUFBakI7QUFDQSxVQUFNTCxJQUFJUixPQUFPLENBQVAsRUFBVWEsTUFBcEI7QUFDQSxVQUFNekUsUUFBUThGLGFBQWExQixDQUEzQjtBQUNBLFVBQU0yQixTQUFTL0YsS0FBZjs7QUFFQSxVQUFNZ0csUUFBUWpGLFNBQVNLLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLFdBQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSWlCLENBQXBCLEVBQXVCakIsS0FBSyxDQUE1QixFQUErQjtBQUM3QixZQUFNK0MsS0FBS2xGLFNBQVNLLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLGFBQUssSUFBSTRCLElBQUksQ0FBYixFQUFnQkEsSUFBSW9CLENBQXBCLEVBQXVCcEIsS0FBSyxDQUE1QixFQUErQjtBQUM3QixjQUFNa0QsS0FBS25GLFNBQVNLLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBOEUsYUFBRzFGLEtBQUgsQ0FBU1IsS0FBVCxHQUFvQkEsS0FBcEI7QUFDQWtHLGFBQUcxRixLQUFILENBQVN1RixNQUFULEdBQXFCQSxNQUFyQjtBQUNBLGNBQUluQyxPQUFPVixDQUFQLEVBQVVGLENBQVYsQ0FBSixFQUFrQmtELEdBQUdDLFNBQUgsR0FBZSxNQUFmO0FBQ2xCRixhQUFHdkUsV0FBSCxDQUFld0UsRUFBZjtBQUNEOztBQUVERixjQUFNdEUsV0FBTixDQUFrQnVFLEVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVDtBQURTLFVBRUQvRCxLQUZDLEdBRVMsSUFGVCxDQUVEQSxLQUZDOztBQUdULFVBQU0rRCxRQUFRLEtBQUszRCxPQUFMLENBQWFKLE1BQU0vQixXQUFuQixDQUFkO0FBQ0EsVUFBSStCLE1BQU1tRSxRQUFOLENBQWUzQixNQUFuQixFQUEyQnhDLE1BQU1vRSxZQUFOLENBQW1CTCxLQUFuQixFQUEwQi9ELE1BQU1tRSxRQUFOLENBQWUsQ0FBZixDQUExQixFQUEzQixLQUNLbkUsTUFBTVAsV0FBTixDQUFrQnNFLEtBQWxCO0FBQ047OztnQ0FFVztBQUNWO0FBRFUsVUFFRi9ELEtBRkUsR0FFUSxJQUZSLENBRUZBLEtBRkU7QUFBQSxVQUdGMkIsTUFIRSxHQUdTLEtBQUt4QixLQUhkLENBR0Z3QixNQUhFOztBQUlWLFVBQU1vQyxRQUFRL0QsTUFBTW1FLFFBQU4sQ0FBZSxDQUFmLENBQWQ7QUFDQSxVQUFNakMsSUFBSVAsT0FBT2EsTUFBakI7QUFDQSxVQUFNTCxJQUFJUixPQUFPLENBQVAsRUFBVWEsTUFBcEI7O0FBRUEsV0FBSyxJQUFJdkIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUIsQ0FBcEIsRUFBdUJqQixLQUFLLENBQTVCLEVBQStCO0FBQzdCLGFBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb0IsQ0FBcEIsRUFBdUJwQixLQUFLLENBQTVCLEVBQStCO0FBQzdCLGNBQU1rRCxLQUFLRixNQUFNSSxRQUFOLENBQWVsRCxDQUFmLEVBQWtCa0QsUUFBbEIsQ0FBMkJwRCxDQUEzQixDQUFYO0FBQ0EsY0FBSVksT0FBT1YsQ0FBUCxFQUFVRixDQUFWLENBQUosRUFBa0JrRCxHQUFHQyxTQUFILEdBQWUsTUFBZixDQUFsQixLQUNLRCxHQUFHQyxTQUFILEdBQWUsRUFBZjtBQUNOO0FBQ0Y7QUFDRjs7Ozs7O2tCQTVFa0JoQixPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTViZGUwYTJhZjI4MTVhYzUxYjYiLCJpbXBvcnQgJy4vaW5kZXguc3R5bCc7XHJcbmltcG9ydCAnLi9mYXZpY29ucy9mYXZpY29ucyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9tdmMvY29udHJvbGxlci9Db250cm9sbGVyJztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGZhdmljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnISFmaWxlLWxvYWRlcj9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGljb3x4bWx8anNvbikkLyk7XHJcblxyXG5mYXZpY29uc0NvbnRleHQua2V5cygpLmZvckVhY2goZmF2aWNvbnNDb250ZXh0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZmF2aWNvbnMvZmF2aWNvbnMuanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI6IDQsXG5cdFwiLi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiOiA1LFxuXHRcIi4vYnJvd3NlcmNvbmZpZy54bWxcIjogNixcblx0XCIuL2Zhdmljb24tMTZ4MTYucG5nXCI6IDcsXG5cdFwiLi9mYXZpY29uLTMyeDMyLnBuZ1wiOiA4LFxuXHRcIi4vZmF2aWNvbi5pY29cIjogOSxcblx0XCIuL21hbmlmZXN0Lmpzb25cIjogMTAsXG5cdFwiLi9tc3RpbGUtMTUweDE1MC5wbmdcIjogMTEsXG5cdFwiLi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjogMTJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZmF2aWNvbnMgIS4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSBcXC4oc3ZnfHBuZ3xpY298eG1sfGpzb24pJFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9hbmRyb2lkLWNocm9tZS00OHg0OC5wbmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Jyb3dzZXJjb25maWcueG1sXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLmljb1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24uaWNvXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL21hbmlmZXN0Lmpzb25cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9tc3RpbGUtMTUweDE1MC5wbmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2xpZGVyXHJcbmNvbnN0IHNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIHNsaWRlckNoYW5nZShlbGVtZW50KSB7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZWxlbWVudDtcclxuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDIwO1xyXG4gIGNvbnN0IG1pbiA9IGVsZW1lbnQuYXR0cmlidXRlcy5taW4udmFsdWU7XHJcbiAgY29uc3QgbWF4ID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1heC52YWx1ZTtcclxuICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmxlZnQgPSBgJHsoKHdpZHRoIC8gKG1heCAtIG1pbikpICogKHZhbHVlIC0gbWluKSkgLSA4Ljc1fXB4YDtcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlcklucHV0ID0gZnVuY3Rpb24gc2xpZGVySW5wdXQoZXZlbnQpIHtcclxuICBzbGlkZXJDaGFuZ2UoZXZlbnQudGFyZ2V0KTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zbGlkZXJfX2lucHV0Jyk7XHJcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc2xpZGVyQ2hhbmdlKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5vbmlucHV0ID0gc2xpZGVySW5wdXQ7XHJcbiAgfSk7XHJcbn0oKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIi8vIHJpcHBsZSBlZmZlY3RcclxuY29uc3QgcmlwcGxlRWZmZWN0ID0gZnVuY3Rpb24gcmlwcGxlRWZmZWN0KGV2ZW50KSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ3JpcHBsZSc7XHJcbiAgZGl2LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZIC0gMjV9cHhgO1xyXG4gIGRpdi5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQucGFnZVggLSAyNX1weGA7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpOyB9LCA1NTApO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YW5kYXJ0LWJ1dHRvbicpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQub25jbGljayA9IHJpcHBsZUVmZmVjdDtcclxuICB9KTtcclxufSgpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uLmpzIiwiXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9tb2RlbC9Cb2FyZCc7XHJcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3ZpZXcvUGFpbnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgxMCwgMTApO1xyXG4gICAgdGhpcy5wYWludGVyID0gbmV3IFBhaW50ZXIodGhpcy5ib2FyZCwgdGhpcy50YWJsZSwgdGhpcy5jb250cm9scyk7XHJcbiAgICB0aGlzLmZwcyA9IDE7XHJcbiAgICB0aGlzLmNlbGxUb2dnbGUgPSB0aGlzLmNlbGxUb2dnbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0UnVubmluZyA9IHRoaXMuc2V0UnVubmluZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNpemVCb2FyZCA9IHRoaXMucmVzaXplQm9hcmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGFpbnRlci5uZXdUYWJsZSgpOy8vINC90LDRh9Cw0LvRjNC90LDRjyDQvtGC0YDQuNGB0L7QstC60LBcclxuICAgIHRoaXMuYnV0dG9uc1RvZ2dsZSgpO1xyXG4gICAgdGhpcy50YWJsZS5vbmNsaWNrID0gdGhpcy5jZWxsVG9nZ2xlO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNsaWNrID0gdGhpcy5zZXRSdW5uaW5nO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNoYW5nZSA9IHRoaXMucmVzaXplQm9hcmQ7XHJcbiAgfVxyXG4gIGJ1dHRvbnNUb2dnbGUoKSB7XHJcbiAgICB0aGlzLnBhaW50ZXIuc3RhdHVzVG9nZ2xlKHRoaXMucnVubmluZyk7XHJcbiAgfVxyXG4gIGNlbGxUb2dnbGUoeyB0YXJnZXQgfSkge1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnVEQnKSByZXR1cm47XHJcbiAgICBjb25zdCBqID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIGNvbnN0IGkgPSB0YXJnZXQucGFyZW50RWxlbWVudC5zZWN0aW9uUm93SW5kZXg7XHJcbiAgICB0aGlzLnBhaW50ZXIudGFibGVDZWxsVG9nZ2xlKHRhcmdldCk7XHJcbiAgICB0aGlzLmJvYXJkLnNldENlbGwoaSwgaik7XHJcbiAgfVxyXG4gIGFuaW0oY2FsbGJhY2spIHtcclxuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPKNC00LvRjyDRgtC10YHRgtC+0LIpXHJcbiAgICBsZXQgb2xkTWF0cml4O1xyXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgY29uc3QgeyBmcHMgfSA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wLmJpbmQodGhpcykpOy8vINC90LUg0LHQu9C+0LrQuNGA0YPQtdGCINC/0L7RgtC+0LohXHJcbiAgICAgICAgICB0aGlzLmJvYXJkLndvcmtlcigpO1xyXG4gICAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0LzQsNGC0YDQuNGG0LAg0L3QtSDQvNC10L3Rj9C10YLRgdGPLCDRgdGB0YvQu9C60LAg0L7RgdGC0LDQtdGC0Y8g0LDQutGC0YPQsNC70YzQvdC+0LlcclxuICAgICAgICAgIGlmIChvbGRNYXRyaXggPT09IHRoaXMuYm9hcmQubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNUb2dnbGUoKTtcclxuICAgICAgICAgIH0gZWxzZSBvbGRNYXRyaXggPSB0aGlzLmJvYXJkLm1hdHJpeDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCAvIGZwcyk7XHJcbiAgICB9XHJcbiAgICBsb29wLmNhbGwodGhpcyk7XHJcbiAgfVxyXG4gIHNldFJ1bm5pbmcoeyB0YXJnZXQgfSkge1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0YXJnZXQuaW5uZXJIVE1MKSB7XHJcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc1RvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXVzZSc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zVG9nZ2xlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zVG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXNpemVCb2FyZCh7IHRhcmdldCB9KSB7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcpIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlQXNOdW1iZXI7XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGNhc2UgJ3NwZWVkJzpcclxuICAgICAgICB0aGlzLmZwcyA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zVG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNpemUodGhpcy5ib2FyZC5tLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hlaWdodCc6XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25zVG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNpemUodmFsdWUsIHRoaXMuYm9hcmQubik7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IobSA9IDEwLCBuID0gMTApIHtcclxuICAgIC8vINC80LDRgtGA0LjRhtCwIG0g0L3QsCBuINC30LDQv9C+0LvQvdC10L3QvdCw0Y8gZmFsc2VcclxuICAgIHRoaXMubWF0cml4ID0gW107XHJcbiAgICB0aGlzLm0gPSBtOy8vINGB0YLRgNC+0LrQuFxyXG4gICAgdGhpcy5uID0gbjsvLyDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgbGluZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgIGxpbmUucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubWF0cml4LnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc2l6ZShtLCBuKSB7XHJcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gdGhpcztcclxuICAgIGNvbnN0IG8gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgcCA9IG1hdHJpeFswXS5sZW5ndGg7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZScsbyxwLCcgdG8gJyxtLG4pO1xyXG4gICAgLy8g0YPQsdC40YDQsNC10Lwg0YHRgtC+0LvQsdGG0YtcclxuICAgIGlmIChwID4gbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG87IGkgKz0gMSkge1xyXG4gICAgICAgIG1hdHJpeFtpXS5zcGxpY2UobiAtIDEsIHAgLSBuKTsvLyDQuNC30LzQtdC90LjRgtGMIGxlbmd0aD9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgaWYgKHAgPCBuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbzsgaSArPSAxKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICAgIG1hdHJpeFtpXS5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRgdGC0YDQvtC60LhcclxuICAgIGlmIChvID4gbSkgbWF0cml4LnNwbGljZShtIC0gMSwgbyAtIG0pOy8vINC40LfQvNC10L3QuNGC0YwgbGVuZ3RoP1xyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdGC0YDQvtC60LhcclxuICAgIGlmIChvIDwgbSkge1xyXG4gICAgICBjb25zdCBsaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IG87IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgICBtYXRyaXgucHVzaChsaW5lLnNsaWNlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tID0gbTtcclxuICAgIHRoaXMubiA9IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY2xlYXIoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uOyBqICs9IDEpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHdvcmtlcigpIHtcclxuICAgIC8vINC+0LHRhdC+0LQg0LLRgdC10YUg0Y/Rh9C10LXQuiDRgSDQt9Cw0L/QuNGB0YzRjiDQvdC+0LLQvtCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPXHJcbiAgICBjb25zdCBuZXdNYXRyaXggPSBbXTtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7Ly8g0LjQt9C80LXQvdC80LvQsNGB0Ywg0LvQuCDQvNCw0YLRgNC40YbQsD9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgbmV3TGluZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF0cml4WzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbChpLCBqKTtcclxuICAgICAgICBuZXdMaW5lLnB1c2goY2VsbCk7XHJcbiAgICAgICAgaWYgKGNlbGwgIT09IHRoaXMubWF0cml4W2ldW2pdKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3TWF0cml4LnB1c2gobmV3TGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZsYWcpIHRoaXMubWF0cml4ID0gbmV3TWF0cml4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNlbGwoaSwgaikge1xyXG4gICAgLy8g0LLRi9GH0LjRgdC70Y/QtdGCINC90L7QstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC60LvQtdGC0LrQuFxyXG4gICAgLy8g0YHQvtGB0LXQtNC4INC30LAg0L/RgNC10LTQtdC70LDQvNC4INC/0L7Qu9GPINGB0YfQuNGC0LDRjtGC0YHRjyDQvNC10YDRgtCy0YvQvNC4XHJcbiAgICBsZXQgY291bnQgPSAwOy8vINC20LjQstGL0LUg0YHQvtGB0LXQtNC4XHJcbiAgICBsZXQgbmV3Q2VsbCA9IHRoaXMubWF0cml4W2ldW2pdO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV1bal0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpIC0gMV1baiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICBpZiAodGhpcy5tYXRyaXhbaV1baiArIDFdKSBjb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV0pIHtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqIC0gMV0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV1bal0pIGNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLm1hdHJpeFtpICsgMV1baiArIDFdKSBjb3VudCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3VudCA8IDIgfHwgY291bnQgPiAzKSBuZXdDZWxsID0gZmFsc2U7XHJcbiAgICBlbHNlIGlmIChjb3VudCA9PT0gMykgbmV3Q2VsbCA9IHRydWU7XHJcbiAgICByZXR1cm4gbmV3Q2VsbDtcclxuICB9XHJcbiAgc2V0Q2VsbChpLCBqKSB7XHJcbiAgICB0aGlzLm1hdHJpeFtpXVtqXSA9ICF0aGlzLm1hdHJpeFtpXVtqXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbXZjL21vZGVsL0JvYXJkLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmQsIHRhYmxlLCBjb250cm9scykge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy50YWJsZSA9IHRhYmxlIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgdGhpcy5idXR0b25zID0gdGhpcy5jb250cm9scy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQlVUVE9OJyk7XHJcbiAgfVxyXG4gIHN0YXR1c1RvZ2dsZShydW5uaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuYnV0dG9ucykgcmV0dXJuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW2ldO1xyXG4gICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgIGlmIChydW5uaW5nKSBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdwYXVzZScpIHtcclxuICAgICAgICBpZiAocnVubmluZykgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLmNvbnRyb2xzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXR1cycpWzBdO1xyXG4gICAgaWYgKCFzdGF0dXMpIHJldHVybjtcclxuICAgIGlmIChydW5uaW5nKSBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnc3RhdHVzX3N0b3BwZWQnKTtcclxuICAgIGVsc2Ugc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3N0YXR1c19zdG9wcGVkJyk7XHJcbiAgfVxyXG4gIHRhYmxlQ2VsbFRvZ2dsZSh0YXJnZXQpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdsaXZlJyk7XHJcbiAgfVxyXG4gIHBhaW50ZXIodGFibGVXaWR0aCkge1xyXG4gICAgLy8g0LfQsNC/0L7Qu9C90LXQvdC40LUg0YLQtdC70LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLmJvYXJkO1xyXG4gICAgY29uc3QgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBuID0gbWF0cml4WzBdLmxlbmd0aDtcclxuICAgIGNvbnN0IHdpZHRoID0gdGFibGVXaWR0aCAvIG47XHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aWR0aDtcclxuXHJcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkgdGQuY2xhc3NOYW1lID0gJ2xpdmUnO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0Ym9keTtcclxuICB9XHJcblxyXG4gIG5ld1RhYmxlKCkge1xyXG4gICAgLy8g0LTQu9GPICDRgdC+0LfQtNCw0L3QuNGPINC4INGA0LXRgdCw0LnQt9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnBhaW50ZXIodGFibGUuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuLmxlbmd0aCkgdGFibGUucmVwbGFjZUNoaWxkKHRib2R5LCB0YWJsZS5jaGlsZHJlblswXSk7XHJcbiAgICBlbHNlIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICB9XHJcblxyXG4gIHJlcGFpbnRlcigpIHtcclxuICAgIC8vINC40LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0LAg0YMg0Y/Rh9C10LXQuiDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyB0YWJsZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLmJvYXJkO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0YWJsZS5jaGlsZHJlblswXTtcclxuICAgIGNvbnN0IG0gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IHRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgIGlmIChtYXRyaXhbaV1bal0pIHRkLmNsYXNzTmFtZSA9ICdsaXZlJztcclxuICAgICAgICBlbHNlIHRkLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL212Yy92aWV3L1BhaW50ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9