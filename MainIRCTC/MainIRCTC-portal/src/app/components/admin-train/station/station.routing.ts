import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationListComponent } from './list/station-list.component';
import { StationAddComponent } from './add/station-add.component';
import { StationEditComponent } from './edit/station-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: StationListComponent
    },
    {
        path: 'add',
        component: StationAddComponent
    },
    {
        path: ':id',
        component:  StationEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
