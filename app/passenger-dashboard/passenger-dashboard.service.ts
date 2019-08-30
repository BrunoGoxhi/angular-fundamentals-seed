import { Passenger } from './models/passenger.interface'

export class PassengerDashboardService{

    constructor() {}

    getPassengers(): Passenger[]{
        return [{
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