import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCity } from '../domain/abstract-city';
import { City } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-city-list",
    templateUrl:'./city-list.component.html'
})
export class CityListComponent extends AbstractCity implements OnInit, OnDestroy {
    city: List<City>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<City>) => {
            this.city = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
