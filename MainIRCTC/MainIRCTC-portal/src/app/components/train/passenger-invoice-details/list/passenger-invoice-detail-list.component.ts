import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPassengerInvoiceDetail } from '../domain/abstract-passenger-invoice-detail';
import { PassengerInvoice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-passenger-invoice-detail-list",
    templateUrl:'./passenger-invoice-detail-list.component.html'
})
export class PassengerInvoiceDetailListComponent extends AbstractPassengerInvoiceDetail implements OnInit, OnDestroy {
    passengerInvoiceDetails: List<PassengerInvoice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PassengerInvoice>) => {
            this.passengerInvoiceDetails = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
