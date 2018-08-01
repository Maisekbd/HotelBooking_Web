import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Inner2Component } from './inner2.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { FormsModule } from '@angular/forms';
import { DateTimePickerComponent } from 'angular-datetimepicker-component';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


import { HotelReservationsComponent } from './hotel-reservations/hotel-reservations.component';
import { HotelReservationComponent } from './hotel-reservation/hotel-reservation.component';
import { HotelReservationListComponent } from './hotel-reservation-list/hotel-reservation-list.component';
import { HotelPreviewComponent } from './hotel-preview/hotel-preview.component';


const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": Inner2Component
            }
        ]
    }
];
@NgModule({
    declarations: [
        Inner2Component,
        HotelReservationsComponent,
        HotelReservationComponent,
        HotelReservationListComponent,
        DateTimePickerComponent,
        HotelPreviewComponent
    ],
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        //OwlDateTimeModule,
        //OwlNativeDateTimeModule,

        FormsModule
    ], exports: [
        RouterModule
    ]
})
export class Inner2Module {



}