import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCustomer } from '../domain/abstract-customer';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '@app/models';

@Component({
    selector: "app-customer-edit",
    templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent extends AbstractCustomer implements OnInit, OnDestroy {
    customer: Customer;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.customerFormGroup = this.formBuilder.formGroup(Customer,t) as IFormGroup<Customer>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
