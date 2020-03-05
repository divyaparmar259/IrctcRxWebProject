import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Customer } from '@app/models';
import { AbstractCustomer } from '../domain/abstract-customer';

@Component({
    selector: "app-customer-add",
    templateUrl: './customer-add.component.html'
})
export class CustomerAddComponent extends AbstractCustomer implements OnInit, OnDestroy {
    customer: Customer;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.customer = new Customer();
        this.customerFormGroup = this.formBuilder.formGroup(this.customer) as IFormGroup<Customer>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
