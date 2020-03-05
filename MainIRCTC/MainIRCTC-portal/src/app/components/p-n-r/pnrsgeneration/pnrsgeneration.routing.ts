import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pnrsgenerationListComponent } from './list/pnrsgeneration-list.component';
import { pnrsgenerationAddComponent } from './add/pnrsgeneration-add.component';
import { pnrsgenerationEditComponent } from './edit/pnrsgeneration-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: pnrsgenerationListComponent
    },
    {
        path: 'add',
        component: pnrsgenerationAddComponent
    },
    {
        path: ':id',
        component:  pnrsgenerationEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
