import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerInvoiceDetailListComponent } from './list/passenger-invoice-detail-list.component';
import { PassengerInvoiceDetailAddComponent } from './add/passenger-invoice-detail-add.component';
import { PassengerInvoiceDetailEditComponent } from './edit/passenger-invoice-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PassengerInvoiceDetailListComponent
    },
    {
        path: 'add',
        component: PassengerInvoiceDetailAddComponent
    },
    {
        path: ':id',
        component:  PassengerInvoiceDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
