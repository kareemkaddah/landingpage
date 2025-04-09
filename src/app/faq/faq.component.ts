import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [QuestionsComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqList = [
    {
      question: 'What is Angular?',
      answer:
        'Angular is a TypeScript-based open-source web application framework.',
    },
    {
      question: 'How do I install Angular CLI?',
      answer: 'You can install it using npm: npm install -g @angular/cli',
    },
    {
      question: 'How do I create a new component?',
      answer:
        'Use the Angular CLI command: ng generate component your-component-name',
    },
  ];
}
