"use strict";
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
var todo_service_1 = require("../service/todo.service");
var TodoComponent = (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.appState = 'default';
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todos = this._todoService.getTodos();
    };
    TodoComponent.prototype.addTodo = function () {
        console.log(this.text);
        this._todoService.addTodo(this.text);
        //重新加载数据刷新界面
        this.todos = this._todoService.getTodos();
    };
    TodoComponent.prototype.deleteTodo = function (idx) {
        console.log("delete todo {} {}", idx, this.todos[idx]);
        this._todoService.deleteTodo(idx);
        //重新加载数据刷新界面
        this.todos = this._todoService.getTodos();
    };
    TodoComponent.prototype.editTodo = function (idx, oldTxt) {
        this.appState = 'edit';
        this.text = oldTxt;
        this.todoIdx = idx;
    };
    TodoComponent.prototype.updateTodo = function () {
        console.log("update");
        this._todoService.updateTodo(this.todoIdx, this.text);
        //重新加载数据刷新界面
        this.todos = this._todoService.getTodos();
    };
    TodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo',
            templateUrl: 'todo.component.html',
            styleUrls: ['todo.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map