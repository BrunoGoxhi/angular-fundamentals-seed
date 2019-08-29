import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
        <passenger-count
            [items] = "passengers"
            >
        </passenger-count>

        <passenger-detail
            *ngFor="let Passenger of passengers;"
            [detail]="Passenger"
            >
        </passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(){}
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