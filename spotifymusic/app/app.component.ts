import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:
        `
         <navbar></navbar>
         <div class="main">
         <div class="container">
                <router-outlet></router-outlet>
         </div></div>
	    `
})

export class AppComponent{}