import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPassengerInvoice } from '../domain/abstract-passenger-invoice';
import { PassengerInvoice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-passenger-invoice-list",
    templateUrl:'./passenger-invoice-list.component.html'
})
export class PassengerInvoiceListComponent extends AbstractPassengerInvoice implements OnInit, OnDestroy {
    passengerInvoices: List<PassengerInvoice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PassengerInvoice>) => {
            this.passengerInvoices = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
