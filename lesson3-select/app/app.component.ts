import {Component} from '@angular/core';

@Component({
     selector:'my-app',
     templateUrl:'./template/myapp-template.html'
})

export class AppComponent{
    list = [
        {id:1,text:'iPhone'},
        {id:2,text:'iPad'},
        {id:3,text:'MacBook'},
        {id:4,text:'iPod'}
    ];

    selectId = 1;


    onSelectChanged(e:any) {

        console.log("pargent get selected:");
        console.log(e);
        this.selectId = e.id;
    }
}