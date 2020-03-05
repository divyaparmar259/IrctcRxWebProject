import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPassengerInvoice } from '../domain/abstract-passenger-invoice';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PassengerInvoice } from '@app/models';

@Component({
    selector: "app-passenger-invoice-edit",
    templateUrl: './passenger-invoice-edit.component.html'
})
export class PassengerInvoiceEditComponent extends AbstractPassengerInvoice implements OnInit, OnDestroy {
    passengerInvoice: PassengerInvoice;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.passengerInvoiceFormGroup = this.formBuilder.formGroup(PassengerInvoice,t) as IFormGroup<PassengerInvoice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
