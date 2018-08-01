import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

import { HotelStatistics } from './hotelStatistics.model'

@Injectable()
export class StatisticsService {
    currentStatistics: HotelStatistics;
    constructor(private http: Http) { }

    getHotelsCount() {
        this.http.get(environment.apiEndpoint + 'Statistics/getHotelsCount')
            .map((data: Response) => {
                return data.json() as number;
            }).toPromise().then(x => {
                this.currentStatistics.HotelsCount = x;
            })
    }

    getHotelReservationsCount() {
        this.http.get(environment.apiEndpoint + 'Statistics/GetHotelReservationsCount')
            .map((data: Response) => {
                return data.json() as number;
            }).toPromise().then(x => {
                this.currentStatistics.HotelReservationCount = x;
            })
    }

   
}
