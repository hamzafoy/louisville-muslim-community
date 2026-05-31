import { Injectable } from '@angular/core';

import en from '../../../public/i18n/en.json';
import ar from '../../../public/i18n/ar.json'
import so from '../../../public/i18n/so.json'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: Record<'en' | 'ar' | 'so', Record<string, string>> = {
    en,
    ar,
    so
  };

  getTranslation(
    key: string,
    language: 'en' | 'ar' | 'so'
  ): string {
    return this.translations[language][key] ?? key;
  }
  
}