import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './hotel.routing'

import { HotelListComponent } from './list/hotel-list.component'
import { HotelEditComponent } from './edit/hotel-edit.component';
import { HotelAddComponent } from './add/hotel-add.component';
import { HotelSharedModule } from './hotel-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,HotelSharedModule,
        ROUTING
    ],
    declarations: [HotelListComponent,HotelEditComponent,HotelAddComponent],
    exports: [RouterModule],
    providers: []
})
export class HotelModule { }


