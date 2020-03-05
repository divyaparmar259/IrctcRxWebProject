import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { StationDetail } from '@app/models';
import { AbstractStationDetail } from '../domain/abstract-station-detail';

@Component({
    selector: "app-station-detail-add",
    templateUrl: './station-detail-add.component.html'
})
export class StationDetailAddComponent extends AbstractStationDetail implements OnInit, OnDestroy {
    stationDetail: StationDetail;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.stationDetail = new StationDetail();
        this.stationDetailFormGroup = this.formBuilder.formGroup(this.stationDetail) as IFormGroup<StationDetail>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
