import {Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }}
      <div>
       {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    <h1 [innerHTML] = "title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo">
      <input type="text" [value]="name"/>
      <div>{{name}}</div>
    </div>
    `
})

export class AppComponent {
  title: string;
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string = 'img/Change Copy.jpg';
  name: string = "Bruno";
  constructor ()
  {
    this.title = 'Ultimate Angular'
  }
}  