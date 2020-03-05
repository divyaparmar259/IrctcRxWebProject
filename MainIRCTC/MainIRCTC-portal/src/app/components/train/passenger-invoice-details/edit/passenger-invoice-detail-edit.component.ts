import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPassengerInvoiceDetail } from '../domain/abstract-passenger-invoice-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PassengerInvoice } from '@app/models';

@Component({
    selector: "app-passenger-invoice-detail-edit",
    templateUrl: './passenger-invoice-detail-edit.component.html'
})
export class PassengerInvoiceDetailEditComponent extends AbstractPassengerInvoiceDetail implements OnInit, OnDestroy {
    passengerInvoiceDetail: PassengerInvoice;
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
            this.passengerInvoiceDetailFormGroup = this.formBuilder.formGroup(PassengerInvoice,t) as IFormGroup<PassengerInvoice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
