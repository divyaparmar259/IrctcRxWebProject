import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './hotel-list.routing'

import { HotelListListComponent } from './list/hotel-list-list.component'
import { HotelListEditComponent } from './edit/hotel-list-edit.component';
import { HotelListAddComponent } from './add/hotel-list-add.component';
import { HotelListSharedModule } from './hotel-list-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,HotelListSharedModule,
        ROUTING
    ],
    declarations: [HotelListListComponent,HotelListEditComponent,HotelListAddComponent],
    exports: [RouterModule],
    providers: []
})
export class HotelListModule { }


