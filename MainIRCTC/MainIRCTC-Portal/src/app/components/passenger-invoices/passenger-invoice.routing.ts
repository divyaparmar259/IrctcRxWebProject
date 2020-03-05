import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerInvoiceListComponent } from './list/passenger-invoice-list.component';
import { PassengerInvoiceAddComponent } from './add/passenger-invoice-add.component';
import { PassengerInvoiceEditComponent } from './edit/passenger-invoice-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PassengerInvoiceListComponent
    },
    {
        path: 'add',
        component: PassengerInvoiceAddComponent
    },
    {
        path: ':id',
        component:  PassengerInvoiceEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
