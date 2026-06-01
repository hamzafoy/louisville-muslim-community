import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MATERIAL_IMPORTS } from './angular-material';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LayoutService } from './services/layout.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, TranslatePipe, MATERIAL_IMPORTS],
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
export class AppComponent implements OnInit, OnDestroy {
  selectedNavItem: string = 'home';
  private destroy$ = new Subject<void>();

  constructor(private layoutService: LayoutService, private _changeDetectorRef: ChangeDetectorRef, private router: Router) {}

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
    // Set initial selected nav item based on current route
    this.updateSelectedNavItem();

    // Listen to route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateSelectedNavItem();
      });
  }

  private updateSelectedNavItem(): void {
    const urlSegments = this.router.url.split('/');
    const currentRoute = urlSegments[1] || 'home'; // Get first segment after '/'
    this.selectedNavItem = currentRoute || 'home';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}