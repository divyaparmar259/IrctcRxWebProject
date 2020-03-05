import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './customer.routing'

import { CustomerListComponent } from './list/customer-list.component'
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerSharedModule } from './customer-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CustomerSharedModule,
        ROUTING
    ],
    declarations: [CustomerListComponent,CustomerEditComponent,CustomerAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CustomerModule { }


