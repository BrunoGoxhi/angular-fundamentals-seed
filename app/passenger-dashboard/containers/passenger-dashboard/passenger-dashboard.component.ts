import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
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

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    ngOnInit() 
    {
        console.log('OnInit');
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.passengers =
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
            }]
    }
}