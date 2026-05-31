import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { LanguageService, Language } from '../services/language.service';
import { MATERIAL_IMPORTS } from '../angular-material';

interface CardData {
  id: number;
  title: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-masaajid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MATERIAL_IMPORTS],
  templateUrl: './masaajid.component.html',
  styleUrl: './masaajid.component.css'
})

export class MasaajidComponent {
  public languageService = inject(LanguageService);
  selectedLanguage: Language;
  constructor(private http: HttpClient) {
    this.http.get<CardData[]>('/masaajid-cards.json').subscribe(data => {
      this.cards = data;
    });
    this.selectedLanguage = this.languageService.selectedLanguage;
  }
  
  currentIndex = signal(0);
  startX = 0;
  isDragging = false;

  cards: CardData[] = [
    
  ];

  get currentCard() {
    return this.cards[this.currentIndex()];
  }

  get isFirstCard() {
    return this.currentIndex() === 0;
  }

  get isLastCard() {
    return this.currentIndex() === this.cards.length - 1;
  }

  navigatePrevious() {
    if (!this.isFirstCard) {
      this.currentIndex.update(i => i - 1);
    }
  }

  navigateNext() {
    if (!this.isLastCard) {
      this.currentIndex.update(i => i + 1);
    }
  }

  goToCard(index: number) {
    this.currentIndex.set(index);
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;

    const endX = event.changedTouches[0].clientX;
    const diffX = this.startX - endX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && !this.isLastCard) {
        this.navigateNext();
      } else if (diffX < 0 && !this.isFirstCard) {
        this.navigatePrevious();
      }
    }

    this.isDragging = false;
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language as Language;
  }

}
