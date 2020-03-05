import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pnrListComponent } from './list/pnr-list.component';
import { pnrAddComponent } from './add/pnr-add.component';
import { pnrEditComponent } from './edit/pnr-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: pnrListComponent
    },
    {
        path: 'add',
        component: pnrAddComponent
    },
    {
        path: ':id',
        component:  pnrEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
