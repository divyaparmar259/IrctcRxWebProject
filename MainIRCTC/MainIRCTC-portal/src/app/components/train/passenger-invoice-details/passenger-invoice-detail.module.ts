import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './passenger-invoice-detail.routing'

import { PassengerInvoiceDetailListComponent } from './list/passenger-invoice-detail-list.component'
import { PassengerInvoiceDetailEditComponent } from './edit/passenger-invoice-detail-edit.component';
import { PassengerInvoiceDetailAddComponent } from './add/passenger-invoice-detail-add.component';
import { PassengerInvoiceDetailSharedModule } from './passenger-invoice-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PassengerInvoiceDetailSharedModule,
        ROUTING
    ],
    declarations: [PassengerInvoiceDetailListComponent,PassengerInvoiceDetailEditComponent,PassengerInvoiceDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PassengerInvoiceDetailModule { }


