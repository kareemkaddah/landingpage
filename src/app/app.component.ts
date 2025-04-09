import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageBoxComponent } from './image-box/image-box.component';
import { LogoComponent } from './logo/logo.component';
import lottie from 'lottie-web';
import player from 'lottie-web';
import { AfterViewInit } from '@angular/core';
import { SecondaryImagesComponent } from './secondary-images/secondary-images.component';
import { QuestionsComponent } from './questions/questions.component';
import { FaqComponent } from './faq/faq.component';
export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImageBoxComponent,
    LogoComponent,
    SecondaryImagesComponent,
    QuestionsComponent,
    FaqComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Fahrschule';
  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: document.getElementById('message-animation')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/kareem.json',
    });
    {
      lottie.loadAnimation({
        container: document.getElementById('instagram-animation')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/instagram.json',
      });
    }
  }
}
