import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './list/city-list.component';
import { CityAddComponent } from './add/city-add.component';
import { CityEditComponent } from './edit/city-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CityListComponent
    },
    {
        path: 'add',
        component: CityAddComponent
    },
    {
        path: ':id',
        component:  CityEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
