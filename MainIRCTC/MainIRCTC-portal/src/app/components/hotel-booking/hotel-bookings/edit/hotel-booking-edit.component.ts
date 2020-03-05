import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractHotelBooking } from '../domain/abstract-hotel-booking';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { HotelBooking } from '@app/models';

@Component({
    selector: "app-hotel-booking-edit",
    templateUrl: './hotel-booking-edit.component.html'
})
export class HotelBookingEditComponent extends AbstractHotelBooking implements OnInit, OnDestroy {
    hotelBooking: HotelBooking;
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
            this.hotelBookingFormGroup = this.formBuilder.formGroup(HotelBooking,t) as IFormGroup<HotelBooking>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
