"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var init_todos_1 = require('./init.todos');
var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService() {
        _super.call(this);
        console.log("todo service initialized...");
        this.load();
    }
    TodoService.prototype.getTodos = function () {
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    };
    TodoService.prototype.addTodo = function (todoText) {
        var newTodoObj = {
            text: todoText
        };
        var todos = JSON.parse(localStorage.getItem('todos'));
        //添加新的TODO
        todos.push(newTodoObj);
        //刷新本地存储
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.deleteTodo = function (todoIndex) {
        var todos = this.getTodos();
        todos.splice(todoIndex, 1);
        //刷新本地存储
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.updateTodo = function (todoIndex, newVal) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todoIndex, newVal);
        todos[todoIndex].text = newVal;
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}(init_todos_1.Init));
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map