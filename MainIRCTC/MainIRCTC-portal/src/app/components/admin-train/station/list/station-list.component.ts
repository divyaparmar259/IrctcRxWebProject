import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractStation } from '../domain/abstract-station';
import { Station } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-station-list",
    templateUrl:'./station-list.component.html'
})
export class StationListComponent extends AbstractStation implements OnInit, OnDestroy {
    station: List<Station>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Station>) => {
            this.station = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
