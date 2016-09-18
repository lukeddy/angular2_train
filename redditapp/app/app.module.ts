import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent,ArticleComponent,RedditApp} from "./app.component";

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,ArticleComponent,RedditApp],
    bootstrap:[AppComponent]
})

export  class AppModule{}