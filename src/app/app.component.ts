import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  showDick = false;

  enter() {
    this.showDick = true;
  }

  leave() {
    this.showDick = false;
  }
}
