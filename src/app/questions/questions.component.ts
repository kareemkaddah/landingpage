import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  @Input() question: string = '';
  @Input() answer: string = '';

  showAnswer = false;

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }
}
