import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './hotel-invoice.routing'

import { HotelInvoiceListComponent } from './list/hotel-invoice-list.component'
import { HotelInvoiceEditComponent } from './edit/hotel-invoice-edit.component';
import { HotelInvoiceAddComponent } from './add/hotel-invoice-add.component';
import { HotelInvoiceSharedModule } from './hotel-invoice-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,HotelInvoiceSharedModule,
        ROUTING
    ],
    declarations: [HotelInvoiceListComponent,HotelInvoiceEditComponent,HotelInvoiceAddComponent],
    exports: [RouterModule],
    providers: []
})
export class HotelInvoiceModule { }


