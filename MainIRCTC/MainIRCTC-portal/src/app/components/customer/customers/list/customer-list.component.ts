import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCustomer } from '../domain/abstract-customer';
import { Customer } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-customer-list",
    templateUrl:'./customer-list.component.html'
})
export class CustomerListComponent extends AbstractCustomer implements OnInit, OnDestroy {
    customers: List<Customer>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Customer>) => {
            this.customers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
