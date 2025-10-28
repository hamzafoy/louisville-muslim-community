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
  selector: 'app-masaajid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './masaajid.component.html',
  styleUrl: './masaajid.component.css'
})
export class MasaajidComponent {
  currentIndex = signal(0);
  startX = 0;
  isDragging = false;

  cards: CardData[] = [
    {
      id: 1,
      title: 'Al-Nur Mosque Islamic Center',
      description: '2815 S 4th St, Louisville KY 40208',
      content: 'Swipe or use the arrow buttons to explore different cards. This interface adapts seamlessly to both desktop and mobile devices.'
    },
    {
      id: 2,
      title: 'Bosniak American Islamic Center',
      description: '5927 Six Mile Ln, Louisville KY 40218',
      content: 'This component is fully responsive and optimized for touch gestures on mobile devices and click navigation on desktop.'
    },
    {
      id: 3,
      title: 'Diyanet Turkish Islamic Center',
      description: '4604 Bardstown Rd, Louisville KY 40218',
      content: 'Focus on what matters with a distraction-free interface that emphasizes readability and ease of use.'
    },
    {
      id: 4,
      title: 'Guiding Light Islamic Center',
      description: '6500 Six Mile Ln, Louisville KY 40218',
      content: 'Experience smooth transitions, intuitive navigation, and a clean design that puts your content front and center.'
    },
    {
      id: 5,
      title: 'HIRA Indiana',
      description: '2015 Allison Ln, Jeffersonville IN 47130',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 6,
      title: 'HIRA Institute',
      description: '3819 Bardstown Rd, Louisville KY 40218',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 7,
      title: 'Islamic Center of Louisville',
      description: '1715 S 4th St, Louisville KY 40208',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 8,
      title: 'Louisville African Islamic Community Center',
      description: '4000 Bardstown Rd, Louisville KY 40218',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 9,
      title: 'Louisville Islamic Center',
      description: '4007 River Rd, Louisville KY 40207',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 10,
      title: 'Masjid Abubakar',
      description: '1536 S 7th St, Louisville KY 40208',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 11,
      title: 'Masjid al-Hidaya',
      description: '5309 Mitscher Ave, Louisville KY 40214',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 12,
      title: 'Masjid Bilal Southside',
      description: '6200 S 3rd St, Louisville KY 40214',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 13,
      title: 'Masjid Bilal West',
      description: '1701 Dumesnil St, Louisville KY 40210',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
    },
    {
      id: 14,
      title: 'Muslim Community Center of Louisville',
      description: '8215 Old Westport Rd, Louisville KY 40222',
      content: 'Easily adapt this component to your needs by modifying the card data, styles, and behavior to match your application.'
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
