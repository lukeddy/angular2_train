import {Component} from '@angular/core';
import {TodoService} from './service/todo.service';

@Component({
    selector:'my-app',
    templateUrl:'./template/myapp-template.html',
    providers:[TodoService]
})

export class AppComponent{}