import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './ewalletrefund.routing'

import { ewalletrefundListComponent } from './list/ewalletrefund-list.component'
import { ewalletrefundEditComponent } from './edit/ewalletrefund-edit.component';
import { ewalletrefundAddComponent } from './add/ewalletrefund-add.component';
import { ewalletrefundSharedModule } from './ewalletrefund-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ewalletrefundSharedModule,
        ROUTING
    ],
    declarations: [ewalletrefundListComponent,ewalletrefundEditComponent,ewalletrefundAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ewalletrefundModule { }


