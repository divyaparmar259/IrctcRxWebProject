import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './passenger-detail.routing'

import { PassengerDetailListComponent } from './list/passenger-detail-list.component'
import { PassengerDetailEditComponent } from './edit/passenger-detail-edit.component';
import { PassengerDetailAddComponent } from './add/passenger-detail-add.component';
import { PassengerDetailSharedModule } from './passenger-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PassengerDetailSharedModule,
        ROUTING
    ],
    declarations: [PassengerDetailListComponent,PassengerDetailEditComponent,PassengerDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PassengerDetailModule { }


