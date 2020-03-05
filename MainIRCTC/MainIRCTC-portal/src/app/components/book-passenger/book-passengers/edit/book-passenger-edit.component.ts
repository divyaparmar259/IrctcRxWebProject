import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBookPassenger } from '../domain/abstract-book-passenger';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Passenger } from '@app/models';

@Component({
    selector: "app-book-passenger-edit",
    templateUrl: './book-passenger-edit.component.html'
})
export class BookPassengerEditComponent extends AbstractBookPassenger implements OnInit, OnDestroy {
    bookPassenger: Passenger;
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
            this.bookPassengerFormGroup = this.formBuilder.formGroup(Passenger,t) as IFormGroup<Passenger>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
