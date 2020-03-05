import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationDetailListComponent } from './list/station-detail-list.component';
import { StationDetailAddComponent } from './add/station-detail-add.component';
import { StationDetailEditComponent } from './edit/station-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: StationDetailListComponent
    },
    {
        path: 'add',
        component: StationDetailAddComponent
    },
    {
        path: ':id',
        component:  StationDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
