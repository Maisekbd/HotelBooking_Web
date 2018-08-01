import { Component, OnInit } from '@angular/core';
import { HotelReservationService } from '../../../../../_services/hotel-reservation.service'
import { HotelReservation } from '../../../../../_services/hotel-reservation.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-hotel-reservation-list',
    templateUrl: './hotel-reservation-list.component.html',
    styleUrls: ['./hotel-reservation-list.component.css']
})
export class HotelReservationListComponent implements OnInit {

    constructor(public hotelReservationService: HotelReservationService, public toastr: ToastrService) { }


    ngOnInit() {
        this.hotelReservationService.getHotelReservationList();
    }

    showForEdit(hotelReservation: HotelReservation) {
        this.hotelReservationService.selectedHotelReservation = Object.assign({}, hotelReservation);
    }


    onDelete(id: number) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.hotelReservationService.deleteHotelReservation(id)
                .subscribe(x => {
                    this.hotelReservationService.getHotelReservationList();
                    this.toastr.warning("Deleted Successfully", "Hotel Reservaation Register");
                })
        }
    }
}

