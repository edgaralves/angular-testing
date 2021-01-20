import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: string[] = [
    'Jasmine',
    'Karma',
    'TestBed'
  ];

  add(word: string): void {
    this.words.push(word);
  }
}
