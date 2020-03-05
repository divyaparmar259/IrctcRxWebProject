import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTrain } from '../domain/abstract-train';
import { Train } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-train-list",
    templateUrl:'./train-list.component.html'
})
export class TrainListComponent extends AbstractTrain implements OnInit, OnDestroy {
    train: List<Train>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Train>) => {
            this.train = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
