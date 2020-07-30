import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})
export class AppComponent {

family : any[] = [
  {name: "Alice", isFemale: true},
  {name: "Betty", isFemale: true},
  {name: "Chris", isFemale: false},
  {name: "Doug", isFemale: false}
]

  title = 'hello-world-angular';
}
