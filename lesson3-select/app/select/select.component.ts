import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector:'my-select',
    template:'<select (change)="onSelect($event.target.value)" class="form-control">' +
    '<option *ngFor="let item of list;let idx=index" value="{{idx}}">' +
    '{{item.text}}' +
    '</option>' +
    '</select>'
})


export class SelectComponent implements OnInit{
    // 默认选择第一个
    @Input('selectId')
    private selectId: boolean;
    // 父组件传递进来的参数
    @Input('list')
    private list:any;
    // 当改变了选择时给父组件发送事件
    @Output('selectChangeCallback')
    private eventEmitter = new EventEmitter();


    ngOnInit(): void {
        console.log("do some init starff");
    }

    onSelect(idx) {
        console.log(idx);
        console.log(this.list[0]);
        const idxNum=parseInt(idx);
        const currItem=this.list[idxNum];
        this.eventEmitter.emit({id:currItem.id,text:currItem.text,index:idxNum})
    }

}