import { TestBed } from '@angular/core/testing';

import { WordsService } from './words.service';

describe('WordsService', () => {
  let service: WordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the new word "Testing"', () => {
    service.add('Testing');
    expect(service.words).toContain('Testing');
  });
});
