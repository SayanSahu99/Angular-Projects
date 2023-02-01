import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();
  interval: number = 0;
  myInterval: any;

  constructor() { }

  startGame() {
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.interval++);
    }
      , 1000);
  }

  stopGame() {
    clearInterval(this.myInterval);
  }



}
