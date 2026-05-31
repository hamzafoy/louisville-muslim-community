import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../services/language.service';
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle";

@Component({
  selector: 'app-islam',
  standalone: true,
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './islam.component.html',
  styleUrl: './islam.component.css'
})
export class IslamComponent {
public languageService = inject(LanguageService);
selectedLanguage: Language;

constructor() {
  this.selectedLanguage = this.languageService.selectedLanguage;
}

onLanguageChange(language: string) {
  this.selectedLanguage = language as Language;
}

}