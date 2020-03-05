import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractHotelList } from '../domain/abstract-hotel-list';
import { vHotel } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-hotel-list-list",
    templateUrl:'./hotel-list-list.component.html'
})
export class HotelListListComponent extends AbstractHotelList implements OnInit, OnDestroy {
    hotelList: List<vHotel>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vHotel>) => {
            this.hotelList = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
