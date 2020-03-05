import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractHotelInvoice } from '../domain/abstract-hotel-invoice';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vHotelInvoice } from '@app/models';

@Component({
    selector: "app-hotel-invoice-edit",
    templateUrl: './hotel-invoice-edit.component.html'
})
export class HotelInvoiceEditComponent extends AbstractHotelInvoice implements OnInit, OnDestroy {
    hotelInvoice: vHotelInvoice;
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
            this.hotelInvoiceFormGroup = this.formBuilder.formGroup(vHotelInvoice,t) as IFormGroup<vHotelInvoice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
