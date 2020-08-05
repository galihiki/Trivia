webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answers/answers.component.css":
/***/ (function(module, exports) {

module.exports = ".right-answer{\r\n    border: 4px solid #3d963d !important;\r\n}\r\n\r\n.wrong-answer{\r\n    border: 4px solid #b32c2c !important;\r\n}\r\n\r\n.selected-answer{\r\n    border: 4px solid #0D7BAB !important;\r\n}\r\n\r\n.right-answer-text{\r\n    color: #33C933 !important;\r\n}\r\n\r\n.wrong-answer-text{\r\n    color: #FB4343 !important;\r\n}\r\n\r\n.selected-answer-text{\r\n    color: #0D7BAB !important;\r\n}\r\n\r\n.answer-btn{\r\n    background-color: #FAFAFA;\r\n    border: 2px solid #D9E6EB;\r\n    border-radius: 23px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.answer-btn:hover:not([disabled]){\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.answer-text{\r\n    font-family: OpenSans-Semibold;\r\n    font-size: 28px;\r\n    color: #496472;\r\n    letter-spacing: 0;\r\n    text-align: center; \r\n    padding: 8px 40px;\r\n}\r\n\r\n.btn-container{\r\n    width: 45%;\r\n    margin: 8px 2.5%;\r\n    min-height: 100px;\r\n    min-width: 250px;\r\n    position: relative;\r\n}\r\n\r\n.verify-img{\r\n    width: 34px;\r\n    position: absolute;\r\n    left: 16px;\r\n    top: 10px;\r\n}\r\n\r\n@media(max-width: 660px){\r\n    .btn-container{\r\n        width: 90%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/answers/answers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let answer of answers; let i=index\" class=\"btn-container\">\r\n  <button \r\n      [disabled]=\"status==='rightAnswer' || status==='wrongAnswer'\"\r\n      [ngClass]=\"{'right-answer': isCorrectAnswer(i), \r\n                  'wrong-answer' : isWrongAnswer(i),\r\n                  'selected-answer' : isSelectedAnswer(i) }\" \r\n      class=\"answer-btn\" \r\n      (click)=\"selected(i)\">\r\n    <img src=\"./assets/v.png\" *ngIf=\"isCorrectAnswer(i)\" class=\"verify-img\">\r\n    <img src=\"./assets/x.png\" *ngIf=\"isWrongAnswer(i)\" class=\"verify-img\">\r\n    <div class=\"answer-text\" \r\n          [innerHTML]=\"answer\"\r\n          [ngClass]=\"{'right-answer-text': isCorrectAnswer(i), \r\n                      'wrong-answer-text' : isWrongAnswer(i),\r\n                      'selected-answer-text' : isSelectedAnswer(i) }\"> \r\n    </div>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/answers/answers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswersComponent = /** @class */ (function () {
    function AnswersComponent(settingsService) {
        this.settingsService = settingsService;
        this.MessageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AnswersComponent.prototype.ngOnInit = function () {
        this.displayCorrectAnswer = this.settingsService.getDisplayCorrectAnswer;
    };
    AnswersComponent.prototype.ngOnChanges = function (changes) {
        if (changes.status) {
            this.status = changes.status.currentValue;
        }
    };
    AnswersComponent.prototype.selected = function (index) {
        this.selectedIndex = index;
        this.MessageEvent.emit(this.answers[index]);
    };
    AnswersComponent.prototype.isCorrectAnswer = function (index) {
        return index === this.selectedIndex && this.status === 'rightAnswer';
    };
    AnswersComponent.prototype.isWrongAnswer = function (index) {
        return index === this.selectedIndex && this.status === 'wrongAnswer';
    };
    AnswersComponent.prototype.isSelectedAnswer = function (index) {
        return index === this.selectedIndex && this.status === 'selectedAnswer';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], AnswersComponent.prototype, "answers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AnswersComponent.prototype, "correctAnswer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AnswersComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], AnswersComponent.prototype, "MessageEvent", void 0);
    AnswersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answers',
            template: __webpack_require__("./src/app/answers/answers.component.html"),
            styles: [__webpack_require__("./src/app/answers/answers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_trivia_trivia_component__ = __webpack_require__("./src/app/pages/trivia/trivia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings_component__ = __webpack_require__("./src/app/pages/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'trivia', component: __WEBPACK_IMPORTED_MODULE_0__pages_trivia_trivia_component__["a" /* TriviaComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n}\r\n.main-nav{\r\n    background: -webkit-gradient(linear, left top, right top, from(#314455), to(#1d2e36));\r\n    background: linear-gradient(to right, #314455, #1d2e36);\r\n    height: 50px;\r\n}\r\n.main-nav-options{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100%;\r\n    font-size: 22px;\r\n}\r\n.main-nav-item{\r\n    padding: 0 8px;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.main-nav-item:hover,\r\n.active{\r\n    color: #97aabd;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"main-nav\">\r\n    <div class=\"main-nav-options\">\r\n      <a class=\"main-nav-item\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      <a class=\"main-nav-item\" routerLink=\"/settings\" routerLinkActive=\"active\">Game Settings</a>\r\n      <a class=\"main-nav-item\" routerLink=\"/trivia\" routerLinkActive=\"active\">Play Trivia</a>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_question_component__ = __webpack_require__("./src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__answers_answers_component__ = __webpack_require__("./src/app/answers/answers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_over_dialog_game_over_dialog_component__ = __webpack_require__("./src/app/game-over-dialog/game-over-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_trivia_trivia_component__ = __webpack_require__("./src/app/pages/trivia/trivia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings_component__ = __webpack_require__("./src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trivia_trivia_component__["a" /* TriviaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__answers_answers_component__["a" /* AnswersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__game_over_dialog_game_over_dialog_component__["a" /* GameOverDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_16__services_settings_service__["a" /* SettingsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__game_over_dialog_game_over_dialog_component__["a" /* GameOverDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Difficulty; });
var Status;
(function (Status) {
    Status["SelectedAnswer"] = "selectedAnswer";
    Status["WrongAnswer"] = "wrongAnswer";
    Status["RightAnswer"] = "rightAnswer";
})(Status || (Status = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty["AnyDifficulty"] = "Any Difficulty";
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));


/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".right-answers-msg{\r\n    font-family: OpenSans;\r\n    font-size: 24px;\r\n    color: #223336;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.game-over-text{\r\n    color: #0D7BAB;\r\n    margin-left: 27%;\r\n}\r\n\r\n.action-btn{\r\n    background-color: #FAFAFA;\r\n    border: 2px solid #D9E6EB;\r\n    border-radius: 23px;\r\n    margin: 5% auto;\r\n    width: 80%;\r\n}"

/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"game-over-text\">Game Over!</h2>\r\n<mat-dialog-content>\r\n  <div class=\"right-answers-msg\">\r\n    You got {{data.correctAnswers}}/{{data.totalQuestions}} answers right \r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"action-btn\" (click)=\"newGame()\">Play again</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GameOverDialogComponent = /** @class */ (function () {
    function GameOverDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GameOverDialogComponent.prototype.ngOnInit = function () {
    };
    GameOverDialogComponent.prototype.newGame = function () {
        this.dialogRef.close("newGame");
    };
    GameOverDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    GameOverDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-over-dialog',
            template: __webpack_require__("./src/app/game-over-dialog/game-over-dialog.component.html"),
            styles: [__webpack_require__("./src/app/game-over-dialog/game-over-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], GameOverDialogComponent);
    return GameOverDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n.image{\r\n    height: calc(100vh - 50px);\r\n}\r\n.image1{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n.options-container{\r\n    width: 100%;\r\n    background-color: #9e5a63;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n}\r\n.main-title{\r\n    padding: 16px 0;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    color: #faf6f9;\r\n}\r\n.secondary-title{\r\n    padding: 24px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-size: 22px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    color: #faf6f9;\r\n}\r\n.link{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    font-size: 24px;\r\n    color: #faf6f9;\r\n    background-color: #644e5b;\r\n    text-decoration: none;\r\n    width: 150px;\r\n    padding: 8px 0;\r\n    border-radius: 20px;\r\n}\r\n.link:hover{\r\n    color: #9e5a63;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"image\" src=\"assets/think-outside-the-box.jpg\">\r\n<div class=\"options-container\">\r\n    <div class=\"main-title\">Welcome!</div>\r\n    <div class=\"secondary-title\">To select your prefered category and difficalty</div>\r\n    <a class=\"link\" routerLink=\"/settings\" routerLinkActive=\"active\">click here</a>\r\n    <div class=\"secondary-title\">To start playing</div>\r\n    <a class=\"link\" routerLink=\"/trivia\" routerLinkActive=\"active\">click here</a>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.main-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    height: 100%;\r\n}\r\n\r\n.img{\r\n    max-width: 30vw;\r\n    min-width: 230px;\r\n    height: calc(100vh - 50px);\r\n}\r\n\r\n.settings-container{\r\n    padding: 16px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.settings-form{\r\n    width: 80%;\r\n    height: 100%;\r\n    position: relative;\r\n    min-width: 340px;\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-contant{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.form-item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 16px 0;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-label{\r\n    font-size: 24px;\r\n    padding: 8px 0;\r\n}\r\n\r\n.settings-container select{\r\n    border: 1px solid #59253a;\r\n    border-radius: 3px;\r\n    font-size: 16px;\r\n    width: 195px;\r\n    padding: 4px 8px;\r\n    max-height: 30px;\r\n}\r\n\r\n.category-container{\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.category-select-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.category-img{\r\n    max-width: 150px;\r\n    height: 100px;\r\n    margin: 16px;\r\n}\r\n\r\n.checkbox-container{\r\n    width: 195px;\r\n    text-align: center;\r\n}\r\n\r\n.settings-container input[type=\"checkbox\"]{\r\n    margin-right: 0;\r\n}\r\n\r\n.form-btn{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n\r\n.save-settings-btn{\r\n    padding: 5px 20px;\r\n    border-radius: 15px;\r\n    width: 200px;\r\n    background-color: #9e5a63;\r\n    color: white;\r\n    border: 1px solid #9e5a63;\r\n    font-size: 19px;\r\n}\r\n\r\n@media(max-width: 710px){\r\n    .category-container{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n    .form-item{\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .form-btn{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n}\r\n\r\n@media(max-width: 600px){\r\n    .img{\r\n        max-width: 100%;\r\n        height: 200px;\r\n    }\r\n    .main-container{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <img class=\"img\" src=\"assets/dice.jpg\">\r\n    <div class=\"settings-container\">\r\n        <form class=\"settings-form\" (ngSubmit)=\"onSaveSettings()\">\r\n            <div class=\"form-contant\">\r\n                <div class=\"form-item category-container\" >\r\n                    <div class=\"category-select-container\">\r\n                        <label class=\"form-label\">Category</label>\r\n                        <select name=\"category\" \r\n                            [(ngModel)]=\"selectedCategoryId\"\r\n                            (ngModelChange)=\"onSelsctedCategory()\">\r\n                            <option *ngFor=\"let category of categories\"\r\n                                    [value]=\"category.value\"> \r\n                                    {{category.displayName}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <img class=\"category-img\" *ngIf=\"selectedCategoryImg\" src=\"{{selectedCategoryImg}}\">\r\n                </div> \r\n                <div class=\"form-item\">\r\n                    <div class=\"category-select-container\">\r\n                        <label class=\"form-label\">Difficulty</label>\r\n                        <select name=\"difficulty\" [(ngModel)]=\"selectedDifficulty\">\r\n                            <option *ngFor=\"let difficulty of difficultyLevels\"\r\n                                    [value]=\"difficulty\">{{difficulty}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-item\">\r\n                    <label class=\"form-label\">Show correct answer</label>\r\n                    <div class=\"checkbox-container\">\r\n                        <input type=\"checkbox\" \r\n                               value=\"displayCorrectAnswer\" \r\n                               (click)=\"onShowCorrectAnswer()\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-btn\">\r\n                <button class=\"save-settings-btn\" type=\"submit\">Save Settings</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__("./src/app/enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, activatedRoute, router) {
        this.settingsService = settingsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.categories = [
            { displayName: "All Categories", value: 0 },
            { displayName: "General Knowledge", value: 9 },
            { displayName: "Books", value: 10 },
            { displayName: "Film", value: 11, img: "assets/film.png" },
            { displayName: "Music", value: 12, img: "assets/music.png" },
            { displayName: "Science & Nature", value: 17 },
            { displayName: "Television", value: 14 },
            { displayName: "Geography", value: 22, img: "assets/world-map.png" },
            { displayName: "Celebrities", value: 26 },
        ];
        this.difficultyLevels = [__WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].AnyDifficulty, __WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].Easy, __WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].Medium, __WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].Hard];
        this.displayCorrectAnswer = false;
        this.selectedCategoryId = 0;
        this.selectedDifficulty = __WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].AnyDifficulty;
    }
    SettingsComponent.prototype.onShowCorrectAnswer = function () {
        this.displayCorrectAnswer = !this.displayCorrectAnswer;
    };
    SettingsComponent.prototype.onSaveSettings = function () {
        this.settingsService.setCategory(this.selectedCategoryId);
        this.settingsService.setDifficulty(this.selectedDifficulty);
        this.router.navigate(["/trivia"]);
    };
    SettingsComponent.prototype.onSelsctedCategory = function () {
        var selectedCategory = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.categories, { value: parseInt(this.selectedCategoryId) });
        this.selectedCategoryImg = selectedCategory["img"];
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/pages/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/trivia/trivia.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.question-container{\r\n    width: 70%;\r\n    margin: auto;\r\n    padding: 20px 0;\r\n    height: 100%;    \r\n    display: -webkit-box;    \r\n    display: -ms-flexbox;    \r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.breadcrumb{\r\n    padding: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 200px;\r\n    margin: 0 auto;\r\n    padding: 16px 0;\r\n}\r\n\r\n.breadcrumb li{\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    list-style: none;\r\n    background-color: #C9CFD3;\r\n}\r\n\r\n.selected-breadcrumb{\r\n    background-color: #0D7BAB !important;\r\n}\r\n\r\n.backgroung-img{\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-image: url(\"/../../assets/dice.jpg\");\r\n    background-size: 30vw 100vh;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@media(max-width: 815px){\r\n    .question-container{\r\n        width: 85%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/pages/trivia/trivia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-container\" >\r\n    <app-question\r\n        *ngIf=\"questions\"\r\n        [questionData]=currentQuestion\r\n        (statusChange)=\"receiveMessage($event)\">\r\n    </app-question>\r\n    <ul class=\"breadcrumb\">\r\n      <li \r\n        *ngFor=\"let bc of questions; let i=index\" \r\n        [ngClass]=\"{'selected-breadcrumb': i<=index}\">\r\n      </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/trivia/trivia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_over_dialog_game_over_dialog_component__ = __webpack_require__("./src/app/game-over-dialog/game-over-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enum__ = __webpack_require__("./src/app/enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TriviaComponent = /** @class */ (function () {
    function TriviaComponent(data, dialog, settingsService) {
        this.data = data;
        this.dialog = dialog;
        this.settingsService = settingsService;
        this.correctAnswerCount = 0;
    }
    TriviaComponent.prototype.ngOnInit = function () {
        this.startNewGame();
    };
    TriviaComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogConfig */]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            correctAnswers: this.correctAnswerCount,
            totalQuestions: this.questions.length
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__game_over_dialog_game_over_dialog_component__["a" /* GameOverDialogComponent */], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.startNewGame();
        });
    };
    TriviaComponent.prototype.startNewGame = function () {
        var _this = this;
        this.index = 0;
        this.data.getData().subscribe(function (q) {
            _this.questions = q.results;
            _this.setCurrentQuestion();
            _this.correctAnswerCount = 0;
        });
    };
    TriviaComponent.prototype.setCurrentQuestion = function () {
        this.questions[this.index].index = this.index;
        this.currentQuestion = this.questions[this.index];
    };
    TriviaComponent.prototype.receiveMessage = function (status) {
        this.index++;
        if (this.index < this.questions.length) {
            this.setCurrentQuestion();
            this.currentQuestion.isLastQuestion = this.index + 1 >= this.questions.length;
        }
        if (status === __WEBPACK_IMPORTED_MODULE_4__enum__["b" /* Status */].RightAnswer) {
            this.correctAnswerCount++;
        }
        if (this.index === this.questions.length) {
            this.openDialog();
        }
    };
    TriviaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'trivia',
            template: __webpack_require__("./src/app/pages/trivia/trivia.component.html"),
            styles: [__webpack_require__("./src/app/pages/trivia/trivia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__services_settings_service__["a" /* SettingsService */]])
    ], TriviaComponent);
    return TriviaComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    height: 100%;\r\n}\r\n.question{\r\n    font-family: OpenSans;\r\n    font-size: 24px;\r\n    color: #223336;\r\n    letter-spacing: 0;\r\n}\r\n.question-number{\r\n    color: #0D7BAB;\r\n    font-size: 32px;\r\n}\r\n.question-text-container{\r\n    padding: 16px 0;\r\n    text-align: center;\r\n    min-width: 250px;\r\n}\r\n.answers-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    padding: 16px 0;\r\n}\r\n.verify-btn{\r\n    background-color: #9e5a63;\r\n    border: 1px solid #9e5a63;\r\n    border-radius: 30px;\r\n    margin: auto;\r\n    width: 205px;\r\n    height: 45px;\r\n    vertical-align:top;\r\n}\r\n.verify-btn:hover:not([disabled]){\r\n    background-color: #8a4a53 !important;\r\n    border: 1px solid #8a4a53;\r\n}\r\n.verify-btn-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.verify-btn-text{\r\n    font-family: OpenSans-Semibold;\r\n    font-size: 30px;\r\n    color: #FFFFFF;\r\n    letter-spacing: 0;\r\n    text-align: center;\r\n}\r\n.disabled-btn{\r\n    background-color: #F0F0F0;\r\n    border: 1px solid #F0F0F0;\r\n}\r\napp-answers{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}"

/***/ }),

/***/ "./src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-text-container\">\r\n  <span class=\"question question-number\">{{\"Q:\"+(questionData.index+1)}}</span>\r\n  <span class=\"question\" [innerHTML]=\"questionData.question\"></span>\r\n</div>\r\n<div class=\"answers-container\">\r\n  <app-answers \r\n    [answers]=answers\r\n    [status]=status \r\n    [correctAnswer]=_questionData.correct_answer\r\n    (MessageEvent)=\"receiveMessage($event)\">\r\n  </app-answers>\r\n</div>\r\n<div class=\"verify-btn-container\">\r\n  <button \r\n    class=\"verify-btn\" \r\n    *ngIf=\"!hideContinueBtn\" \r\n    (click)=\"sendMessage()\">\r\n    <span class=\"verify-btn-text\">Continue</span>\r\n  </button>\r\n  <button \r\n    class=\"verify-btn\" \r\n    *ngIf=\"hideContinueBtn\" \r\n    (click)=\"verifyAnswer()\" \r\n    [disabled]=\"!currentAnswer\"\r\n    [ngClass]=\"{'disabled-btn': !currentAnswer}\">\r\n    <span class=\"verify-btn-text\">OK</span>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__("./src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currentAnswer = null;
        this.hideContinueBtn = true;
    }
    Object.defineProperty(QuestionComponent.prototype, "questionData", {
        get: function () {
            return this._questionData;
        },
        set: function (questionData) {
            this._questionData = questionData;
            this.setAnswers();
        },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.setAnswers = function () {
        var random = Math.floor(Math.random() * Math.floor(3));
        this.questionData.incorrect_answers.splice(random, 0, this.questionData.correct_answer);
        this.answers = this.questionData.incorrect_answers;
    };
    QuestionComponent.prototype.sendMessage = function () {
        this.statusChange.emit(this.status);
        this.status = null;
        this.hideContinueBtn = true;
        this.currentAnswer = null;
    };
    QuestionComponent.prototype.receiveMessage = function (message) {
        this.currentAnswer = message;
        this.status = __WEBPACK_IMPORTED_MODULE_1__enum__["b" /* Status */].SelectedAnswer;
    };
    QuestionComponent.prototype.verifyAnswer = function () {
        this.status = __WEBPACK_IMPORTED_MODULE_1__enum__["b" /* Status */].WrongAnswer;
        if (this.currentAnswer === this._questionData.correct_answer) {
            this.status = __WEBPACK_IMPORTED_MODULE_1__enum__["b" /* Status */].RightAnswer;
        }
        this.hideContinueBtn = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "statusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], QuestionComponent.prototype, "questionData", null);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("./src/app/question/question.component.html"),
            styles: [__webpack_require__("./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enum__ = __webpack_require__("./src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
    }
    DataService.prototype.getData = function () {
        var settings = this.settingsService.getSettings();
        var category = settings.categoryId !== 0 ? "&category=" + settings.categoryId : "";
        var difficulty = settings.difficulty !== __WEBPACK_IMPORTED_MODULE_3__enum__["a" /* Difficulty */].AnyDifficulty ? "&difficulty=" + settings.difficulty.toLowerCase() : "";
        return this.http.get('https://opentdb.com/api.php?amount=10&type=multiple'
            + category + difficulty);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__("./src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            categoryId: 0,
            difficulty: __WEBPACK_IMPORTED_MODULE_1__enum__["a" /* Difficulty */].AnyDifficulty,
            displayCorrectAnswer: false
        };
    }
    SettingsService.prototype.setCategory = function (categoryId) {
        this.settings.categoryId = categoryId;
    };
    SettingsService.prototype.setDifficulty = function (difficulty) {
        this.settings.difficulty = difficulty;
    };
    SettingsService.prototype.setDisplayCorrectAnswer = function (displayCorrectAnswer) {
        this.settings.displayCorrectAnswer = displayCorrectAnswer;
    };
    SettingsService.prototype.getCategory = function () {
        return this.settings.categoryId;
    };
    SettingsService.prototype.getDifficulty = function () {
        return this.settings.difficulty;
    };
    SettingsService.prototype.getDisplayCorrectAnswer = function () {
        return this.settings.displayCorrectAnswer;
    };
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map