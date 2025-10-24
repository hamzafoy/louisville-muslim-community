import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './angular-material';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LayoutService } from './services/layout.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MATERIAL_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('expand', [
      state('false', style({ display: 'none', opacity: 0, height: '0', overflow: 'hidden' })),
      state('true', style({ display: 'flex', opacity: 1, height: '*' })),
      transition('* <=> *', animate('200ms ease'))
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor(private layoutService: LayoutService, private _changeDetectorRef: ChangeDetectorRef) {}

  //Layout Service Methods
  get IsMobileViewport() { return this.layoutService.isMobile; }
  get IsTabletViewport() { return this.layoutService.isTablet; }
  get IsLaptopViewport() { return this.layoutService.isLaptop; }
  get IsLargeViewport() { return this.layoutService.isLarge; }
  get IsXLargeViewport() { return this.layoutService.isXLarge; }

  // Mobile Menu Toggle
  isMobileMenuOpen: boolean = false;
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  ngOnInit(): void {

  }
  
}