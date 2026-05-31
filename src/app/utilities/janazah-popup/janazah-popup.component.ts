import { CommonModule } from '@angular/common';
import {Component, inject, Inject} from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MATERIAL_IMPORTS } from '../../angular-material';
import { LayoutService } from '../../services/layout.service';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'janazah-popup',
  standalone: true,
  imports: [CommonModule, MATERIAL_IMPORTS, TranslatePipe],
  templateUrl: './janazah-popup.component.html',
  styleUrl: './janazah-popup.component.css'
})
export class JanazahPopupComponent {

  constructor(
    private layoutService: LayoutService,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  snackbarRef = inject(MatSnackBarRef);
  public languageService = inject(LanguageService);

    //Layout Service Methods
    get IsMobileViewport() { return this.layoutService.isMobile; }
    get IsTabletViewport() { return this.layoutService.isTablet; }
    get IsLaptopViewport() { return this.layoutService.isLaptop; }
    get IsLargeViewport() { return this.layoutService.isLarge; }
    get IsXLargeViewport() { return this.layoutService.isXLarge; }

}