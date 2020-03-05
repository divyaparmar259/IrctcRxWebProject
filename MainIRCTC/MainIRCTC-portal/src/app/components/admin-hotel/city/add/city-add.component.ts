import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { City } from '@app/models';
import { AbstractCity } from '../domain/abstract-city';

@Component({
    selector: "app-city-add",
    templateUrl: './city-add.component.html'
})
export class CityAddComponent extends AbstractCity implements OnInit, OnDestroy {
    city: City;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.city = new City();
        this.cityFormGroup = this.formBuilder.formGroup(this.city) as IFormGroup<City>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
