import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
//import { HotelReservationService } from '../../../../../_services/hotel-reservation.service'
import { HotelService } from '../../../../../_services/hotel.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-hotel-preview',
    templateUrl: './hotel-preview.component.html',
    styleUrls: ['./hotel-preview.component.css']
})
export class HotelPreviewComponent implements OnInit {

    constructor(/*private hotelReservationService: HotelReservationService,*/ public hotelService: HotelService, public toastr: ToastrService) { }


    ngOnInit() {
        this.resetForm();
    }

    resetForm() {
        //this.hotelService.selectedHotel = {
        //    Id: 0,
        //    Name: '',
        //    Description: '',
        //    hasAvailableRoom: false,
        //    Location: '',
        //    RoomsNo:0  
        //}
    }

}
