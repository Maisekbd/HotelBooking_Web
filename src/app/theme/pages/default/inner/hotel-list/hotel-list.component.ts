import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../../_services/hotel.service'
import { Hotel } from '../../../../../_services/hotel.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css'],
    //providers: [HotelService]
})
export class HotelListComponent implements OnInit {

    constructor(public hotelService: HotelService, public toastr: ToastrService) { }


    ngOnInit() {
        this.hotelService.getHotelList();
    }

    showForEdit(hotel: Hotel) {
        this.hotelService.selectedHotel = Object.assign({}, hotel);
    }


    onDelete(id: number) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.hotelService.deleteHotel(id)
                .subscribe(x => {
                    this.hotelService.getHotelList();
                    this.toastr.warning("Deleted Successfully", "Hotel Register");
                })
        }
    }
}
