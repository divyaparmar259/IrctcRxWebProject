import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractHotelBooking } from '../domain/abstract-hotel-booking';
import { HotelBooking } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-hotel-booking-list",
    templateUrl:'./hotel-booking-list.component.html'
})
export class HotelBookingListComponent extends AbstractHotelBooking implements OnInit, OnDestroy {
    hotelBookings: List<HotelBooking>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<HotelBooking>) => {
            this.hotelBookings = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
