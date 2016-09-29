import { Component} from '@angular/core';
import { Hero } from '../model/hero';


@Component({
    selector: 'hero-form',
    templateUrl: './template/hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['能量1', '能量2', '能量3'];

    myHero = new Hero(18, '小强', this.powers[0], 'Strong,Kind,Friendly,Brave');


    submitted = false;

    onsubmit() { this.submitted = true };

    get diagnotic() { return JSON.stringify(this.myHero); }

    createHero(){
        this.myHero=new Hero(20,"强强新英雄",this.powers[1],"吊炸天1.0");
    }
}