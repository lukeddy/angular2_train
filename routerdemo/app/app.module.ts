import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';

import { AppComponent }   from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ReadmoreComponent} from './components/pages/readmore.component';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  FooterComponent,
                  HomeComponent,
                  AboutComponent,
                  ReadmoreComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
