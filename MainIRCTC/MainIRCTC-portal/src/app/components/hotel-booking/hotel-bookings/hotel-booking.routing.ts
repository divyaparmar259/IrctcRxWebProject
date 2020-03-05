import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelBookingListComponent } from './list/hotel-booking-list.component';
import { HotelBookingAddComponent } from './add/hotel-booking-add.component';
import { HotelBookingEditComponent } from './edit/hotel-booking-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HotelBookingListComponent
    },
    {
        path: 'add',
        component: HotelBookingAddComponent
    },
    {
        path: ':id',
        component:  HotelBookingEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
