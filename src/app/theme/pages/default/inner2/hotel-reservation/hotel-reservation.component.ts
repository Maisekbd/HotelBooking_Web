import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HotelReservationService } from '../../../../../_services/hotel-reservation.service'
import { HotelService } from '../../../../../_services/hotel.service'
import { ToastrService } from 'ngx-toastr'



@Component({
    selector: 'app-hotel-reservation',
    templateUrl: './hotel-reservation.component.html',
    styleUrls: ['./hotel-reservation.component.css']
})

export class HotelReservationComponent implements OnInit {

    constructor(public hotelReservationService: HotelReservationService, public hotelService: HotelService, private toastr: ToastrService) { }


    ngOnInit() {
        this.resetForm();
        this.hotelService.getHotelList();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.hotelReservationService.selectedHotelReservation = {
            Id: 0,
            FirstName: '',
            LastName: '',
            PhoneNo: '',
            EndDate: new Date(),
            StartDate: new Date(),
            HotelId: 0,
            CreatedBy: 0,
            CreationDate: new Date()
        }
    }

    onHotelChange(hotelId) {
        this.hotelService.getHotel(hotelId);
        this.hotelReservationService.selectedHotel = this.hotelService.selectedHotel;
    }

    onSubmit(form: NgForm) {
        if (form.value.Id == 0) {
            this.hotelReservationService.postHotelReservation(form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.hotelReservationService.getHotelReservationList();
                    this.toastr.success('New Record Added Succcessfully', 'Hotel Reservation Register');
                })
        }
        else {
            this.hotelReservationService.putHotelReservation(form.value.Id, form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.hotelReservationService.getHotelReservationList();
                    this.toastr.info('Record Updated Successfully!', 'Hotel Reservation Register');
                });
        }
    }
}
