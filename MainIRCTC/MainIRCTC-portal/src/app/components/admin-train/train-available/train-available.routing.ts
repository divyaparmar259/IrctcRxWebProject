import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainAvailableListComponent } from './list/train-available-list.component';
import { TrainAvailableAddComponent } from './add/train-available-add.component';
import { TrainAvailableEditComponent } from './edit/train-available-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TrainAvailableListComponent
    },
    {
        path: 'add',
        component: TrainAvailableAddComponent
    },
    {
        path: ':id',
        component:  TrainAvailableEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
