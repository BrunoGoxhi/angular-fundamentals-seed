import {Component } from '@angular/core'

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

interface Child 
{
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">  
    <h1>Pasagjeret e linjes: </h1>
    <ul>
      <li *ngFor = "let Passenger of passengers;">
        <span 
        class="status"
        [class.checked-in]="Passenger.checkedIn"
        ></span>
          {{ Passenger.fullName }}
          <div class="date">
            Checked in date: 
            {{ Passenger.checkInDate ? ( Passenger.checkInDate | date: 'yMMMMd' | uppercase) : "Not checked in" }}
          </div>
          <div class="children">
              Children: {{ Passenger.children?.length || 0}}
          </div>
      </li>
    </ul>
    </div>
    `
})

export class AppComponent {
  passengers: Passenger[] = 
  [{
    id: 1,
    fullName: 'Bristol',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name: "baby", age: 1}]
  },
  {
    id: 2,
    fullName: 'Cash',
    checkedIn: false,
    checkInDate: null,
    children: null
  }
  ]
}  