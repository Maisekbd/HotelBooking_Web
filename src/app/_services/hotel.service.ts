import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

import { Hotel } from './hotel.model'

@Injectable()
export class HotelService {
    selectedHotel: Hotel;
    hotelList: Hotel[];
    constructor(private http: Http) { }


    postHotel(hotel: Hotel) {
        var body = JSON.stringify(hotel);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(environment.apiEndpoint + 'hotel/PostHotel', body, requestOptions).map(x => x.json());
    }
    putHotel(id, hotel) {
        var body = JSON.stringify(hotel);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put(environment.apiEndpoint + 'hotel/' + id,

            body,
            requestOptions).map(res => res.json());
    }

    getHotelList() {
        this.http.get(environment.apiEndpoint + 'hotel/GetHotels')
            .map((data: Response) => {
                return data.json() as Hotel[];
            }).toPromise().then(x => {
                this.hotelList = x;
            })
    }

    getHotel(hotelId) {
        this.http.get(environment.apiEndpoint + 'hotel/GetHotel?hotelId=' + hotelId)
            .map((data: Response) => {
                return data.json() as Hotel;
            }).toPromise().then(x => {
                this.selectedHotel = x;
            })
    }

    deleteHotel(id: number) {
        return this.http.delete(environment.apiEndpoint + 'hotel/DeleteHotel?hotelId=' + id).map(res => res.json());

    }
}
