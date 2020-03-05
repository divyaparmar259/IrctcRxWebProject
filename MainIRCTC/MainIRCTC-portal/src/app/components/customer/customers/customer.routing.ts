import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './list/customer-list.component';
import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerEditComponent } from './edit/customer-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CustomerListComponent
    },
    {
        path: 'add',
        component: CustomerAddComponent
    },
    {
        path: ':id',
        component:  CustomerEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
