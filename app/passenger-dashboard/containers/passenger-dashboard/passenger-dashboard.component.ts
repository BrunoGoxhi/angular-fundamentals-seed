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
        <div  *ngFor="let Passenger of passengers;">
            {{ Passenger.fullName}}
        </div>
        <passenger-detail
            *ngFor="let Passenger of passengers;"
            [detail]="Passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)"
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
        handleRemove(event: Passenger){
            
            this.passengers = this.passengers.filter((passenger: Passenger) =>
            {
                return passenger.id !== event.id;
            }
            )
        }
        
        handleEdit(event: Passenger)
        {
            this.passengers = this.passengers.map(
            (passenger: Passenger) =>
            {
                if (passenger.id === event.id)
                {
                    passenger = Object.assign({}, passenger, event);
                }
            return passenger;
            }) 
        }
}