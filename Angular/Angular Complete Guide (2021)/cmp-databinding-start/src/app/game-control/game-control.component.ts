import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-game-control",
	templateUrl: "./game-control.component.html",
	styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
	number = 0;
	started = false;
	odds = [];
	evens = [];
  handler;
	constructor() {}

	ngOnInit(): void {}

	startGame(): void {
		this.handler = setInterval(() => {
			this.number += 1;
			if (this.number % 2 === 0) {
				this.evens.push(this.number);
			} else {
				this.odds.push(this.number);
			}
		}, 1000);
	}

	stopGame(): void {
    if (this.handler) {
      clearInterval(this.handler);
    }
  }
}
