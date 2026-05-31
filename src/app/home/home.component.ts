import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MATERIAL_IMPORTS } from '../angular-material';
import { CommonModule } from '@angular/common';
import { JanazahPopupComponent } from '../utilities/janazah-popup/janazah-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle";
import { Language, LanguageService } from '../services/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MATERIAL_IMPORTS, RouterLink, MatButtonToggleGroup, MatButtonToggle, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public languageService = inject(LanguageService);
  selectedLanguage: Language;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.selectedLanguage = this.languageService.selectedLanguage;
  }

  private _snackbar = inject(MatSnackBar)
  janazahToday: boolean = true;

  ngOnInit(): void {
    if (this.janazahToday) {
      this._snackbar.openFromComponent(JanazahPopupComponent, {
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        data: {
          date: 'Saturday, 26th April',
          time: '3:00 PM',
          location: 'Guiding Light Islamic Center',
          address: '6500 Six Mile Ln, Louisville, KY 40218',
          name: 'Br. Fulaan Abu Fulaan'
        },
        panelClass: ['janazah-snackbar']
      });
    }
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language as Language;
  }

}