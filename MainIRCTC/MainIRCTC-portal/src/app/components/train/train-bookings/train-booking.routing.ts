import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainBookingListComponent } from './list/train-booking-list.component';
import { TrainBookingAddComponent } from './add/train-booking-add.component';
import { TrainBookingEditComponent } from './edit/train-booking-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TrainBookingListComponent
    },
    {
        path: 'add',
        component: TrainBookingAddComponent
    },
    {
        path: ':id',
        component:  TrainBookingEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
