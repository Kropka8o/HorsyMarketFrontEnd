import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './card/card';

@Component({
  imports: [RouterOutlet, Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('HorsyMarketFrontEnd');

  posts = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
}
