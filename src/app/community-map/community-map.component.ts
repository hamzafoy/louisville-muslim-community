import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../services/language.service';
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle";

@Component({
  selector: 'app-community-map',
  standalone: true,
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './community-map.component.html',
  styleUrl: './community-map.component.css'
})
export class CommunityMapComponent {
  public languageService = inject(LanguageService);
  selectedLanguage: Language;
  constructor() {
      this.selectedLanguage = this.languageService.selectedLanguage;
  }

  onLanguageChange(language: string) {
      this.selectedLanguage = language as Language;
  }

}
