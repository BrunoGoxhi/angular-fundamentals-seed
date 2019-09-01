import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService} from '../../passenger-dashboard.service'

import { Passenger } from '../../models/passenger.interface';
import { Router } from '@angular/router';

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
            (view)="handleView($event)"
            >
        </passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService)
    {

    }
    ngOnInit() 
    { 
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data);
            
    }
    
        handleRemove(event: Passenger){
            this.passengerService 
                .removePassenger(event)
                .subscribe((data: Passenger) => {
                    this.passengers = this.passengers.filter(
                        (passenger: Passenger) =>
                            { return passenger.id !== event.id; }
                    )
                 })
        }
        
        handleEdit(event: Passenger)
        {
            this.passengerService
                .updatePassenger(event)
                .subscribe((data: Passenger) => {
                    this.passengers = this.passengers.map(
                        (passenger: Passenger) =>
                        {
                            if (passenger.id === event.id)
                            {
                                passenger = Object.assign({}, passenger, event);
                            }
                        return passenger;
                        }) 
                })
        }

        handleView(event: Passenger)
        {
            this.router.navigate(['/passengers', event.id]);
        }
}