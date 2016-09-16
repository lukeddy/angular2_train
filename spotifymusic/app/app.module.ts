import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from "./app.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';


@NgModule({
    imports:[BrowserModule,HttpModule,FormsModule,routing],
    declarations:[AppComponent,NavbarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent],
    bootstrap:[AppComponent]
})

export  class AppModule{}