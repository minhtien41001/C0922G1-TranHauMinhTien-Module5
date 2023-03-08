import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  like:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  vote() {
    this.like++;
  }
}
