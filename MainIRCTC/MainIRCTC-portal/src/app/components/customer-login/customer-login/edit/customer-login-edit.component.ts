import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCustomerLogin } from '../domain/abstract-customer-login';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '@app/models';

@Component({
    selector: "app-customer-login-edit",
    templateUrl: './customer-login-edit.component.html'
})
export class CustomerLoginEditComponent extends AbstractCustomerLogin implements OnInit, OnDestroy {
    customerLogin: Customer;
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
            this.customerLoginFormGroup = this.formBuilder.formGroup(Customer,t) as IFormGroup<Customer>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
