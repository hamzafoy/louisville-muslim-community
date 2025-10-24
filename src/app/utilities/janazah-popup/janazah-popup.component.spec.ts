import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanazahPopupComponent } from './janazah-popup.component';

describe('JanazahPopupComponent', () => {
  let component: JanazahPopupComponent;
  let fixture: ComponentFixture<JanazahPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanazahPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanazahPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
