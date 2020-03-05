import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvPassengerInvoice } from '../domain/abstract-v-passenger-invoice';
import { vPassengerInvoice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-passenger-invoice-list",
    templateUrl:'./v-passenger-invoice-list.component.html'
})
export class vPassengerInvoiceListComponent extends AbstractvPassengerInvoice implements OnInit, OnDestroy {
    vPassengerInvoice: List<vPassengerInvoice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vPassengerInvoice>) => {
            this.vPassengerInvoice = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
