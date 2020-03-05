import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-passenger-invoice.routing'

import { vPassengerInvoiceListComponent } from './list/v-passenger-invoice-list.component'
import { vPassengerInvoiceEditComponent } from './edit/v-passenger-invoice-edit.component';
import { vPassengerInvoiceAddComponent } from './add/v-passenger-invoice-add.component';
import { vPassengerInvoiceSharedModule } from './v-passenger-invoice-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vPassengerInvoiceSharedModule,
        ROUTING
    ],
    declarations: [vPassengerInvoiceListComponent,vPassengerInvoiceEditComponent,vPassengerInvoiceAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vPassengerInvoiceModule { }


