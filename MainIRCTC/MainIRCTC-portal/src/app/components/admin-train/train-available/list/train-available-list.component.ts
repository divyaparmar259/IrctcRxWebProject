import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTrainAvailable } from '../domain/abstract-train-available';
import { TrainAvailable } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-train-available-list",
    templateUrl:'./train-available-list.component.html'
})
export class TrainAvailableListComponent extends AbstractTrainAvailable implements OnInit, OnDestroy {
    trainAvailable: List<TrainAvailable>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<TrainAvailable>) => {
            this.trainAvailable = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
