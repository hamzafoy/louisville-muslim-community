import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasaajidComponent } from './masaajid.component';

describe('MasaajidComponent', () => {
  let component: MasaajidComponent;
  let fixture: ComponentFixture<MasaajidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasaajidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasaajidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
