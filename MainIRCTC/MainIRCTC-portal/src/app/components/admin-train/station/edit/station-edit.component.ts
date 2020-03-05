import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractStation } from '../domain/abstract-station';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Station } from '@app/models';

@Component({
    selector: "app-station-edit",
    templateUrl: './station-edit.component.html'
})
export class StationEditComponent extends AbstractStation implements OnInit, OnDestroy {
    station: Station;
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
            this.stationFormGroup = this.formBuilder.formGroup(Station,t) as IFormGroup<Station>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
