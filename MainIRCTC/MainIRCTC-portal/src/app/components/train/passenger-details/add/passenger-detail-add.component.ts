import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Passenger } from '@app/models';
import { AbstractPassengerDetail } from '../domain/abstract-passenger-detail';
import { http } from '@rxweb/http';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: "local",
    path: "api/PassengerDetails",
})
@anonymous()

@Component({
    selector: "app-passenger-detail-add",
    templateUrl: './passenger-detail-add.component.html'
})
export class PassengerDetailAddComponent extends AbstractPassengerDetail implements OnInit, OnDestroy {
    passengerDetail: Passenger;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.passengerDetail = new Passenger();
        this.passengerDetailFormGroup = this.formBuilder.formGroup(this.passengerDetail) as IFormGroup<Passenger>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
