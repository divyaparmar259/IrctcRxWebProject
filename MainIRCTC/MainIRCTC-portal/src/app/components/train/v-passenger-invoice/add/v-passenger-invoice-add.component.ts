import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vPassengerInvoice } from '@app/models';
import { AbstractvPassengerInvoice } from '../domain/abstract-v-passenger-invoice';

@Component({
    selector: "app-v-passenger-invoice-add",
    templateUrl: './v-passenger-invoice-add.component.html'
})
export class vPassengerInvoiceAddComponent extends AbstractvPassengerInvoice implements OnInit, OnDestroy {
    vPassengerInvoice: vPassengerInvoice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vPassengerInvoice = new vPassengerInvoice();
        this.vPassengerInvoiceFormGroup = this.formBuilder.formGroup(this.vPassengerInvoice) as IFormGroup<vPassengerInvoice>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
