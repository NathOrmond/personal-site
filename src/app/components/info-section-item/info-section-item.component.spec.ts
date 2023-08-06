import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionItemComponent } from './info-section-item.component';

describe('InfoSectionItemComponent', () => {
  let component: InfoSectionItemComponent;
  let fixture: ComponentFixture<InfoSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSectionItemComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(InfoSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
