import { Injectable } from '@angular/core';
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IWord[] = [
    {word: 'dog', mean: 'con '},
    {word: 'cat', mean: 'con mèo'},
    {word: 'ruler', mean: 'cái thước '},
    {word: 'pen ', mean: 'cái bút'},
    {word: 'chicken', mean: 'con gà'},
    {word: 'dragon', mean: 'con rồng'},
  ];

  constructor() {
  }

  findAll() {
    return this.words;
  }

  findByWord(word: string) {
    return this.words.find(item => item.word === word);
  }
}
