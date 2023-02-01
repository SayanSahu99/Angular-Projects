import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';
  interval: number = 0;

  getInterval(event: number) {
    console.log(event);
    this.interval = event;
  }
}
