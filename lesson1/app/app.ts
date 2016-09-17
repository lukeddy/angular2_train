import {Component,NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {SearchBox} from "./search/search.component";

@Component({
    selector:'my-app',
    // template:'你好Angular2,我是app.ts中的内容!'
    templateUrl:'app.html'
})

export class App{

}

@NgModule({
    declarations:[App,SearchBox],
    imports:[BrowserModule],
    bootstrap:[App]
})

export class AppMudule{}

platformBrowserDynamic().bootstrapModule(AppMudule);