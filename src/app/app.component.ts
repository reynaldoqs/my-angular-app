import { Component } from '@angular/core';

@Component({
  selector: 'audi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean;
  toggle() {
    console.log('this is a toggle')
  }
}
