import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Station } from '@app/models';
import { AbstractStation } from '../domain/abstract-station';

@Component({
    selector: "app-station-add",
    templateUrl: './station-add.component.html'
})
export class StationAddComponent extends AbstractStation implements OnInit, OnDestroy {
    station: Station;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.station = new Station();
        this.stationFormGroup = this.formBuilder.formGroup(this.station) as IFormGroup<Station>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
