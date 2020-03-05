import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCity } from '../domain/abstract-city';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { City } from '@app/models';

@Component({
    selector: "app-city-edit",
    templateUrl: './city-edit.component.html'
})
export class CityEditComponent extends AbstractCity implements OnInit, OnDestroy {
    city: City;
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
            this.cityFormGroup = this.formBuilder.formGroup(City,t) as IFormGroup<City>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
