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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var search_component_1 = require("./search/search.component");
var App = (function () {
    function App() {
    }
    App.prototype.appSearch = function (text) {
        alert('Called APP Method,value is:' + text);
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template:'你好Angular2,我是app.ts中的内容!'
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
var AppMudule = (function () {
    function AppMudule() {
    }
    AppMudule = __decorate([
        core_1.NgModule({
            declarations: [App, search_component_1.SearchBox],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppMudule);
    return AppMudule;
}());
exports.AppMudule = AppMudule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppMudule);
//# sourceMappingURL=app.js.map