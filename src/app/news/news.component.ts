import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MATERIAL_IMPORTS } from '../angular-material';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { LanguageService, Language } from '../services/language.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, MATERIAL_IMPORTS, SafeUrlPipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent implements OnInit, OnDestroy {
  public languageService = inject(LanguageService);
  selectedLanguage: Language;
  private destroy$ = new Subject<void>();
  tickerItems: string[] = [];
  defaultTickerItems: string[] = [
    'The Louisville Muhsineen is proud to serve our local community.',
    'Follow us on Instagram, Facebook, & on YouTube',
    'May Allah bless you and your family with health, happiness, and prosperity.'
  ];

  constructor() { 
    this.selectedLanguage = this.languageService.selectedLanguage;
  }
  mainCalendar: string = 'mensuhbaoflou%40gmail.com';
  bilalWestCalendar: string = '0dd9c26ffc5f433ee0c668439e81fe4446605a18b4d57c59912588c25842a899%40group.calendar.google.com';
  bilalSouthCalendar: string = '6636f783f8b3f21a440239183eda0652e4b4e3d1f1281215421a955a1aebccdc@group.calendar.google.com';
  alNurCalendar: string = '7f91766cf4999e7914433ba67913e19c4ae058dd58f32bc96085506cc17f2a7f@group.calendar.google.com';
  miscCalendar: string = '69b2cf829cc52dbff02b029b9aff33e31ac0b3851c2e4e8b68341a26106b88cd@group.calendar.google.com';
  riverRoadCalendar: string = '6fee8d8c8e7f33690e5cd6a265b5f8083d2d57baedfba833e443cd300aaa32a8@group.calendar.google.com';
  iclCalendar: string = 'e676c86673c798ede0088444ee649909af809d2e1dabea292681ef6f79c09223@group.calendar.google.com';
  glicCalendar: string = '75b25d5f81fb0f13b715b800579cf9f60b4fd9adc954af88529a43c8d3d47665@group.calendar.google.com';
  hiraCalendar: string = '16d6d8dcaf5fc1f3108e6e5b319fe1d1991e7e41d8e35d8bfb0f95fc5b773e95@group.calendar.google.com';
  mccCalendar: string = '320176890ab2543854c7feff45e47ab9b218f6c6acf8b7ca2979ddf88887f7cf@group.calendar.google.com';
  scclIncCalendar: string = 'd18502a2629c48fa1d1ba00efc850e6bc3d92f60fd35dd9b5221bc348e05b8e9@group.calendar.google.com';
  abuBakrCalendar: string = '0e345af24f0b91656c99cba91d753de18321c8698ce4a94ca149db3b22d3db45@group.calendar.google.com';
  oneTimeEvents: string = 'f73f229d96920cd7dca4da4555c05461a501a4a61df25770bd2162b15ed34ee9@group.calendar.google.com';
  gCalendarUrl: string = `https://calendar.google.com/calendar/embed?src=${this.mainCalendar}&src=${this.oneTimeEvents}&src=${this.abuBakrCalendar}&src=${this.scclIncCalendar}&src=${this.bilalWestCalendar}&src=${this.bilalSouthCalendar}&src=${this.alNurCalendar}&src=${this.riverRoadCalendar}&src=${this.iclCalendar}&src=${this.glicCalendar}&src=${this.hiraCalendar}&src=${this.mccCalendar}&src=${this.miscCalendar}&ctz=America%2FNew_York`;

  ngOnInit(): void {
    this.getTickerTape();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language as Language;
  }

  private getTickerTape(): void {
    this.tickerItems = this.defaultTickerItems;
  }

}