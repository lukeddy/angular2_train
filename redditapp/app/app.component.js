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
var article_1 = require("./model/article");
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
            host: {
                class: 'row'
            },
            template: "\n    <li class=\"list-group-item media\">\n    <div class=\"media-left\">\n       <span class=\"num\"> {{ article.votes }}</span>\n    </div>\n    <div class=\"media-body\">\n        <h3 class=\"media-heading\">\n          <a href=\"{{ article.link }}\"> \n            {{ article.title }}\n           </a>\n           <span class=\"meta\">({{ article.domain() }})</span>\n        </h3>\n        <h5>\n          <a href=\"javascript:;\" class=\"thumbsup\" (click)=\"voteUp()\">\n                <i class=\"glyphicon glyphicon-thumbs-up\"></i> \u8D5E \n          </a>\n          <a href=\"javascript:;\" class=\"thumbsdown\" (click)=\"voteDown()\">\n                <i class=\"glyphicon glyphicon-thumbs-down\"></i> \u8E29 \n          </a> \n        </h5> \n    </div>\n    </li>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new article_1.Article('Angular 2', 'http://angular.io', 3),
            new article_1.Article('Fullstack', 'http://fullstack.io', 2),
            new article_1.Article('Angular Cli', 'http://cli.angular.io', 1),
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value + " and link: " + link.value);
        this.articles.push(new article_1.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    RedditApp.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            template: " \n        <div class=\"col-md-3\">\n        <form class=\"\">\n          <legend>\u65B0\u589E\u533A\u57DF</legend>\n              <div class=\"form-group\">\n                  <label for=\"title\">\u6807\u9898:</label>\n                  <input name=\"title\" #newtitle>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"link\">\u7F51\u5740:</label>\n                  <input name=\"link\" #newlink>\n              </div>\n              <button type=\"button\" (click)=\"addArticle(newtitle, newlink)\" class=\"btn btn-success pul-right\">\n                 \u6DFB\u52A0\u5185\u5BB9\n              </button>\n        </form>\n        </div>\n        <div class=\"col-md-9\" style=\"border-left:1px solid gray;\">\n            <legend>\u5185\u5BB9\u533A</legend>\n            <ul class=\"list-group\">\n              <reddit-article *ngFor='let foobar of sortedArticles()' [article]=\"foobar\">\n              </reddit-article>\n            </ul>\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
}());
exports.RedditApp = RedditApp;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './template/myapp-template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map