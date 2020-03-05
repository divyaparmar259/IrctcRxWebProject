import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractHotelList } from '../domain/abstract-hotel-list';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vHotel } from '@app/models';

@Component({
    selector: "app-hotel-list-edit",
    templateUrl: './hotel-list-edit.component.html'
})
export class HotelListEditComponent extends AbstractHotelList implements OnInit, OnDestroy {
    hotelList: vHotel;
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
            this.hotelListFormGroup = this.formBuilder.formGroup(vHotel,t) as IFormGroup<vHotel>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
