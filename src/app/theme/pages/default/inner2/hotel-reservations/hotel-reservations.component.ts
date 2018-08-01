import { Component, OnInit } from '@angular/core';
import { HotelReservationService } from '../../../../../_services/hotel-reservation.service'
import { HotelService } from '../../../../../_services/hotel.service'

@Component({
    selector: 'app-hotelReservations',
    templateUrl: './hotel-reservations.component.html',
    styleUrls: ['./hotel-reservations.component.css'],
    providers: [HotelReservationService, HotelService]
})
export class HotelReservationsComponent implements OnInit {

    constructor(public hotelReservationService: HotelReservationService, public hotelService: HotelService) { }

    ngOnInit() {
        this.hotelService.selectedHotel = {
            Id: 0,
            Name: '',
            Description: '',
            hasAvailableRoom: false,
            Location: '',
            RoomsNo:0  
        }
    }

}
