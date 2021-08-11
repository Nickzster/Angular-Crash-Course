import { Component } from '@angular/core'; //Equivalent to React.FC, used to create a component.

// Component Declaration
/* 
selector: Refers to HTML tag in markup
template: HTML file
styleUrls: CSS 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
