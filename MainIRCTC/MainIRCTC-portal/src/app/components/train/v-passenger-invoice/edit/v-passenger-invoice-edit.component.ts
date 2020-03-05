import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvPassengerInvoice } from '../domain/abstract-v-passenger-invoice';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vPassengerInvoice } from '@app/models';

@Component({
    selector: "app-v-passenger-invoice-edit",
    templateUrl: './v-passenger-invoice-edit.component.html'
})
export class vPassengerInvoiceEditComponent extends AbstractvPassengerInvoice implements OnInit, OnDestroy {
    vPassengerInvoice: vPassengerInvoice;
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
            this.vPassengerInvoiceFormGroup = this.formBuilder.formGroup(vPassengerInvoice,t) as IFormGroup<vPassengerInvoice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
