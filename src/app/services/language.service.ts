import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ar' | 'so';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private selectedLanguageSubject =
    new BehaviorSubject<Language>('en');

  selectedLanguage$ =
    this.selectedLanguageSubject.asObservable();

  get selectedLanguage(): Language {
    return this.selectedLanguageSubject.value;
  }

  setLanguage(language: Language): void {
    this.selectedLanguageSubject.next(language);
  }
}