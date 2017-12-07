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
    this.painter = new _Painter2.default(this.board, this.table);
    this.fps = 1;
    this.painter.newTable(); // начальная отрисовка
    this.buttonsDisable();
    this.table.onclick = this.tableSetCell.bind(this);
    this.controls.onclick = this.setRunning.bind(this);
    this.controls.onchange = this.resizeBoard.bind(this);
  }

  _createClass(Controller, [{
    key: 'buttonsDisable',
    value: function buttonsDisable() {
      var buttons = document.getElementsByTagName('BUTTON');
      if (buttons === undefined) {
        // console.log('buttuns not found');
        return;
      }
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
            callback();
          }
        }, 1000 / fps);
      }
      loop.call(this);
    }
  }, {
    key: 'setRunning',
    value: function setRunning(event) {
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
    key: 'resizeBoard',
    value: function resizeBoard(event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzEzNDliOTMyZmM3N2IwZThjNDQiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbCIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL2Zhdmljb25zL21zdGlsZS0xNTB4MTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RhbmRhcnQtYnV0dG9uL3N0YW5kYXJ0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVyL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlldy9QYWludGVyLmpzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXIiLCJmYXZpY29uc0NvbnRleHQiLCJrZXlzIiwiZm9yRWFjaCIsInNsaWRlckNoYW5nZSIsImVsZW1lbnQiLCJ2YWx1ZSIsIndpZHRoIiwicGFyZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwibWluIiwiYXR0cmlidXRlcyIsIm1heCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJpbm5lclRleHQiLCJzdHlsZSIsImxlZnQiLCJzbGlkZXJJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwiaW5pdFNsaWRlcnMiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9uaW5wdXQiLCJyaXBwbGVFZmZlY3QiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0b3AiLCJwYWdlWSIsInBhZ2VYIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiaW5pdEJ1dHRvbnMiLCJvbmNsaWNrIiwiQ29udHJvbGxlciIsInJ1bm5pbmciLCJ0YWJsZSIsImdldEVsZW1lbnRCeUlkIiwiY29udHJvbHMiLCJib2FyZCIsInBhaW50ZXIiLCJmcHMiLCJuZXdUYWJsZSIsImJ1dHRvbnNEaXNhYmxlIiwidGFibGVTZXRDZWxsIiwiYmluZCIsInNldFJ1bm5pbmciLCJvbmNoYW5nZSIsInJlc2l6ZUJvYXJkIiwiYnV0dG9ucyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsImJ1dHRvbiIsImlubmVySFRNTCIsImRpc2FibGVkIiwidGFnTmFtZSIsImoiLCJjZWxsSW5kZXgiLCJzZWN0aW9uUm93SW5kZXgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXRDZWxsIiwiY2FsbGJhY2siLCJvbGRNYXRyaXgiLCJsb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid29ya2VyIiwicmVwYWludGVyIiwibWF0cml4IiwiY2FsbCIsImFuaW0iLCJjbGVhciIsInZhbHVlQXNOdW1iZXIiLCJyZXNpemUiLCJtIiwibiIsIkJvYXJkIiwibGluZSIsInB1c2giLCJvIiwicCIsInNwbGljZSIsInNsaWNlIiwibmV3TWF0cml4IiwiZmxhZyIsIm5ld0xpbmUiLCJjZWxsIiwiY291bnQiLCJuZXdDZWxsIiwiUGFpbnRlciIsInRhYmxlV2lkdGgiLCJoZWlnaHQiLCJ0Ym9keSIsInRyIiwidGQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInJlcGxhY2VDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSwwQkFBbkIsQzs7Ozs7O0FDTkEseUM7Ozs7Ozs7OztBQ0FBLElBQU1DLGtCQUFrQixzQkFBeEI7O0FBRUFBLGdCQUFnQkMsSUFBaEIsR0FBdUJDLE9BQXZCLENBQStCRixlQUEvQixFOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7QUN6QkEsNkU7Ozs7OztBQ0FBLHlFOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLHNFOzs7Ozs7QUNBQSxnRTs7Ozs7O0FDQUEsa0U7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSwwRTs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFNRyxlQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQUEsTUFDMUNDLEtBRDBDLEdBQ2hDRCxPQURnQyxDQUMxQ0MsS0FEMEM7O0FBRWxELE1BQU1DLFFBQVFGLFFBQVFHLGFBQVIsQ0FBc0JDLFdBQXRCLEdBQW9DLEVBQWxEO0FBQ0EsTUFBTUMsTUFBTUwsUUFBUU0sVUFBUixDQUFtQkQsR0FBbkIsQ0FBdUJKLEtBQW5DO0FBQ0EsTUFBTU0sTUFBTVAsUUFBUU0sVUFBUixDQUFtQkMsR0FBbkIsQ0FBdUJOLEtBQW5DO0FBQ0FELFVBQVFRLHNCQUFSLENBQStCQyxTQUEvQixHQUEyQ1IsS0FBM0M7QUFDQUQsVUFBUVEsc0JBQVIsQ0FBK0JFLEtBQS9CLENBQXFDQyxJQUFyQyxHQUFpRFQsU0FBU0ssTUFBTUYsR0FBZixDQUFELElBQXlCSixRQUFRSSxHQUFqQyxDQUFELEdBQTBDLElBQXpGO0FBQ0QsQ0FQRDs7QUFTQSxJQUFNTyxjQUFjLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzlDZCxlQUFhYyxNQUFNQyxNQUFuQjtBQUNELENBRkQ7O0FBSUMsVUFBU0MsV0FBVCxHQUF1QjtBQUN0QixNQUFNQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBakI7QUFDQUYsV0FBU2xCLE9BQVQsQ0FBaUIsVUFBQ0UsT0FBRCxFQUFhO0FBQzVCRCxpQkFBYUMsT0FBYjtBQUNBQSxZQUFRbUIsT0FBUixHQUFrQlAsV0FBbEI7QUFDRCxHQUhEO0FBSUQsQ0FOQSxHQUFELEM7Ozs7Ozs7OztBQ2RBO0FBQ0EsSUFBTVEsZUFBZSxTQUFTQSxZQUFULENBQXNCUCxLQUF0QixFQUE2QjtBQUNoRCxNQUFNUSxNQUFNSixTQUFTSyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsTUFBSUUsRUFBSixHQUFTLFFBQVQ7QUFDQUYsTUFBSVgsS0FBSixDQUFVYyxHQUFWLEdBQW1CWCxNQUFNWSxLQUFOLEdBQWMsRUFBakM7QUFDQUosTUFBSVgsS0FBSixDQUFVQyxJQUFWLEdBQW9CRSxNQUFNYSxLQUFOLEdBQWMsRUFBbEM7O0FBRUFULFdBQVNVLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsR0FBMUI7QUFDQVEsYUFBVyxZQUFNO0FBQUVaLGFBQVNVLElBQVQsQ0FBY0csV0FBZCxDQUEwQlQsR0FBMUI7QUFBaUMsR0FBcEQsRUFBc0QsR0FBdEQ7QUFDRCxDQVJEOztBQVVDLFVBQVNVLFdBQVQsR0FBdUI7QUFDdEIsTUFBTWYsV0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWpCO0FBQ0FGLFdBQVNsQixPQUFULENBQWlCLFVBQUNFLE9BQUQsRUFBYTtBQUM1QkEsWUFBUWdDLE9BQVIsR0FBa0JaLFlBQWxCO0FBQ0QsR0FGRDtBQUdELENBTEEsR0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7OztBQUNBOzs7Ozs7OztJQUVxQmEsVTtBQUNuQix3QkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhbEIsU0FBU21CLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JwQixTQUFTbUIsY0FBVCxDQUF3QixVQUF4QixDQUFoQjtBQUNBLFNBQUtFLEtBQUwsR0FBYSxvQkFBVSxFQUFWLEVBQWMsRUFBZCxDQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLHNCQUFZLEtBQUtELEtBQWpCLEVBQXdCLEtBQUtILEtBQTdCLENBQWY7QUFDQSxTQUFLSyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtELE9BQUwsQ0FBYUUsUUFBYixHQVBZLENBT1k7QUFDeEIsU0FBS0MsY0FBTDtBQUNBLFNBQUtQLEtBQUwsQ0FBV0gsT0FBWCxHQUFxQixLQUFLVyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUNBLFNBQUtQLFFBQUwsQ0FBY0wsT0FBZCxHQUF3QixLQUFLYSxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUF4QjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1MsUUFBZCxHQUF5QixLQUFLQyxXQUFMLENBQWlCSCxJQUFqQixDQUFzQixJQUF0QixDQUF6QjtBQUNEOzs7O3FDQUNnQjtBQUNmLFVBQU1JLFVBQVUvQixTQUFTZ0Msb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBaEI7QUFDQSxVQUFJRCxZQUFZRSxTQUFoQixFQUEyQjtBQUN6QjtBQUNBO0FBQ0Q7QUFDRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsUUFBUUksTUFBNUIsRUFBb0NELEtBQUssQ0FBekMsRUFBNEM7QUFDMUMsWUFBTUUsU0FBU0wsUUFBUUcsQ0FBUixDQUFmO0FBQ0EsWUFBSUUsT0FBT0MsU0FBUCxLQUFxQixPQUF6QixFQUFrQztBQUNoQyxjQUFJLEtBQUtwQixPQUFULEVBQWtCbUIsT0FBT0UsUUFBUCxHQUFrQixJQUFsQixDQUFsQixLQUNLRixPQUFPRSxRQUFQLEdBQWtCLEtBQWxCO0FBQ047QUFDRCxZQUFJRixPQUFPQyxTQUFQLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ2hDLGNBQUksS0FBS3BCLE9BQVQsRUFBa0JtQixPQUFPRSxRQUFQLEdBQWtCLEtBQWxCLENBQWxCLEtBQ0tGLE9BQU9FLFFBQVAsR0FBa0IsSUFBbEI7QUFDTjtBQUNGO0FBQ0Y7OztpQ0FDWTFDLEssRUFBTztBQUFBLFVBQ1ZDLE1BRFUsR0FDQ0QsS0FERCxDQUNWQyxNQURVOztBQUVsQixVQUFJQSxPQUFPMEMsT0FBUCxLQUFtQixJQUF2QixFQUE2QjtBQUM3QixVQUFNQyxJQUFJM0MsT0FBTzRDLFNBQWpCO0FBQ0EsVUFBTVAsSUFBSXJDLE9BQU9YLGFBQVAsQ0FBcUJ3RCxlQUEvQjtBQUNBN0MsYUFBTzhDLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0EsV0FBS3ZCLEtBQUwsQ0FBV3dCLE9BQVgsQ0FBbUJYLENBQW5CLEVBQXNCTSxDQUF0QjtBQUNEOzs7eUJBQ0lNLFEsRUFBVTtBQUNiO0FBQ0EsVUFBSUMsa0JBQUo7QUFDQSxlQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsWUFDTnpCLEdBRE0sR0FDRSxJQURGLENBQ05BLEdBRE07O0FBRWRYLG1CQUFXLFlBQU07QUFDZixjQUFJLE1BQUtLLE9BQVQsRUFBa0I7QUFDaEJnQyxrQ0FBc0JELEtBQUtyQixJQUFMLE9BQXRCLEVBRGdCLENBQ3VCO0FBQ3ZDLGtCQUFLTixLQUFMLENBQVc2QixNQUFYO0FBQ0Esa0JBQUs1QixPQUFMLENBQWE2QixTQUFiO0FBQ0E7QUFDQSxnQkFBSUosY0FBYyxNQUFLMUIsS0FBTCxDQUFXK0IsTUFBN0IsRUFBcUM7QUFDbkMsb0JBQUtuQyxPQUFMLEdBQWUsS0FBZjtBQUNBLG9CQUFLUSxjQUFMO0FBQ0QsYUFIRCxNQUdPc0IsWUFBWSxNQUFLMUIsS0FBTCxDQUFXK0IsTUFBdkI7QUFDUixXQVRELE1BU08sSUFBSU4sUUFBSixFQUFjO0FBQ25CQTtBQUNEO0FBQ0YsU0FiRCxFQWFHLE9BQU92QixHQWJWO0FBY0Q7QUFDRHlCLFdBQUtLLElBQUwsQ0FBVSxJQUFWO0FBQ0Q7OzsrQkFDVXpELEssRUFBTztBQUFBLFVBQ1JDLE1BRFEsR0FDR0QsS0FESCxDQUNSQyxNQURROztBQUVoQixVQUFJQSxPQUFPMEMsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUNqQyxjQUFRMUMsT0FBT3dDLFNBQWY7QUFDRSxhQUFLLE9BQUw7QUFDRSxlQUFLcEIsT0FBTCxHQUFlLElBQWY7QUFDQSxlQUFLUSxjQUFMO0FBQ0EsZUFBSzZCLElBQUw7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUtyQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGVBQUtRLGNBQUw7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUtKLEtBQUwsQ0FBV2tDLEtBQVg7QUFDQSxlQUFLdEMsT0FBTCxHQUFlLEtBQWY7QUFDQSxlQUFLUSxjQUFMO0FBQ0EsZUFBS0gsT0FBTCxDQUFhNkIsU0FBYjtBQWRKO0FBZ0JEOzs7Z0NBQ1d2RCxLLEVBQU87QUFBQSxVQUNUQyxNQURTLEdBQ0VELEtBREYsQ0FDVEMsTUFEUzs7QUFFakIsVUFBSUEsT0FBTzBDLE9BQVAsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDaEMsVUFBTXZELFFBQVFhLE9BQU8yRCxhQUFyQjtBQUNBLGNBQVEzRCxPQUFPWCxhQUFQLENBQXFCSyxzQkFBckIsQ0FBNENDLFNBQXBEO0FBQ0UsYUFBSyxPQUFMO0FBQ0UsZUFBSytCLEdBQUwsR0FBV3ZDLEtBQVg7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUtpQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGVBQUtRLGNBQUw7QUFDQSxlQUFLSixLQUFMLENBQVdvQyxNQUFYLENBQWtCLEtBQUtwQyxLQUFMLENBQVdxQyxDQUE3QixFQUFnQzFFLEtBQWhDO0FBQ0EsZUFBS3NDLE9BQUwsQ0FBYUUsUUFBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0UsZUFBS1AsT0FBTCxHQUFlLEtBQWY7QUFDQSxlQUFLUSxjQUFMO0FBQ0EsZUFBS0osS0FBTCxDQUFXb0MsTUFBWCxDQUFrQnpFLEtBQWxCLEVBQXlCLEtBQUtxQyxLQUFMLENBQVdzQyxDQUFwQztBQUNBLGVBQUtyQyxPQUFMLENBQWFFLFFBQWI7QUFkSjtBQWdCRDs7Ozs7O2tCQXRHa0JSLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSkE0QyxLO0FBQ25CLG1CQUE0QjtBQUFBLFFBQWhCRixDQUFnQix1RUFBWixFQUFZO0FBQUEsUUFBUkMsQ0FBUSx1RUFBSixFQUFJOztBQUFBOztBQUMxQjtBQUNBLFNBQUtQLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS00sQ0FBTCxHQUFTQSxDQUFULENBSDBCLENBR2Y7QUFDWCxTQUFLQyxDQUFMLEdBQVNBLENBQVQsQ0FKMEIsQ0FJZjtBQUNYLFNBQUssSUFBSXpCLElBQUksQ0FBYixFQUFnQkEsSUFBSXdCLENBQXBCLEVBQXVCeEIsS0FBSyxDQUE1QixFQUErQjtBQUM3QixVQUFNMkIsT0FBTyxFQUFiO0FBQ0EsV0FBSyxJQUFJckIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUIsQ0FBcEIsRUFBdUJuQixLQUFLLENBQTVCLEVBQStCO0FBQzdCcUIsYUFBS0MsSUFBTCxDQUFVLEtBQVY7QUFDRDs7QUFFRCxXQUFLVixNQUFMLENBQVlVLElBQVosQ0FBaUJELElBQWpCO0FBQ0Q7QUFDRjs7OzsyQkFDTUgsQyxFQUFHQyxDLEVBQUc7QUFBQSxVQUNIUCxNQURHLEdBQ1EsSUFEUixDQUNIQSxNQURHOztBQUVYLFVBQU1XLElBQUlYLE9BQU9qQixNQUFqQjtBQUNBLFVBQU02QixJQUFJWixPQUFPLENBQVAsRUFBVWpCLE1BQXBCOztBQUVBO0FBQ0E7QUFDQSxVQUFJNkIsSUFBSUwsQ0FBUixFQUFXO0FBQ1QsYUFBSyxJQUFJekIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNkIsQ0FBcEIsRUFBdUI3QixLQUFLLENBQTVCLEVBQStCO0FBQzdCa0IsaUJBQU9sQixDQUFQLEVBQVUrQixNQUFWLENBQWlCTixJQUFJLENBQXJCLEVBQXdCSyxJQUFJTCxDQUE1QixFQUQ2QixDQUNFO0FBQ2hDO0FBQ0Y7O0FBRUQ7QUFDQSxVQUFJSyxJQUFJTCxDQUFSLEVBQVc7QUFDVCxhQUFLLElBQUl6QixLQUFJLENBQWIsRUFBZ0JBLEtBQUk2QixDQUFwQixFQUF1QjdCLE1BQUssQ0FBNUIsRUFBK0I7QUFDN0IsZUFBSyxJQUFJTSxJQUFJd0IsQ0FBYixFQUFnQnhCLElBQUltQixDQUFwQixFQUF1Qm5CLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0JZLG1CQUFPbEIsRUFBUCxFQUFVNEIsSUFBVixDQUFlLEtBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQSxVQUFJQyxJQUFJTCxDQUFSLEVBQVdOLE9BQU9hLE1BQVAsQ0FBY1AsSUFBSSxDQUFsQixFQUFxQkssSUFBSUwsQ0FBekIsRUF2QkEsQ0F1QjRCOztBQUV2QztBQUNBLFVBQUlLLElBQUlMLENBQVIsRUFBVztBQUNULFlBQU1HLE9BQU8sRUFBYjtBQUNBLGFBQUssSUFBSXJCLEtBQUksQ0FBYixFQUFnQkEsS0FBSW1CLENBQXBCLEVBQXVCbkIsTUFBSyxDQUE1QixFQUErQjtBQUM3QnFCLGVBQUtDLElBQUwsQ0FBVSxLQUFWO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJNUIsTUFBSTZCLENBQWIsRUFBZ0I3QixNQUFJd0IsQ0FBcEIsRUFBdUJ4QixPQUFLLENBQTVCLEVBQStCO0FBQzdCa0IsaUJBQU9VLElBQVAsQ0FBWUQsS0FBS0ssS0FBTCxFQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLUixDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzRCQUNPO0FBQ04sV0FBSyxJQUFJekIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt3QixDQUF6QixFQUE0QnhCLEtBQUssQ0FBakMsRUFBb0M7QUFDbEMsYUFBSyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS21CLENBQXpCLEVBQTRCbkIsS0FBSyxDQUFqQyxFQUFvQztBQUNsQyxlQUFLWSxNQUFMLENBQVlsQixDQUFaLEVBQWVNLENBQWYsSUFBb0IsS0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7NkJBQ1E7QUFDUDtBQUNBLFVBQU0yQixZQUFZLEVBQWxCO0FBQ0EsVUFBSUMsT0FBTyxLQUFYLENBSE8sQ0FHVTtBQUNqQixXQUFLLElBQUlsQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2tCLE1BQUwsQ0FBWWpCLE1BQWhDLEVBQXdDRCxLQUFLLENBQTdDLEVBQWdEO0FBQzlDLFlBQU1tQyxVQUFVLEVBQWhCO0FBQ0EsYUFBSyxJQUFJN0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtZLE1BQUwsQ0FBWSxDQUFaLEVBQWVqQixNQUFuQyxFQUEyQ0ssS0FBSyxDQUFoRCxFQUFtRDtBQUNqRCxjQUFNOEIsT0FBTyxLQUFLQSxJQUFMLENBQVVwQyxDQUFWLEVBQWFNLENBQWIsQ0FBYjtBQUNBNkIsa0JBQVFQLElBQVIsQ0FBYVEsSUFBYjtBQUNBLGNBQUlBLFNBQVMsS0FBS2xCLE1BQUwsQ0FBWWxCLENBQVosRUFBZU0sQ0FBZixDQUFiLEVBQWdDNEIsT0FBTyxJQUFQO0FBQ2pDOztBQUVERCxrQkFBVUwsSUFBVixDQUFlTyxPQUFmO0FBQ0Q7O0FBRUQsVUFBSUQsSUFBSixFQUFVLEtBQUtoQixNQUFMLEdBQWNlLFNBQWQ7QUFDVixhQUFPLElBQVA7QUFDRDs7O3lCQUNJakMsQyxFQUFHTSxDLEVBQUc7QUFDVDtBQUNBO0FBQ0EsVUFBSStCLFFBQVEsQ0FBWixDQUhTLENBR0s7QUFDZCxVQUFJQyxVQUFVLEtBQUtwQixNQUFMLENBQVlsQixDQUFaLEVBQWVNLENBQWYsQ0FBZDs7QUFFQSxVQUFJLEtBQUtZLE1BQUwsQ0FBWWxCLElBQUksQ0FBaEIsQ0FBSixFQUF3QjtBQUN0QixZQUFJLEtBQUtrQixNQUFMLENBQVlsQixJQUFJLENBQWhCLEVBQW1CTSxJQUFJLENBQXZCLENBQUosRUFBK0IrQixTQUFTLENBQVQ7QUFDL0IsWUFBSSxLQUFLbkIsTUFBTCxDQUFZbEIsSUFBSSxDQUFoQixFQUFtQk0sQ0FBbkIsQ0FBSixFQUEyQitCLFNBQVMsQ0FBVDtBQUMzQixZQUFJLEtBQUtuQixNQUFMLENBQVlsQixJQUFJLENBQWhCLEVBQW1CTSxJQUFJLENBQXZCLENBQUosRUFBK0IrQixTQUFTLENBQVQ7QUFDaEM7O0FBRUQsVUFBSSxLQUFLbkIsTUFBTCxDQUFZbEIsQ0FBWixFQUFlTSxJQUFJLENBQW5CLENBQUosRUFBMkIrQixTQUFTLENBQVQ7QUFDM0IsVUFBSSxLQUFLbkIsTUFBTCxDQUFZbEIsQ0FBWixFQUFlTSxJQUFJLENBQW5CLENBQUosRUFBMkIrQixTQUFTLENBQVQ7O0FBRTNCLFVBQUksS0FBS25CLE1BQUwsQ0FBWWxCLElBQUksQ0FBaEIsQ0FBSixFQUF3QjtBQUN0QixZQUFJLEtBQUtrQixNQUFMLENBQVlsQixJQUFJLENBQWhCLEVBQW1CTSxJQUFJLENBQXZCLENBQUosRUFBK0IrQixTQUFTLENBQVQ7QUFDL0IsWUFBSSxLQUFLbkIsTUFBTCxDQUFZbEIsSUFBSSxDQUFoQixFQUFtQk0sQ0FBbkIsQ0FBSixFQUEyQitCLFNBQVMsQ0FBVDtBQUMzQixZQUFJLEtBQUtuQixNQUFMLENBQVlsQixJQUFJLENBQWhCLEVBQW1CTSxJQUFJLENBQXZCLENBQUosRUFBK0IrQixTQUFTLENBQVQ7QUFDaEM7O0FBRUQsVUFBSUEsUUFBUSxDQUFSLElBQWFBLFFBQVEsQ0FBekIsRUFBNEJDLFVBQVUsS0FBVixDQUE1QixLQUNLLElBQUlELFVBQVUsQ0FBZCxFQUFpQkMsVUFBVSxJQUFWO0FBQ3RCLGFBQU9BLE9BQVA7QUFDRDs7OzRCQUNPdEMsQyxFQUFHTSxDLEVBQUc7QUFDWixXQUFLWSxNQUFMLENBQVlsQixDQUFaLEVBQWVNLENBQWYsSUFBb0IsQ0FBQyxLQUFLWSxNQUFMLENBQVlsQixDQUFaLEVBQWVNLENBQWYsQ0FBckI7QUFDRDs7Ozs7O2tCQTlHa0JvQixLOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBYSxPO0FBQ25CLG1CQUFZcEQsS0FBWixFQUFtQkgsS0FBbkIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9xRCxVLEVBQVk7QUFDbEI7QUFEa0IsVUFFVnRCLE1BRlUsR0FFQyxLQUFLL0IsS0FGTixDQUVWK0IsTUFGVTs7QUFHbEIsVUFBTU0sSUFBSU4sT0FBT2pCLE1BQWpCO0FBQ0EsVUFBTXdCLElBQUlQLE9BQU8sQ0FBUCxFQUFVakIsTUFBcEI7QUFDQSxVQUFNbEQsUUFBUXlGLGFBQWFmLENBQTNCO0FBQ0EsVUFBTWdCLFNBQVMxRixLQUFmOztBQUVBLFVBQU0yRixRQUFRNUUsU0FBU0ssYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsV0FBSyxJQUFJNkIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0IsQ0FBcEIsRUFBdUJ4QixLQUFLLENBQTVCLEVBQStCO0FBQzdCLFlBQU0yQyxLQUFLN0UsU0FBU0ssYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsYUFBSyxJQUFJbUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUIsQ0FBcEIsRUFBdUJuQixLQUFLLENBQTVCLEVBQStCO0FBQzdCLGNBQU1zQyxLQUFLOUUsU0FBU0ssYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0F5RSxhQUFHckYsS0FBSCxDQUFTUixLQUFULEdBQW9CQSxLQUFwQjtBQUNBNkYsYUFBR3JGLEtBQUgsQ0FBU2tGLE1BQVQsR0FBcUJBLE1BQXJCO0FBQ0EsY0FBSXZCLE9BQU9sQixDQUFQLEVBQVVNLENBQVYsQ0FBSixFQUFrQnNDLEdBQUdDLFNBQUgsR0FBZSxNQUFmO0FBQ2xCRixhQUFHbEUsV0FBSCxDQUFlbUUsRUFBZjtBQUNEOztBQUVERixjQUFNakUsV0FBTixDQUFrQmtFLEVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVDtBQURTLFVBRUQxRCxLQUZDLEdBRVMsSUFGVCxDQUVEQSxLQUZDOztBQUdULFVBQU0wRCxRQUFRLEtBQUt0RCxPQUFMLENBQWFKLE1BQU0vQixXQUFuQixDQUFkO0FBQ0EsVUFBSStCLE1BQU04RCxRQUFOLENBQWU3QyxNQUFuQixFQUEyQmpCLE1BQU0rRCxZQUFOLENBQW1CTCxLQUFuQixFQUEwQjFELE1BQU04RCxRQUFOLENBQWUsQ0FBZixDQUExQixFQUEzQixLQUNLOUQsTUFBTVAsV0FBTixDQUFrQmlFLEtBQWxCO0FBQ047OztnQ0FFVztBQUNWO0FBRFUsVUFFRjFELEtBRkUsR0FFUSxJQUZSLENBRUZBLEtBRkU7QUFBQSxVQUdGa0MsTUFIRSxHQUdTLEtBQUsvQixLQUhkLENBR0YrQixNQUhFOztBQUlWLFVBQU13QixRQUFRMUQsTUFBTThELFFBQU4sQ0FBZSxDQUFmLENBQWQ7QUFDQSxVQUFNdEIsSUFBSU4sT0FBT2pCLE1BQWpCO0FBQ0EsVUFBTXdCLElBQUlQLE9BQU8sQ0FBUCxFQUFVakIsTUFBcEI7O0FBRUEsV0FBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUl3QixDQUFwQixFQUF1QnhCLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsYUFBSyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUltQixDQUFwQixFQUF1Qm5CLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsY0FBTXNDLEtBQUtGLE1BQU1JLFFBQU4sQ0FBZTlDLENBQWYsRUFBa0I4QyxRQUFsQixDQUEyQnhDLENBQTNCLENBQVg7QUFDQSxjQUFJWSxPQUFPbEIsQ0FBUCxFQUFVTSxDQUFWLENBQUosRUFBa0JzQyxHQUFHQyxTQUFILEdBQWUsTUFBZixDQUFsQixLQUNLRCxHQUFHQyxTQUFILEdBQWUsRUFBZjtBQUNOO0FBQ0Y7QUFDRjs7Ozs7O2tCQXREa0JOLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMTM0OWI5MzJmYzc3YjBlOGM0NCIsImltcG9ydCAnLi9pbmRleC5zdHlsJztcclxuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBmYXZpY29uc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJyEhZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLicsIHRydWUsIC9cXC4oc3ZnfHBuZ3xpY298eG1sfGpzb24pJC8pO1xyXG5cclxuZmF2aWNvbnNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGZhdmljb25zQ29udGV4dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zhdmljb25zL2Zhdmljb25zLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiOiA0LFxuXHRcIi4vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjogNSxcblx0XCIuL2Jyb3dzZXJjb25maWcueG1sXCI6IDYsXG5cdFwiLi9mYXZpY29uLTE2eDE2LnBuZ1wiOiA3LFxuXHRcIi4vZmF2aWNvbi0zMngzMi5wbmdcIjogOCxcblx0XCIuL2Zhdmljb24uaWNvXCI6IDksXG5cdFwiLi9tYW5pZmVzdC5qc29uXCI6IDEwLFxuXHRcIi4vbXN0aWxlLTE1MHgxNTAucG5nXCI6IDExLFxuXHRcIi4vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI6IDEyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zhdmljb25zICEuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0gXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSRcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi5pY29cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLmljb1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNsaWRlclxyXG5jb25zdCBzbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiBzbGlkZXJDaGFuZ2UoZWxlbWVudCkge1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGVsZW1lbnQ7XHJcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAyMDtcclxuICBjb25zdCBtaW4gPSBlbGVtZW50LmF0dHJpYnV0ZXMubWluLnZhbHVlO1xyXG4gIGNvbnN0IG1heCA9IGVsZW1lbnQuYXR0cmlidXRlcy5tYXgudmFsdWU7XHJcbiAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5sZWZ0ID0gYCR7KCh3aWR0aCAvIChtYXggLSBtaW4pKSAqICh2YWx1ZSAtIG1pbikpIC0gOC43NX1weGA7XHJcbn07XHJcblxyXG5jb25zdCBzbGlkZXJJbnB1dCA9IGZ1bmN0aW9uIHNsaWRlcklucHV0KGV2ZW50KSB7XHJcbiAgc2xpZGVyQ2hhbmdlKGV2ZW50LnRhcmdldCk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2xpZGVyX19pbnB1dCcpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHNsaWRlckNoYW5nZShlbGVtZW50KTtcclxuICAgIGVsZW1lbnQub25pbnB1dCA9IHNsaWRlcklucHV0O1xyXG4gIH0pO1xyXG59KCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCIvLyByaXBwbGUgZWZmZWN0XHJcbmNvbnN0IHJpcHBsZUVmZmVjdCA9IGZ1bmN0aW9uIHJpcHBsZUVmZmVjdChldmVudCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pZCA9ICdyaXBwbGUnO1xyXG4gIGRpdi5zdHlsZS50b3AgPSBgJHtldmVudC5wYWdlWSAtIDI1fXB4YDtcclxuICBkaXYuc3R5bGUubGVmdCA9IGAke2V2ZW50LnBhZ2VYIC0gMjV9cHhgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTsgfSwgNTUwKTtcclxufTtcclxuXHJcbihmdW5jdGlvbiBpbml0QnV0dG9ucygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFuZGFydC1idXR0b24nKTtcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSByaXBwbGVFZmZlY3Q7XHJcbiAgfSk7XHJcbn0oKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3RhbmRhcnQtYnV0dG9uL3N0YW5kYXJ0LWJ1dHRvbi5qcyIsIlxyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vbW9kZWwvQm9hcmQnO1xyXG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi92aWV3L1BhaW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcclxuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoMTAsIDEwKTtcclxuICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuYm9hcmQsIHRoaXMudGFibGUpO1xyXG4gICAgdGhpcy5mcHMgPSAxO1xyXG4gICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7Ly8g0L3QsNGH0LDQu9GM0L3QsNGPINC+0YLRgNC40YHQvtCy0LrQsFxyXG4gICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgdGhpcy50YWJsZS5vbmNsaWNrID0gdGhpcy50YWJsZVNldENlbGwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udHJvbHMub25jbGljayA9IHRoaXMuc2V0UnVubmluZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9scy5vbmNoYW5nZSA9IHRoaXMucmVzaXplQm9hcmQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgYnV0dG9uc0Rpc2FibGUoKSB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JVVFRPTicpO1xyXG4gICAgaWYgKGJ1dHRvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnYnV0dHVucyBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV07XHJcbiAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAnc3RhcnQnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAncGF1c2UnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhYmxlU2V0Q2VsbChldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnVEQnKSByZXR1cm47XHJcbiAgICBjb25zdCBqID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIGNvbnN0IGkgPSB0YXJnZXQucGFyZW50RWxlbWVudC5zZWN0aW9uUm93SW5kZXg7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbGl2ZScpO1xyXG4gICAgdGhpcy5ib2FyZC5zZXRDZWxsKGksIGopO1xyXG4gIH1cclxuICBhbmltKGNhbGxiYWNrKSB7XHJcbiAgICAvLyDQvtGB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0Lgg0LLRi9C30YvQstC10YIg0LDRgNCz0YPQvNC10L3Rgiwg0LrQvtCz0LTQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdGB0YLQsNC10YIg0LzQtdC90Y/RgtGM0YHRj1xyXG4gICAgbGV0IG9sZE1hdHJpeDtcclxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgIGNvbnN0IHsgZnBzIH0gPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTsvLyDQvdC1INCx0LvQvtC60LjRgNGD0LXRgiDQv9C+0YLQvtC6IVxyXG4gICAgICAgICAgdGhpcy5ib2FyZC53b3JrZXIoKTtcclxuICAgICAgICAgIHRoaXMucGFpbnRlci5yZXBhaW50ZXIoKTtcclxuICAgICAgICAgIC8vINC10YHQu9C4INC80LDRgtGA0LjRhtCwINC90LUg0LzQtdC90Y/QtdGC0YHRjywg0YHRgdGL0LvQutCwINC+0YHRgtCw0LXRgtGPINCw0LrRgtGD0LDQu9GM0L3QvtC5XHJcbiAgICAgICAgICBpZiAob2xkTWF0cml4ID09PSB0aGlzLmJvYXJkLm1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIG9sZE1hdHJpeCA9IHRoaXMuYm9hcmQubWF0cml4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwIC8gZnBzKTtcclxuICAgIH1cclxuICAgIGxvb3AuY2FsbCh0aGlzKTtcclxuICB9XHJcbiAgc2V0UnVubmluZyhldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0YXJnZXQuaW5uZXJIVE1MKSB7XHJcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmFuaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGF1c2UnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLnJlcGFpbnRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXNpemVCb2FyZChldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSByZXR1cm47XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZUFzTnVtYmVyO1xyXG4gICAgc3dpdGNoICh0YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCkge1xyXG4gICAgICBjYXNlICdzcGVlZCc6XHJcbiAgICAgICAgdGhpcy5mcHMgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2lkdGgnOlxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2l6ZSh0aGlzLmJvYXJkLm0sIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnBhaW50ZXIubmV3VGFibGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNpemUodmFsdWUsIHRoaXMuYm9hcmQubik7XHJcbiAgICAgICAgdGhpcy5wYWludGVyLm5ld1RhYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRyb2xsZXIvQ29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcihtID0gMTAsIG4gPSAxMCkge1xyXG4gICAgLy8g0LzQsNGC0YDQuNGG0LAgbSDQvdCwIG4g0LfQsNC/0L7Qu9C90LXQvdC90LDRjyBmYWxzZVxyXG4gICAgdGhpcy5tYXRyaXggPSBbXTtcclxuICAgIHRoaXMubSA9IG07Ly8g0YHRgtGA0L7QutC4XHJcbiAgICB0aGlzLm4gPSBuOy8vINGB0YLQvtC70LHRhtGLXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBsaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAxKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tYXRyaXgucHVzaChsaW5lKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzaXplKG0sIG4pIHtcclxuICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBwID0gbWF0cml4WzBdLmxlbmd0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVzaXplJyxvLHAsJyB0byAnLG0sbik7XHJcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRgdGC0L7Qu9Cx0YbRi1xyXG4gICAgaWYgKHAgPiBuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbzsgaSArPSAxKSB7XHJcbiAgICAgICAgbWF0cml4W2ldLnNwbGljZShuIC0gMSwgcCAtIG4pOy8vINC40LfQvNC10L3QuNGC0YwgbGVuZ3RoP1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGB0YLQvtC70LHRhtGLXHJcbiAgICBpZiAocCA8IG4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvOyBpICs9IDEpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gcDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgICAgbWF0cml4W2ldLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINGD0LHQuNGA0LDQtdC8INGB0YLRgNC+0LrQuFxyXG4gICAgaWYgKG8gPiBtKSBtYXRyaXguc3BsaWNlKG0gLSAxLCBvIC0gbSk7Ly8g0LjQt9C80LXQvdC40YLRjCBsZW5ndGg/XHJcblxyXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGB0YLRgNC+0LrQuFxyXG4gICAgaWYgKG8gPCBtKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBsaW5lLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gbzsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICAgIG1hdHJpeC5wdXNoKGxpbmUuc2xpY2UoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm0gPSBtO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjbGVhcigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm47IGogKz0gMSkge1xyXG4gICAgICAgIHRoaXMubWF0cml4W2ldW2pdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgd29ya2VyKCkge1xyXG4gICAgLy8g0L7QsdGF0L7QtCDQstGB0LXRhSDRj9GH0LXQtdC6INGBINC30LDQv9C40YHRjNGOINC90L7QstC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICAgIGNvbnN0IG5ld01hdHJpeCA9IFtdO1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTsvLyDQuNC30LzQtdC90LzQu9Cw0YHRjCDQu9C4INC80LDRgtGA0LjRhtCwP1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBuZXdMaW5lID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXRyaXhbMF0ubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5jZWxsKGksIGopO1xyXG4gICAgICAgIG5ld0xpbmUucHVzaChjZWxsKTtcclxuICAgICAgICBpZiAoY2VsbCAhPT0gdGhpcy5tYXRyaXhbaV1bal0pIGZsYWcgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdNYXRyaXgucHVzaChuZXdMaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmxhZykgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY2VsbChpLCBqKSB7XHJcbiAgICAvLyDQstGL0YfQuNGB0LvRj9C10YIg0L3QvtCy0L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQu9C10YLQutC4XHJcbiAgICAvLyDRgdC+0YHQtdC00Lgg0LfQsCDQv9GA0LXQtNC10LvQsNC80Lgg0L/QvtC70Y8g0YHRh9C40YLQsNGO0YLRgdGPINC80LXRgNGC0LLRi9C80LhcclxuICAgIGxldCBjb3VudCA9IDA7Ly8g0LbQuNCy0YvQtSDRgdC+0YHQtdC00LhcclxuICAgIGxldCBuZXdDZWxsID0gdGhpcy5tYXRyaXhbaV1bal07XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSAtIDFdW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgLSAxXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2ldW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgIGlmICh0aGlzLm1hdHJpeFtpXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXSkge1xyXG4gICAgICBpZiAodGhpcy5tYXRyaXhbaSArIDFdW2ogLSAxXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqXSkgY291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMubWF0cml4W2kgKyAxXVtqICsgMV0pIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50IDwgMiB8fCBjb3VudCA+IDMpIG5ld0NlbGwgPSBmYWxzZTtcclxuICAgIGVsc2UgaWYgKGNvdW50ID09PSAzKSBuZXdDZWxsID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXdDZWxsO1xyXG4gIH1cclxuICBzZXRDZWxsKGksIGopIHtcclxuICAgIHRoaXMubWF0cml4W2ldW2pdID0gIXRoaXMubWF0cml4W2ldW2pdO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2RlbC9Cb2FyZC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGJvYXJkLCB0YWJsZSkge1xyXG4gICAgdGhpcy50YWJsZSA9IHRhYmxlO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgcGFpbnRlcih0YWJsZVdpZHRoKSB7XHJcbiAgICAvLyDQt9Cw0L/QvtC70L3QtdC90LjQtSDRgtC10LvQsCDRgtCw0LHQu9C40YbRi1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuYm9hcmQ7XHJcbiAgICBjb25zdCBtID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IG4gPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0YWJsZVdpZHRoIC8gbjtcclxuICAgIGNvbnN0IGhlaWdodCA9IHdpZHRoO1xyXG5cclxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgdGQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICBpZiAobWF0cml4W2ldW2pdKSB0ZC5jbGFzc05hbWUgPSAnbGl2ZSc7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRib2R5O1xyXG4gIH1cclxuXHJcbiAgbmV3VGFibGUoKSB7XHJcbiAgICAvLyDQtNC70Y8gINGB0L7Qt9C00LDQvdC40Y8g0Lgg0YDQtdGB0LDQudC30LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIGNvbnN0IHsgdGFibGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRoaXMucGFpbnRlcih0YWJsZS5jbGllbnRXaWR0aCk7XHJcbiAgICBpZiAodGFibGUuY2hpbGRyZW4ubGVuZ3RoKSB0YWJsZS5yZXBsYWNlQ2hpbGQodGJvZHksIHRhYmxlLmNoaWxkcmVuWzBdKTtcclxuICAgIGVsc2UgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gIH1cclxuXHJcbiAgcmVwYWludGVyKCkge1xyXG4gICAgLy8g0LjQt9C80LXQvdC10L3QuNC1INC60LvQsNGB0YHQsCDRgyDRj9GH0LXQtdC6INGC0LDQsdC70LjRhtGLXHJcbiAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuYm9hcmQ7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRhYmxlLmNoaWxkcmVuWzBdO1xyXG4gICAgY29uc3QgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCBuID0gbWF0cml4WzBdLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGogKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHRkID0gdGJvZHkuY2hpbGRyZW5baV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkgdGQuY2xhc3NOYW1lID0gJ2xpdmUnO1xyXG4gICAgICAgIGVsc2UgdGQuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmlldy9QYWludGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==