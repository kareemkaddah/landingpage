import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageBoxComponent } from './image-box/image-box.component';
import { LogoComponent } from './logo/logo.component';

import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageBoxComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fahrschule';
  lottieOptions = {
    path: '',
  };
}
