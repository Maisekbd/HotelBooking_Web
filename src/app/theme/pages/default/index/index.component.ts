import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { StatisticsService } from '../../../../_services/Statistics.service'


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [StatisticsService]
})
export class IndexComponent implements OnInit, AfterViewInit {


    constructor(public statisticsService: StatisticsService,private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        this.statisticsService.currentStatistics = {
            HotelReservationCount: 0,
            HotelsCount: 0,
         
        }
        this.statisticsService.getHotelReservationsCount();
        this.statisticsService.getHotelsCount();
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

    }

}