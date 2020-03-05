import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './train-application-object-type.routing'

import { TrainApplicationObjectTypeListComponent } from './list/train-application-object-type-list.component'
import { TrainApplicationObjectTypeEditComponent } from './edit/train-application-object-type-edit.component';
import { TrainApplicationObjectTypeAddComponent } from './add/train-application-object-type-add.component';
import { TrainApplicationObjectTypeSharedModule } from './train-application-object-type-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,TrainApplicationObjectTypeSharedModule,
        ROUTING
    ],
    declarations: [TrainApplicationObjectTypeListComponent,TrainApplicationObjectTypeEditComponent,TrainApplicationObjectTypeAddComponent],
    exports: [RouterModule],
    providers: []
})
export class TrainApplicationObjectTypeModule { }


