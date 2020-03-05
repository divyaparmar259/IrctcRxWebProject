import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PassengerInvoice } from '@app/models';
import { AbstractPassengerInvoiceDetail } from '../domain/abstract-passenger-invoice-detail';

@Component({
    selector: "app-passenger-invoice-detail-add",
    templateUrl: './passenger-invoice-detail-add.component.html'
})
export class PassengerInvoiceDetailAddComponent extends AbstractPassengerInvoiceDetail implements OnInit, OnDestroy {
    passengerInvoiceDetail: PassengerInvoice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.passengerInvoiceDetail = new PassengerInvoice();
        this.passengerInvoiceDetailFormGroup = this.formBuilder.formGroup(this.passengerInvoiceDetail) as IFormGroup<PassengerInvoice>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
