import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractHotelInvoice } from '../domain/abstract-hotel-invoice';
import { vHotelInvoice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-hotel-invoice-list",
    templateUrl:'./hotel-invoice-list.component.html'
})
export class HotelInvoiceListComponent extends AbstractHotelInvoice implements OnInit, OnDestroy {
    hotelInvoices: List<vHotelInvoice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vHotelInvoice>) => {
            this.hotelInvoices = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
