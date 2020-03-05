import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerLoginListComponent } from './list/customer-login-list.component';
import { CustomerLoginAddComponent } from './add/customer-login-add.component';
import { CustomerLoginEditComponent } from './edit/customer-login-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CustomerLoginListComponent
    },
    {
        path: 'add',
        component: CustomerLoginAddComponent
    },
    {
        path: ':id',
        component:  CustomerLoginEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
