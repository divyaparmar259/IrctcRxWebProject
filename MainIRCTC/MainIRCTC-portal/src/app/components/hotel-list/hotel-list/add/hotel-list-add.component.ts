import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vHotel } from '@app/models';
import { AbstractHotelList } from '../domain/abstract-hotel-list';

@Component({
    selector: "app-hotel-list-add",
    templateUrl: './hotel-list-add.component.html'
})
export class HotelListAddComponent extends AbstractHotelList implements OnInit, OnDestroy {
    hotelList: vHotel;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.hotelList = new vHotel();
        this.hotelListFormGroup = this.formBuilder.formGroup(this.hotelList) as IFormGroup<vHotel>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
