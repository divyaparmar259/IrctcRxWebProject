import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './station-detail.routing'

import { StationDetailListComponent } from './list/station-detail-list.component'
import { StationDetailEditComponent } from './edit/station-detail-edit.component';
import { StationDetailAddComponent } from './add/station-detail-add.component';
import { StationDetailSharedModule } from './station-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,StationDetailSharedModule,
        ROUTING
    ],
    declarations: [StationDetailListComponent,StationDetailEditComponent,StationDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class StationDetailModule { }


