import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {} from './app.component';
import {AppComponent} from "./app.component";
import {SelectComponent} from './select/select.component';

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,SelectComponent],
    bootstrap:[AppComponent]
})

export  class AppModule{}