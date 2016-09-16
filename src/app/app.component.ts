import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
	private switch = true;
	private items: string[] = ['orange', 'red', 'green', 'blue', 'yellow'];
	private value = 100;
	onSwitch(){
		this.switch = !this.switch;
	}

}
