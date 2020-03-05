import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './passenger-invoice.routing'

import { PassengerInvoiceListComponent } from './list/passenger-invoice-list.component'
import { PassengerInvoiceEditComponent } from './edit/passenger-invoice-edit.component';
import { PassengerInvoiceAddComponent } from './add/passenger-invoice-add.component';
import { PassengerInvoiceSharedModule } from './passenger-invoice-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PassengerInvoiceSharedModule,
        ROUTING
    ],
    declarations: [PassengerInvoiceListComponent,PassengerInvoiceEditComponent,PassengerInvoiceAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PassengerInvoiceModule { }


