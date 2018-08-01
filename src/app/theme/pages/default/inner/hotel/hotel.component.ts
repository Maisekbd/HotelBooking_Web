import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HotelService } from '../../../../../_services/hotel.service'
import { ToastrService } from 'ngx-toastr'


@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.css'],
    //providers: [HotelService]
})
export class HotelComponent implements OnInit {

    constructor(public hotelService: HotelService,public toastr: ToastrService) { }


    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.hotelService.selectedHotel = {
            Id: 0,
            Name: '',
            RoomsNo: 0,
            Description:'',
            Location: '',
            hasAvailableRoom: false
        }
    }

    onSubmit(form: NgForm) {
        if (form.value.Id == 0) {
            this.hotelService.postHotel(form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.hotelService.getHotelList();
                    this.toastr.success('New Record Added Succcessfully', 'Hotel Register');
                })
        }
        else {
            this.hotelService.putHotel(form.value.Id, form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.hotelService.getHotelList();
                    this.toastr.info('Record Updated Successfully!', 'Hotel Register');
                });
        }
    }
}
