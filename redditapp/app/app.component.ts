import {Component} from '@angular/core';
import {Article} from "./model/article";

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
    <li class="list-group-item media">
    <div class="media-left" style="background:gray;font-size:23px;padding:20px;">
       <span> {{ article.votes }}</span>
    </div>
    <div class="media-body">
        <h3 class="media-heading">
          <a class="btn btn-link" href="{{ article.link }}"> 
            {{ article.title }}
           </a>
           <span class="meta">({{ article.domain() }})</span>
        </h3>
        <h5>
          <a href="javascript:;" class="thumbsup" (click)="voteUp()">
                <i class="glyphicon glyphicon-thumbs-up"></i> 赞 
          </a>
          <a href="javascript:;" class="thumbsdown" (click)="voteDown()">
                <i class="glyphicon glyphicon-thumbs-down"></i> 踩 
          </a> 
        </h5> 
    </div>
    </li>
    `
})

export class ArticleComponent {

    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}

@Component({
    selector: 'reddit',
    template: ` 
        <div class="col-md-3">
        <form class="">
          <legend>新增区域</legend>
              <div class="form-group">
                  <label for="title">标题:</label>
                  <input name="title" #newtitle>
              </div>
              <div class="form-group">
                  <label for="link">网址:</label>
                  <input name="link" #newlink>
              </div>
              <button type="button" (click)="addArticle(newtitle, newlink)" class="btn btn-success pul-right">
                 添加内容
              </button>
        </form>
        </div>
        <div class="col-md-9" style="border-left:1px solid gray;">
            <legend>内容区</legend>
            <ul class="list-group">
              <reddit-article *ngFor='let foobar of sortedArticles()' [article]="foobar">
              </reddit-article>
            </ul>
        </div>
    `,
})

export class RedditApp {

    articles: Article[];

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}

@Component({
    selector: 'my-app',
    templateUrl: './template/myapp-template.html'
})

export class AppComponent {}