import {Component,Input} from '@angular/core';


@Component({
    selector:'search-box',
    template:'<input placeholder="{{text}}"/><button>清空</button>'
})


export class SearchBox {
    @Input("placeholdervalue")
    text = '请输入关键字';
}