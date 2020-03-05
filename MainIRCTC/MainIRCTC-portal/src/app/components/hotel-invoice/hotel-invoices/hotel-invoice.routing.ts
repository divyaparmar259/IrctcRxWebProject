import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelInvoiceListComponent } from './list/hotel-invoice-list.component';
import { HotelInvoiceAddComponent } from './add/hotel-invoice-add.component';
import { HotelInvoiceEditComponent } from './edit/hotel-invoice-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HotelInvoiceListComponent
    },
    {
        path: 'add',
        component: HotelInvoiceAddComponent
    },
    {
        path: ':id',
        component:  HotelInvoiceEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
