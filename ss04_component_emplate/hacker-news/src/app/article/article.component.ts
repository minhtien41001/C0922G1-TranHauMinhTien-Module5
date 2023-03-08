import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Article} from "../model/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article:Article;
  articleList: Article[] = [
    {title:"Tan anh hung:",url:"https://www.youtube.com/watch?v=aa7dds7oIBA"},
    {title:"Dan Nguyen Remix:",url:"https://www.youtube.com/watch?v=Mn1VbihXmEg"},
    {title:"Trong Tan Remix",url:"https://www.youtube.com/watch?v=6rkEZVgfPBk"},
  ];
  constructor() {
    this.article = {}
  }

  ngOnInit(): void {

  }

  add() {
    this.articleList.push(this.article);
  }
}
