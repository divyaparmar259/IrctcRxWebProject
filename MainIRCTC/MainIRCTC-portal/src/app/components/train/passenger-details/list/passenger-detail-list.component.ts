import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPassengerDetail } from '../domain/abstract-passenger-detail';
import { Passenger } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-passenger-detail-list",
    templateUrl:'./passenger-detail-list.component.html'
})
export class PassengerDetailListComponent extends AbstractPassengerDetail implements OnInit, OnDestroy {
    passengerDetails: List<Passenger>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Passenger>) => {
            this.passengerDetails = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
