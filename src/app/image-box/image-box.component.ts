import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  imports: [],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss',
})
export class ImageBoxComponent {
  @Input() imageDiscription: string = '';
  @Input() buttonText: string = '';
}
