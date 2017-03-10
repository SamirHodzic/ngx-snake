webpackJsonp([0,3],{

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestScoreManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BestScoreManager = (function () {
    function BestScoreManager() {
        this.ngxSnake = 'ngx_snake';
    }
    BestScoreManager.prototype.store = function (score) {
        localStorage.setItem(this.ngxSnake, JSON.stringify({ "best_score": score }));
    };
    BestScoreManager.prototype.retrieve = function () {
        var storedToken = this.parse();
        if (!storedToken) {
            this.store(0);
            storedToken = this.parse();
        }
        return storedToken.best_score;
    };
    BestScoreManager.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxSnake));
    };
    return BestScoreManager;
}());
BestScoreManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], BestScoreManager);

//# sourceMappingURL=/Users/samir/dev/ngx-snake/src/app.storage.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 297;


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(396);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/samir/dev/ngx-snake/src/main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_storage_service__ = __webpack_require__(252);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(bestScoreService) {
        this.bestScoreService = bestScoreService;
        this.best_score = this.bestScoreService.retrieve();
        this.BOARD_SIZE = 18;
        this.board = [];
        this.isGameOver = false;
        this.gameStarted = false;
        this.newBestScore = false;
        this.score = 0;
        this.showMenuChecker = false;
        this.default_mode = 'classic';
        this.CONTROLS = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
        this.COLORS = {
            GAME_OVER: '#D24D57',
            FRUIT: '#EC644B',
            HEAD: '#336E7B',
            BODY: '#C8F7C5',
            BOARD: '#86B5BD'
        };
        this.snake = {
            direction: this.CONTROLS.LEFT,
            parts: [
                {
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    AppComponent.prototype.handleKeyboardEvents = function (e) {
        if (e.keyCode == this.CONTROLS.LEFT && this.snake.direction !== this.CONTROLS.RIGHT) {
            this.tempDirection = this.CONTROLS.LEFT;
        }
        else if (e.keyCode == this.CONTROLS.UP && this.snake.direction !== this.CONTROLS.DOWN) {
            this.tempDirection = this.CONTROLS.UP;
        }
        else if (e.keyCode == this.CONTROLS.RIGHT && this.snake.direction !== this.CONTROLS.LEFT) {
            this.tempDirection = this.CONTROLS.RIGHT;
        }
        else if (e.keyCode == this.CONTROLS.DOWN && this.snake.direction !== this.CONTROLS.UP) {
            this.tempDirection = this.CONTROLS.DOWN;
        }
    };
    AppComponent.prototype.setColors = function (col, row) {
        if (this.isGameOver) {
            return this.COLORS.GAME_OVER;
        }
        else if (this.fruit.x == row && this.fruit.y == col) {
            return this.COLORS.FRUIT;
        }
        else if (this.snake.parts[0].x == row && this.snake.parts[0].y == col) {
            return this.COLORS.HEAD;
        }
        else if (this.board[col][row] === true) {
            return this.COLORS.BODY;
        }
        return this.COLORS.BOARD;
    };
    ;
    AppComponent.prototype.updatePositions = function () {
        var newHead = this.repositionHead();
        var me = this;
        if (this.default_mode === 'classic') {
            if (this.boardCollision(newHead)) {
                return this.gameOver();
            }
        }
        else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        var oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(function () {
            me.updatePositions();
        }, this.interval);
    };
    AppComponent.prototype.repositionHead = function () {
        var newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === this.CONTROLS.LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === this.CONTROLS.RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === this.CONTROLS.UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === this.CONTROLS.DOWN) {
            newHead.y += 1;
        }
        return newHead;
    };
    AppComponent.prototype.noWallsTransition = function (part) {
        if (part.x === this.BOARD_SIZE) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = this.BOARD_SIZE - 1;
        }
        if (part.y === this.BOARD_SIZE) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = this.BOARD_SIZE - 1;
        }
    };
    AppComponent.prototype.boardCollision = function (part) {
        return part.x === this.BOARD_SIZE || part.x === -1 || part.y === this.BOARD_SIZE || part.y === -1;
    };
    AppComponent.prototype.selfCollision = function (part) {
        return this.board[part.y][part.x] === true;
    };
    AppComponent.prototype.fruitCollision = function (part) {
        return part.x === this.fruit.x && part.y === this.fruit.y;
    };
    AppComponent.prototype.resetFruit = function () {
        var x = Math.floor(Math.random() * this.BOARD_SIZE);
        var y = Math.floor(Math.random() * this.BOARD_SIZE);
        if (this.board[y][x] === true) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    };
    AppComponent.prototype.eatFruit = function () {
        this.score++;
        var tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 5 === 0) {
            this.interval -= 15;
        }
    };
    AppComponent.prototype.gameOver = function () {
        this.isGameOver = true;
        this.gameStarted = false;
        var me = this;
        if (this.score > this.best_score) {
            this.bestScoreService.store(this.score);
            this.best_score = this.score;
            this.newBestScore = true;
        }
        setTimeout(function () {
            me.isGameOver = false;
        }, 500);
        this.setBoard();
    };
    AppComponent.prototype.setBoard = function () {
        this.board = [];
        for (var i = 0; i < this.BOARD_SIZE; i++) {
            this.board[i] = [];
            for (var j = 0; j < this.BOARD_SIZE; j++) {
                this.board[i][j] = false;
            }
        }
    };
    AppComponent.prototype.showMenu = function () {
        this.showMenuChecker = !this.showMenuChecker;
    };
    AppComponent.prototype.newGame = function (mode) {
        this.default_mode = mode || 'classic';
        this.showMenuChecker = false;
        this.newBestScore = false;
        this.gameStarted = true;
        this.score = 0;
        this.tempDirection = this.CONTROLS.LEFT;
        this.isGameOver = false;
        this.interval = 150;
        this.snake = {
            direction: this.CONTROLS.LEFT,
            parts: []
        };
        for (var i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        this.resetFruit();
        this.updatePositions();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'ngx-snake',
        template: __webpack_require__(551),
        styles: [__webpack_require__(549)],
        host: {
            '(document:keydown)': 'handleKeyboardEvents($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_storage_service__["a" /* BestScoreManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_storage_service__["a" /* BestScoreManager */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/samir/dev/ngx-snake/src/app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_storage_service__ = __webpack_require__(252);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__app_storage_service__["a" /* BestScoreManager */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/samir/dev/ngx-snake/src/app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/samir/dev/ngx-snake/src/polyfills.js.map

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, ".game-header {\n  color: #fff;\n  padding: 5px 15px 5px 0px;\n  position: relative;\n}\n\n.game-header>.score-block {\n  display: inline-block;\n}\n\n.score-block>.score {\n  position: absolute;\n  right: 8px;\n  top: -5px;\n}\n\n.score-block>.best-score {\n  position: absolute;\n  right: 8px;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.game-header>.logo {\n  display: inline-block;\n  padding-left: 15px;\n}\n\n.game-container {\n  width: 468px;\n  display: block;\n  margin: auto;\n  background-color: #47565A;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n  border-radius: 5px;\n}\n\n.row {\n  height: 26px;\n}\n\n.column {\n  border: 1px solid rgba(97, 131, 138, .1);\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n}\n\n.start-button {\n  padding: 15px;\n  text-align: center;\n  background-color: #47565A;\n  color: white;\n  border-radius: 5px;\n}\n\n.start-button:hover {\n  opacity: 0.65;\n  cursor: pointer;\n}\n\n.start-button.new-game-button {\n  margin: 0 105px 4px 105px;\n}\n\n.disable-clicks {\n  pointer-events: none;\n}\n\n.new-game-menu {\n  position: absolute;\n  top: 225px;\n  text-align: center;\n  width: 468px;\n}\n\n.new-game-menu-label {\n  font-weight: bold;\n  font-size: 1.17em;\n  margin-bottom: 13px;\n  display: block;\n  color: #47565A;\n}\n\n.new-best-score {\n  -webkit-animation: glow .5s infinite alternate;\n          animation: glow .5s infinite alternate;\n}\n\n@-webkit-keyframes glow {\n  to {\n    text-shadow: 0 0 15px #ffff00;\n  }\n}\n\n@keyframes glow {\n  to {\n    text-shadow: 0 0 15px #ffff00;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\n  <div class=\"game-header\">\n    <h3 class=\"logo\">ngx-Snake</h3>\n    <div class=\"score-block\">\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Score: {{score}}</h3>\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Best Score: {{best_score}}</h3>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\n  </div>\n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Start Game</div>\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\n    <span class=\"new-game-menu-label\">Select Mode</span>\n    <div class=\"start-button new-game-button\" (click)=\"newGame('classic')\">Classic</div>\n    <div class=\"start-button new-game-button\" (click)=\"newGame('no_walls')\">No Walls</div>\n  </div>\n</div>"

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(298);


/***/ })

},[561]);
//# sourceMappingURL=main.bundle.js.map