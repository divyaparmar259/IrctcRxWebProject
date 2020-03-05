import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Customer } from '@app/models';
import { AbstractCustomerLogin } from '../domain/abstract-customer-login';

@Component({
    selector: "app-customer-login-add",
    templateUrl: './customer-login-add.component.html'
})
export class CustomerLoginAddComponent extends AbstractCustomerLogin implements OnInit, OnDestroy {
    customerLogin: Customer;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.customerLogin = new Customer();
        this.customerLoginFormGroup = this.formBuilder.formGroup(this.customerLogin) as IFormGroup<Customer>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
