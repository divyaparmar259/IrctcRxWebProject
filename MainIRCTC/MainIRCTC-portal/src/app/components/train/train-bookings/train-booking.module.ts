import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './train-booking.routing'

import { TrainBookingListComponent } from './list/train-booking-list.component'
import { TrainBookingEditComponent } from './edit/train-booking-edit.component';
import { TrainBookingAddComponent } from './add/train-booking-add.component';
import { TrainBookingSharedModule } from './train-booking-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,TrainBookingSharedModule,
        ROUTING
    ],
    declarations: [TrainBookingListComponent,TrainBookingEditComponent,TrainBookingAddComponent],
    exports: [RouterModule],
    providers: []
})
export class TrainBookingModule { }


