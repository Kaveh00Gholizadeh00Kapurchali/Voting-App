import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Votes } from './votes/votes';

@Component({
  imports: [RouterOutlet, Votes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Voting-App');
}
