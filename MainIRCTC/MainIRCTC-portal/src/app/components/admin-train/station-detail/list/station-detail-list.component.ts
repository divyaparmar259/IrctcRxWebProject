import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractStationDetail } from '../domain/abstract-station-detail';
import { StationDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-station-detail-list",
    templateUrl:'./station-detail-list.component.html'
})
export class StationDetailListComponent extends AbstractStationDetail implements OnInit, OnDestroy {
    stationDetail: List<StationDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<StationDetail>) => {
            this.stationDetail = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
