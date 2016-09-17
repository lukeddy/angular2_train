import {Injectable} from '@angular/core';
import {Init} from './init.todos';


@Injectable()
export class TodoService extends Init{

    constructor(){
        super();
        console.log("todo service initialized...");
        this.load();
    }

    getTodos(){
        var todos=JSON.parse(localStorage.getItem('todos'));
        return todos;
    }
    
    addTodo(todoText){
        var newTodoObj={
            text:todoText
        }
       var todos=JSON.parse(localStorage.getItem('todos'));

       //添加新的TODO
       todos.push(newTodoObj);
       
       //刷新本地存储
       localStorage.setItem('todos',JSON.stringify(todos));
    }
    
   
    deleteTodo(todoIndex){
        var todos=this.getTodos();
        todos.splice(todoIndex,1);
        //刷新本地存储
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    updateTodo(todoIndex,newVal){
        var todos=JSON.parse(localStorage.getItem('todos'));
        console.log(todoIndex,newVal);
        todos[todoIndex].text=newVal;


        localStorage.setItem('todos',JSON.stringify(todos));

    }
}