import { Component, OnInit } from '@angular/core';
import {IWord} from '../../model/i-word';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.words = this.dictionaryService.findAll();
  }

}
