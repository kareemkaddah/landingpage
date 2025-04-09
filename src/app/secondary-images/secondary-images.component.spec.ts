import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryImagesComponent } from './secondary-images.component';

describe('SecondaryImagesComponent', () => {
  let component: SecondaryImagesComponent;
  let fixture: ComponentFixture<SecondaryImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
