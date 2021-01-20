import { Component } from '@angular/core';
import { WordsService } from './words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'everis-angular-testing';

  words: string[] = [];

  constructor(private readonly wordsService: WordsService) {
    this.words = this.wordsService.words;
  }
}
