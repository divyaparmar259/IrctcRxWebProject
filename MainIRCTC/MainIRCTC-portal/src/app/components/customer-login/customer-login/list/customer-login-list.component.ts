import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCustomerLogin } from '../domain/abstract-customer-login';
import { Customer } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-customer-login-list",
    templateUrl:'./customer-login-list.component.html'
})
export class CustomerLoginListComponent extends AbstractCustomerLogin implements OnInit, OnDestroy {
    customerLogin: List<Customer>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Customer>) => {
            this.customerLogin = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
