import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vHotelInvoice } from '@app/models';
import { AbstractHotelInvoice } from '../domain/abstract-hotel-invoice';

@Component({
    selector: "app-hotel-invoice-add",
    templateUrl: './hotel-invoice-add.component.html'
})
export class HotelInvoiceAddComponent extends AbstractHotelInvoice implements OnInit, OnDestroy {
    hotelInvoice: vHotelInvoice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.hotelInvoice = new vHotelInvoice();
        this.hotelInvoiceFormGroup = this.formBuilder.formGroup(this.hotelInvoice) as IFormGroup<vHotelInvoice>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
