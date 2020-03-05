import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainApplicationObjectTypeListComponent } from './list/train-application-object-type-list.component';
import { TrainApplicationObjectTypeAddComponent } from './add/train-application-object-type-add.component';
import { TrainApplicationObjectTypeEditComponent } from './edit/train-application-object-type-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TrainApplicationObjectTypeListComponent
    },
    {
        path: 'add',
        component: TrainApplicationObjectTypeAddComponent
    },
    {
        path: ':id',
        component:  TrainApplicationObjectTypeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
