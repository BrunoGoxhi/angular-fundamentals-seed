import {Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)=handleClick(username.value)>
        Get Value
      </button>
      <input type="text" #username />
      <div>
        {{ name }}
      </div>
    </div>
    `
})

export class AppComponent {
  name: string = "Bruno";

  handleClick(value: string)
  {
    console.log(value);
  }

}  