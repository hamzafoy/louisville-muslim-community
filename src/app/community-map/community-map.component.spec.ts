import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMapComponent } from './community-map.component';

describe('CommunityMapComponent', () => {
  let component: CommunityMapComponent;
  let fixture: ComponentFixture<CommunityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
