import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './station.routing'

import { StationListComponent } from './list/station-list.component'
import { StationEditComponent } from './edit/station-edit.component';
import { StationAddComponent } from './add/station-add.component';
import { StationSharedModule } from './station-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,StationSharedModule,
        ROUTING
    ],
    declarations: [StationListComponent,StationEditComponent,StationAddComponent],
    exports: [RouterModule],
    providers: []
})
export class StationModule { }


