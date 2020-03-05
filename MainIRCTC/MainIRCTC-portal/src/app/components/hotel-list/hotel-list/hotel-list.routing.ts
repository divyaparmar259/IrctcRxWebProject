import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListListComponent } from './list/hotel-list-list.component';
import { HotelListAddComponent } from './add/hotel-list-add.component';
import { HotelListEditComponent } from './edit/hotel-list-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HotelListListComponent
    },
    {
        path: 'add',
        component: HotelListAddComponent
    },
    {
        path: ':id',
        component:  HotelListEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
