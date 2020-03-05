import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './city.routing'

import { CityListComponent } from './list/city-list.component'
import { CityEditComponent } from './edit/city-edit.component';
import { CityAddComponent } from './add/city-add.component';
import { CitySharedModule } from './city-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CitySharedModule,
        ROUTING
    ],
    declarations: [CityListComponent,CityEditComponent,CityAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CityModule { }


