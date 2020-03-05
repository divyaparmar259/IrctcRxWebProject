import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './train-available.routing'

import { TrainAvailableListComponent } from './list/train-available-list.component'
import { TrainAvailableEditComponent } from './edit/train-available-edit.component';
import { TrainAvailableAddComponent } from './add/train-available-add.component';
import { TrainAvailableSharedModule } from './train-available-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,TrainAvailableSharedModule,
        ROUTING
    ],
    declarations: [TrainAvailableListComponent,TrainAvailableEditComponent,TrainAvailableAddComponent],
    exports: [RouterModule],
    providers: []
})
export class TrainAvailableModule { }


