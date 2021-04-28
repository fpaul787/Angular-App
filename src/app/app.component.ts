import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frantz App';
  description = 'Hello World';
  hero = 'Frantz';
  onLike() {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
  }
}
