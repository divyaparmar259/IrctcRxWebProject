import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTrainApplicationObject } from '../domain/abstract-train-application-object';
import { TrainApplicationObject } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-train-application-object-list",
    templateUrl:'./train-application-object-list.component.html'
})
export class TrainApplicationObjectListComponent extends AbstractTrainApplicationObject implements OnInit, OnDestroy {
    trainApplicationObject: List<TrainApplicationObject>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<TrainApplicationObject>) => {
            this.trainApplicationObject = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
