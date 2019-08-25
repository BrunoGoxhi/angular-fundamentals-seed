import {Component } from '@angular/core'

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: null | number
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
      </li>
    </ul>
      <h1>Pasagjeret e linjes: </h1>
      <ul>
        <li *ngFor = "let Passenger of passengers;">
          <span 
          class="status"
          [ngClass]="{
            'checked-in': Passenger.checkedIn,
            'checked-out': !Passenger.checkedIn
          }"
          ></span>
            {{ Passenger.fullName }}
        </li>
      </ul>
      <h1>Pasagjeret e linjes: </h1>
      <ul>
        <li *ngFor = "let Passenger of passengers;">
          <span 
          class="status"
          [style.backgroundColor]="(Passenger.checkedIn ? '#22eb75' : '#c0392b')"
          ></span>
            {{ Passenger.fullName }}
        </li>
      </ul>
      <h1>Pasagjeret e linjes: </h1>
      <ul>
        <li *ngFor = "let Passenger of passengers;">
          <span 
          class="status"
          [ngStyle]="{ backgroundColor: (Passenger.checkedIn ? '#22eb75' : '#c0392b')}"
          ></span>
            {{ Passenger.fullName }}
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
    checkInDate: 1233221312
  },
  {
    id: 2,
    fullName: 'Cash',
    checkedIn: false,
    checkInDate: null
  }
  ]
}  