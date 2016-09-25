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
var SelectComponent = (function () {
    function SelectComponent() {
        // 当改变了选择时给父组件发送事件
        this.eventEmitter = new core_1.EventEmitter();
    }
    SelectComponent.prototype.ngOnInit = function () {
        console.log("do some init starff");
    };
    SelectComponent.prototype.onSelect = function (idx) {
        console.log(idx);
        console.log(this.list[0]);
        var idxNum = parseInt(idx);
        var currItem = this.list[idxNum];
        this.eventEmitter.emit({ id: currItem.id, text: currItem.text, index: idxNum });
    };
    __decorate([
        core_1.Input('selectId'), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "selectId", void 0);
    __decorate([
        core_1.Input('list'), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "list", void 0);
    __decorate([
        core_1.Output('selectChangeCallback'), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "eventEmitter", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'my-select',
            template: '<select (change)="onSelect($event.target.value)" class="form-control">' +
                '<option *ngFor="let item of list;let idx=index" value="{{idx}}">' +
                '{{item.text}}' +
                '</option>' +
                '</select>'
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map