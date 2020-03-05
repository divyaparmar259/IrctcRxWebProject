import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './train.routing'

import { TrainListComponent } from './list/train-list.component'
import { TrainEditComponent } from './edit/train-edit.component';
import { TrainAddComponent } from './add/train-add.component';
import { TrainSharedModule } from './train-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,TrainSharedModule,
        ROUTING
    ],
    declarations: [TrainListComponent,TrainEditComponent,TrainAddComponent],
    exports: [RouterModule],
    providers: []
})
export class TrainModule { }


