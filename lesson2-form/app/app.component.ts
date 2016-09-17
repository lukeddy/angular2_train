import {Component} from '@angular/core';
import {Lesson} from "./model/lesson";

@Component({
    selector:'my-app',
    // template:'<h5 class="well"><i class="glyphicon glyphicon-thumbs-up"></i> 你好，Angular2,我是来自angular2的内容</h5>'
    templateUrl:'./template/myapp-template.html'
})

export class AppComponent{
    lesson=new Lesson();

    createLesson(){
        console.log("lesson value:",this.lesson);
        debugger;
    }
}