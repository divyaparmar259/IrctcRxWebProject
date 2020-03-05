import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Hotel } from '@app/models';
import { AbstractHotel } from '../domain/abstract-hotel';

@Component({
    selector: "app-hotel-add",
    templateUrl: './hotel-add.component.html'
})
export class HotelAddComponent extends AbstractHotel implements OnInit, OnDestroy {
    hotel: Hotel;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.hotel = new Hotel();
        this.hotelFormGroup = this.formBuilder.formGroup(this.hotel) as IFormGroup<Hotel>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
