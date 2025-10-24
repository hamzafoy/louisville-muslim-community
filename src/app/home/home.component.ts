import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MATERIAL_IMPORTS } from '../angular-material';
import { CommonModule } from '@angular/common';
import { JanazahPopupComponent } from '../utilities/janazah-popup/janazah-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MATERIAL_IMPORTS, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  private _snackbar = inject(MatSnackBar)
  janazahToday: boolean = true;

  ngOnInit(): void {
    if (this.janazahToday) {
      this._snackbar.openFromComponent(JanazahPopupComponent, {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        data: {
          date: 'Saturday, 26th April',
          time: '3:00 PM',
          location: 'Guiding Light Islamic Center',
          name: 'John Doe'
        }
      });
    }
  }

}