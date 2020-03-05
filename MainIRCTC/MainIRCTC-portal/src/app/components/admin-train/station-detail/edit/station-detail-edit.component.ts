import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractStationDetail } from '../domain/abstract-station-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { StationDetail } from '@app/models';

@Component({
    selector: "app-station-detail-edit",
    templateUrl: './station-detail-edit.component.html'
})
export class StationDetailEditComponent extends AbstractStationDetail implements OnInit, OnDestroy {
    stationDetail: StationDetail;
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
            this.stationDetailFormGroup = this.formBuilder.formGroup(StationDetail,t) as IFormGroup<StationDetail>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
