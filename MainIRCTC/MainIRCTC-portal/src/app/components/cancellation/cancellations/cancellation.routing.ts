import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancellationListComponent } from './list/cancellation-list.component';
import { CancellationAddComponent } from './add/cancellation-add.component';
import { CancellationEditComponent } from './edit/cancellation-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CancellationListComponent
    },
    {
        path: 'add',
        component: CancellationAddComponent
    },
    {
        path: ':id',
        component:  CancellationEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
