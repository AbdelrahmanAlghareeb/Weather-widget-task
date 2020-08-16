import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-task';
  colors = ['red','blue','green']
  selectedColor = 'blue'
  date = new Date()
}
