import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent{
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;

	constructor(){
		this.jbtHeading = 'Angular2 One Framework,One World!';
		this.jbtText = 'ANGULAR2 一个框架，构建跨平台应用。从此Easy';
		this.jbtBtnText = '更多...';
		this.jbtBtnUrl = '/more';
	}
}