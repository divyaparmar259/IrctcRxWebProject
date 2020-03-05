import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Passenger } from '@app/models';
import { AbstractBookPassenger } from '../domain/abstract-book-passenger';

@Component({
    selector: "app-book-passenger-add",
    templateUrl: './book-passenger-add.component.html'
})
export class BookPassengerAddComponent extends AbstractBookPassenger implements OnInit, OnDestroy {
    bookPassenger: Passenger;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.bookPassenger = new Passenger();
        this.bookPassengerFormGroup = this.formBuilder.formGroup(this.bookPassenger) as IFormGroup<Passenger>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
