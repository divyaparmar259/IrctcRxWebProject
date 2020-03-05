import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainListComponent } from './list/train-list.component';
import { TrainAddComponent } from './add/train-add.component';
import { TrainEditComponent } from './edit/train-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TrainListComponent
    },
    {
        path: 'add',
        component: TrainAddComponent
    },
    {
        path: ':id',
        component:  TrainEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
