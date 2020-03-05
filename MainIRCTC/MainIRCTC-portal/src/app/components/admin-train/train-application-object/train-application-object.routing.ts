import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainApplicationObjectListComponent } from './list/train-application-object-list.component';
import { TrainApplicationObjectAddComponent } from './add/train-application-object-add.component';
import { TrainApplicationObjectEditComponent } from './edit/train-application-object-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TrainApplicationObjectListComponent
    },
    {
        path: 'add',
        component: TrainApplicationObjectAddComponent
    },
    {
        path: ':id',
        component:  TrainApplicationObjectEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
