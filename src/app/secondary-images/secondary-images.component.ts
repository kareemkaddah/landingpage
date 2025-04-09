import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-images',
  imports: [],
  templateUrl: './secondary-images.component.html',
  styleUrl: './secondary-images.component.scss',
})
export class SecondaryImagesComponent {
  @Input() firstHeading: string = '';
  @Input() firstDiscription: string = '';
  @Input() secondHeading: string = '';
  @Input() secondDiscription: string = '';
}
