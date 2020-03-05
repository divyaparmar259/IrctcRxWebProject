import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractHotel } from '../domain/abstract-hotel';
import { Hotel } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-hotel-list",
    templateUrl:'./hotel-list.component.html'
})
export class HotelListComponent extends AbstractHotel implements OnInit, OnDestroy {
    hotel: List<Hotel>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Hotel>) => {
            this.hotel = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
