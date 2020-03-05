import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './train-application-object.routing'

import { TrainApplicationObjectListComponent } from './list/train-application-object-list.component'
import { TrainApplicationObjectEditComponent } from './edit/train-application-object-edit.component';
import { TrainApplicationObjectAddComponent } from './add/train-application-object-add.component';
import { TrainApplicationObjectSharedModule } from './train-application-object-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,TrainApplicationObjectSharedModule,
        ROUTING
    ],
    declarations: [TrainApplicationObjectListComponent,TrainApplicationObjectEditComponent,TrainApplicationObjectAddComponent],
    exports: [RouterModule],
    providers: []
})
export class TrainApplicationObjectModule { }


