import {Component,Input} from '@angular/core';


@Component({
    selector:'search-box',
    template:'<input placeholder="{{text}}" #search/>' +
    '<button (click)="clear(search)" class="btn-clear">清空</button>',
    styles:['.btn-clear{background:red;color:#fff;}']
})


export class SearchBox {
    @Input("placeholdervalue")
    text = '请输入关键字';

    clear(input){
        console.log("clear things.");
        //console.log(input);
        input.value='';
    }
}