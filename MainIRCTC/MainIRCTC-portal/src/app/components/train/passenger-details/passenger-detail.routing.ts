import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerDetailListComponent } from './list/passenger-detail-list.component';
import { PassengerDetailAddComponent } from './add/passenger-detail-add.component';
import { PassengerDetailEditComponent } from './edit/passenger-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PassengerDetailListComponent
    },
    {
        path: 'add',
        component: PassengerDetailAddComponent
    },
    {
        path: ':id',
        component:  PassengerDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
