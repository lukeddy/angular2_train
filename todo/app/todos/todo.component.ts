import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";

@Component({
    moduleId: module.id,
    selector:'todo',
    templateUrl:'todo.component.html',
    styleUrls:['todo.component.css']
})

export class TodoComponent implements OnInit{

    todos;
    text;
    todoIdx;
    appState='default';

    constructor(private _todoService:TodoService){}


    ngOnInit(): void {
        this.todos=this._todoService.getTodos();
    }

    addTodo(){
        console.log(this.text);       
        this._todoService.addTodo(this.text);
        //重新加载数据刷新界面
        this.todos=this._todoService.getTodos();
    }


    deleteTodo(idx){
        console.log("delete todo {} {}",idx,this.todos[idx]);
        this._todoService.deleteTodo(idx);
        //重新加载数据刷新界面
        this.todos=this._todoService.getTodos();
    }

    editTodo(idx,oldTxt){
        this.appState='edit';
        this.text=oldTxt;
        this.todoIdx=idx;
    }

    updateTodo(){
        console.log("update");
        this._todoService.updateTodo(this.todoIdx,this.text);
        //重新加载数据刷新界面
        this.todos=this._todoService.getTodos();
    }
}