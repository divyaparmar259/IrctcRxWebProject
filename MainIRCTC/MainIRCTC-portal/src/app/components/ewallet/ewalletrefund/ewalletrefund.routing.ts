import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ewalletrefundListComponent } from './list/ewalletrefund-list.component';
import { ewalletrefundAddComponent } from './add/ewalletrefund-add.component';
import { ewalletrefundEditComponent } from './edit/ewalletrefund-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ewalletrefundListComponent
    },
    {
        path: 'add',
        component: ewalletrefundAddComponent
    },
    {
        path: ':id',
        component:  ewalletrefundEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
