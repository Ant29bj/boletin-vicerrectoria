import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLinkComponent } from './mobile-link.component';

describe('MobileLinkComponent', () => {
  let component: MobileLinkComponent;
  let fixture: ComponentFixture<MobileLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileLinkComponent]
    });
    fixture = TestBed.createComponent(MobileLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
