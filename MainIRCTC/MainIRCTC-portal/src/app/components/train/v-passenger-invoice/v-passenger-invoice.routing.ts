import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vPassengerInvoiceListComponent } from './list/v-passenger-invoice-list.component';
import { vPassengerInvoiceAddComponent } from './add/v-passenger-invoice-add.component';
import { vPassengerInvoiceEditComponent } from './edit/v-passenger-invoice-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vPassengerInvoiceListComponent
    },
    {
        path: 'add',
        component: vPassengerInvoiceAddComponent
    },
    {
        path: ':id',
        component:  vPassengerInvoiceEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
