import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './cancellation.routing'

import { CancellationListComponent } from './list/cancellation-list.component'
import { CancellationEditComponent } from './edit/cancellation-edit.component';
import { CancellationAddComponent } from './add/cancellation-add.component';
import { CancellationSharedModule } from './cancellation-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CancellationSharedModule,
        ROUTING
    ],
    declarations: [CancellationListComponent,CancellationEditComponent,CancellationAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CancellationModule { }


