import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './book-passenger.routing'

import { BookPassengerListComponent } from './list/book-passenger-list.component'
import { BookPassengerEditComponent } from './edit/book-passenger-edit.component';
import { BookPassengerAddComponent } from './add/book-passenger-add.component';
import { BookPassengerSharedModule } from './book-passenger-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BookPassengerSharedModule,
        ROUTING
    ],
    declarations: [BookPassengerListComponent,BookPassengerEditComponent,BookPassengerAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BookPassengerModule { }


