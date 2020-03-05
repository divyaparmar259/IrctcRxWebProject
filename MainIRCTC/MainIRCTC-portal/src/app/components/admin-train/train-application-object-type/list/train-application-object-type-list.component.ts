import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTrainApplicationObjectType } from '../domain/abstract-train-application-object-type';
import { TrainApplicationObjectType } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-train-application-object-type-list",
    templateUrl:'./train-application-object-type-list.component.html'
})
export class TrainApplicationObjectTypeListComponent extends AbstractTrainApplicationObjectType implements OnInit, OnDestroy {
    trainApplicationObjectType: List<TrainApplicationObjectType>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<TrainApplicationObjectType>) => {
            this.trainApplicationObjectType = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
