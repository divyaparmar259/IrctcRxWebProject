import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBookPassenger } from '../domain/abstract-book-passenger';
import { Passenger } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-book-passenger-list",
    templateUrl:'./book-passenger-list.component.html'
})
export class BookPassengerListComponent extends AbstractBookPassenger implements OnInit, OnDestroy {
    bookPassengers: List<Passenger>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Passenger>) => {
            this.bookPassengers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
