import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPassengerDetail } from '../domain/abstract-passenger-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Passenger } from '@app/models';

@Component({
    selector: "app-passenger-detail-edit",
    templateUrl: './passenger-detail-edit.component.html'
})
export class PassengerDetailEditComponent extends AbstractPassengerDetail implements OnInit, OnDestroy {
    passengerDetail: Passenger;
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
            this.passengerDetailFormGroup = this.formBuilder.formGroup(Passenger,t) as IFormGroup<Passenger>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
