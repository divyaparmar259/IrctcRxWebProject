import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { TrainAvailable } from '@app/models';
import { AbstractTrainAvailable } from '../domain/abstract-train-available';

@Component({
    selector: "app-train-available-add",
    templateUrl: './train-available-add.component.html'
})
export class TrainAvailableAddComponent extends AbstractTrainAvailable implements OnInit, OnDestroy {
    trainAvailable: TrainAvailable;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.trainAvailable = new TrainAvailable();
        this.trainAvailableFormGroup = this.formBuilder.formGroup(this.trainAvailable) as IFormGroup<TrainAvailable>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
