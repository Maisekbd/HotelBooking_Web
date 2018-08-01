import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

import { HotelReservation } from './hotel-reservation.model'
import { Hotel } from './hotel.model';

@Injectable()
export class HotelReservationService {
    selectedHotelReservation: HotelReservation;
    hotelReservationList: HotelReservation[];
    selectedHotel: Hotel;
    constructor(private http: Http) { }


    postHotelReservation(hotelReservation: HotelReservation) {
        var body = JSON.stringify(hotelReservation);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(environment.apiEndpoint +'hotelReservation/PostHotelReservation', body, requestOptions).map(x => x.json());
    }
    putHotelReservation(id, hotelReservation) {
        var body = JSON.stringify(hotelReservation);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put(environment.apiEndpoint +'hotelReservation/' + id,

            body,
            requestOptions).map(res => res.json());
    }

    getHotelReservationList() {
        this.http.get(environment.apiEndpoint +'hotelReservation/GetHotelReservations')
            .map((data: Response) => {
                return data.json() as HotelReservation[];
            }).toPromise().then(x => {
                this.hotelReservationList = x;
            })
    }

    deleteHotelReservation(id: number) {
        return this.http.delete(environment.apiEndpoint +'HotelReservation/DeleteHotelReservation?hotelReservationId=' + id).map(res => res.json());

    }
}
