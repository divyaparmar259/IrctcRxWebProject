import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractHotel } from '../domain/abstract-hotel';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Hotel } from '@app/models';

@Component({
    selector: "app-hotel-edit",
    templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent extends AbstractHotel implements OnInit, OnDestroy {
    hotel: Hotel;
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
            this.hotelFormGroup = this.formBuilder.formGroup(Hotel,t) as IFormGroup<Hotel>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
