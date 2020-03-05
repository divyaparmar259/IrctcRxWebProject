import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './list/hotel-list.component';
import { HotelAddComponent } from './add/hotel-add.component';
import { HotelEditComponent } from './edit/hotel-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HotelListComponent
    },
    {
        path: 'add',
        component: HotelAddComponent
    },
    {
        path: ':id',
        component:  HotelEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
