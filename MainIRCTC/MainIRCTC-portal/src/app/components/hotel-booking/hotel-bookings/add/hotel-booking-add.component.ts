import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { HotelBooking } from '@app/models';
import { AbstractHotelBooking } from '../domain/abstract-hotel-booking';

@Component({
    selector: "app-hotel-booking-add",
    templateUrl: './hotel-booking-add.component.html'
})
export class HotelBookingAddComponent extends AbstractHotelBooking implements OnInit, OnDestroy {
    hotelBooking: HotelBooking;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.hotelBooking = new HotelBooking();
        this.hotelBookingFormGroup = this.formBuilder.formGroup(this.hotelBooking) as IFormGroup<HotelBooking>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
