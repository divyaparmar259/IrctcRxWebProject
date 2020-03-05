import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './pnrsgeneration.routing'

import { pnrsgenerationListComponent } from './list/pnrsgeneration-list.component'
import { pnrsgenerationEditComponent } from './edit/pnrsgeneration-edit.component';
import { pnrsgenerationAddComponent } from './add/pnrsgeneration-add.component';
import { pnrsgenerationSharedModule } from './pnrsgeneration-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,pnrsgenerationSharedModule,
        ROUTING
    ],
    declarations: [pnrsgenerationListComponent,pnrsgenerationEditComponent,pnrsgenerationAddComponent],
    exports: [RouterModule],
    providers: []
})
export class pnrsgenerationModule { }


