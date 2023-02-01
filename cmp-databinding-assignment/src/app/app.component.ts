import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';
  oddElements: number[] = [];
  evenElements: number[] = [];
  interval: number = 0;

  getInterval(event: number) {
    console.log(event);
    this.interval = event;
    if (this.interval % 2 === 0) {
      this.evenElements.push(this.interval);
    }
    else {
      this.oddElements.push(this.interval);
    }
  }
}
