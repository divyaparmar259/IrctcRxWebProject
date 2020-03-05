import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './customer-login.routing'

import { CustomerLoginListComponent } from './list/customer-login-list.component'
import { CustomerLoginEditComponent } from './edit/customer-login-edit.component';
import { CustomerLoginAddComponent } from './add/customer-login-add.component';
import { CustomerLoginSharedModule } from './customer-login-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CustomerLoginSharedModule,
        ROUTING
    ],
    declarations: [CustomerLoginListComponent,CustomerLoginEditComponent,CustomerLoginAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CustomerLoginModule { }


