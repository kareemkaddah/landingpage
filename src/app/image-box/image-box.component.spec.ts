import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoxComponent } from './image-box.component';

describe('ImageBoxComponent', () => {
  let component: ImageBoxComponent;
  let fixture: ComponentFixture<ImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
