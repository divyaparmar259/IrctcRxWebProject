import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './pnr.routing'

import { pnrListComponent } from './list/pnr-list.component'
import { pnrEditComponent } from './edit/pnr-edit.component';
import { pnrAddComponent } from './add/pnr-add.component';
import { pnrSharedModule } from './pnr-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,pnrSharedModule,
        ROUTING
    ],
    declarations: [pnrListComponent,pnrEditComponent,pnrAddComponent],
    exports: [RouterModule],
    providers: []
})
export class pnrModule { }


