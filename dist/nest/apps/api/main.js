/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootModule": () => (/* reexport safe */ _root_module__WEBPACK_IMPORTED_MODULE_0__.RootModule)
/* harmony export */ });
/* harmony import */ var _root_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootModule": () => (/* binding */ RootModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _natalia_nest_ui_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



let RootModule = class RootModule {
};
RootModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [_natalia_nest_ui_todo__WEBPACK_IMPORTED_MODULE_2__.UiTodoModule],
    })
], RootModule);



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoController": () => (/* reexport safe */ _todo_controller__WEBPACK_IMPORTED_MODULE_0__.TodoController),
/* harmony export */   "UiTodoModule": () => (/* reexport safe */ _todo_module__WEBPACK_IMPORTED_MODULE_1__.UiTodoModule)
/* harmony export */ });
/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);




/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoController": () => (/* binding */ TodoController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _natalia_nest_services_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a, _b, _c, _d, _e, _f, _g;




let TodoController = class TodoController {
    constructor(_todoService) {
        this._todoService = _todoService;
    }
    todos() {
        return this._todoService.todos();
    }
    createTodo(args) {
        return this._todoService.createTodo(args);
    }
    updateTodo(args) {
        return this._todoService.updateTodo(args);
    }
    deleteTodo(args) {
        return this._todoService.deleteTodo(args);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Get)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Array)
], TodoController.prototype, "todos", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Post)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoCreateArgs !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoCreateArgs) === "function" ? _a : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_b = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo) === "function" ? _b : Object)
], TodoController.prototype, "createTodo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Put)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_c = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoUpdateArgs !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoUpdateArgs) === "function" ? _c : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_d = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo) === "function" ? _d : Object)
], TodoController.prototype, "updateTodo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Delete)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_e = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoDeleteArgs !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodoDeleteArgs) === "function" ? _e : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_f = typeof _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo !== "undefined" && _natalia_nest_interfaces_todo__WEBPACK_IMPORTED_MODULE_1__.ITodo) === "function" ? _f : Object)
], TodoController.prototype, "deleteTodo", null);
TodoController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Controller)('todos'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_g = typeof _natalia_nest_services_todo__WEBPACK_IMPORTED_MODULE_2__.TodoService !== "undefined" && _natalia_nest_services_todo__WEBPACK_IMPORTED_MODULE_2__.TodoService) === "function" ? _g : Object])
], TodoController);



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _todo_gateways__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _todo_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _todo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _todo_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);







/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesTodoModule": () => (/* reexport safe */ _todo_module__WEBPACK_IMPORTED_MODULE_0__.ServicesTodoModule),
/* harmony export */   "TodoService": () => (/* reexport safe */ _todo_service__WEBPACK_IMPORTED_MODULE_1__.TodoService)
/* harmony export */ });
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);




/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesTodoModule": () => (/* binding */ ServicesTodoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);



let ServicesTodoModule = class ServicesTodoModule {
};
ServicesTodoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({ providers: [_todo_service__WEBPACK_IMPORTED_MODULE_2__.TodoService], exports: [_todo_service__WEBPACK_IMPORTED_MODULE_2__.TodoService] })
], ServicesTodoModule);



/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoService": () => (/* binding */ TodoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let TodoService = class TodoService {
    constructor() {
        this._todos = [];
    }
    todos() {
        return this._todos;
    }
    createTodo(args) {
        const todo = Object.assign({ id: this._todos.reduce((id, todo) => {
                return id > todo.id ? id : todo.id + 1;
            }, 1) }, args.data);
        this._todos.push(todo);
        return todo;
    }
    updateTodo(args) {
        let todo;
        this._todos.forEach((todo, index) => {
            if (todo.id === args.where.id) {
                todo = this._todos[index] = Object.assign(Object.assign({}, todo), args.data);
            }
        });
        return todo;
    }
    deleteTodo(args) {
        for (let [index, todo] of this._todos.entries()) {
            if (todo.id === args.where.id) {
                this._todos.splice(index, 1);
                return todo;
            }
        }
    }
};
TodoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], TodoService);



/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiTodoModule": () => (/* binding */ UiTodoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _natalia_nest_services_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




let UiTodoModule = class UiTodoModule {
};
UiTodoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        controllers: [_todo_controller__WEBPACK_IMPORTED_MODULE_3__.TodoController],
        imports: [_natalia_nest_services_todo__WEBPACK_IMPORTED_MODULE_2__.ServicesTodoModule],
    })
], UiTodoModule);



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




_nestjs_core__WEBPACK_IMPORTED_MODULE_2__.NestFactory.create(_root__WEBPACK_IMPORTED_MODULE_3__.RootModule).then((app) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const globalPrefix = 'api';
    const port = process.env.PORT || 3333;
    app.enableCors();
    app.setGlobalPrefix(globalPrefix);
    app.listen(port, () => {
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
    });
}));

})();

/******/ })()
;