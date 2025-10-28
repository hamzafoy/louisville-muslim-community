import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CardData {
  id: number;
  title: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {
  currentIndex = signal(0);
  startX = 0;
  isDragging = false;

  cards: CardData[] = [
    {
      id: 1,
      title: 'HIRA Institute',
      description: '3819 Bardstown Rd, Louisville KY 40218',
      content: 'Swipe or use the arrow buttons to explore different cards. This interface adapts seamlessly to both desktop and mobile devices.'
    },
    {
      id: 2,
      title: 'Islamic School of Louisville',
      description: '8215 Old Westport Rd, Louisville KY 40222',
      content: 'This component is fully responsive and optimized for touch gestures on mobile devices and click navigation on desktop.'
    },
    {
      id: 3,
      title: 'Nur Islamic School of Louisville',
      description: '6500 Six Mile Ln, Louisville KY 40218',
      content: 'Focus on what matters with a distraction-free interface that emphasizes readability and ease of use.'
    }
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
}
