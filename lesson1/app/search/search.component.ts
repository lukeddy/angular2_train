import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector:'search-box',
    template:'<input placeholder="{{text}}" #search  (keydown.enter)="onSearch(search.value)"/>' +
    '<button (click)="clear(search)" class="btn-clear">清空</button>',
    styleUrls:['style/search.component.css']
})


export class SearchBox {
    @Input("placeholdervalue")
    text = '请输入关键字';

    //组件间数据交互注解
    @Output()
    searchEmitter=new EventEmitter();

    onSearch(searchTxt){
        //alert(searchTxt);
        this.searchEmitter.emit(searchTxt);
    }


    clear(input){
        console.log("clear things.");
        input.value='';
    }
}