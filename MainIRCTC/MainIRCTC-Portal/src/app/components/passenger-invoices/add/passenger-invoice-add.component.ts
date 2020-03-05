import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PassengerInvoice } from '@app/models';
import { AbstractPassengerInvoice } from '../domain/abstract-passenger-invoice';

@Component({
    selector: "app-passenger-invoice-add",
    templateUrl: './passenger-invoice-add.component.html'
})
export class PassengerInvoiceAddComponent extends AbstractPassengerInvoice implements OnInit, OnDestroy {
    passengerInvoice: PassengerInvoice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.passengerInvoice = new PassengerInvoice();
        this.passengerInvoiceFormGroup = this.formBuilder.formGroup(this.passengerInvoice) as IFormGroup<PassengerInvoice>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
