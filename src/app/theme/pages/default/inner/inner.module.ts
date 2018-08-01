
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InnerComponent } from './inner.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';

//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


//import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
//import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": InnerComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        InnerComponent,
        HotelsComponent,
        HotelComponent,
        HotelListComponent
    ],
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        FormsModule
        //HttpModule,
        //ToastrModule.forRoot()
        //BrowserAnimationsModule
    ], exports: [
        RouterModule
    ]
})
export class InnerModule {



}




