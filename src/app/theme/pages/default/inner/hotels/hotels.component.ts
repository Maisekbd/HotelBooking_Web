import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../../_services/hotel.service'

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css'],
    providers: [HotelService]
})
export class HotelsComponent implements OnInit {

    constructor(public hotelService: HotelService) { }

    ngOnInit() {
    }

}
