import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPassengerListComponent } from './list/book-passenger-list.component';
import { BookPassengerAddComponent } from './add/book-passenger-add.component';
import { BookPassengerEditComponent } from './edit/book-passenger-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BookPassengerListComponent
    },
    {
        path: 'add',
        component: BookPassengerAddComponent
    },
    {
        path: ':id',
        component:  BookPassengerEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
