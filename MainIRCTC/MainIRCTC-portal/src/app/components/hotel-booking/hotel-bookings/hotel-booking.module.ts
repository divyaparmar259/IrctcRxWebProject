import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './hotel-booking.routing'

import { HotelBookingListComponent } from './list/hotel-booking-list.component'
import { HotelBookingEditComponent } from './edit/hotel-booking-edit.component';
import { HotelBookingAddComponent } from './add/hotel-booking-add.component';
import { HotelBookingSharedModule } from './hotel-booking-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,HotelBookingSharedModule,
        ROUTING
    ],
    declarations: [HotelBookingListComponent,HotelBookingEditComponent,HotelBookingAddComponent],
    exports: [RouterModule],
    providers: []
})
export class HotelBookingModule { }


