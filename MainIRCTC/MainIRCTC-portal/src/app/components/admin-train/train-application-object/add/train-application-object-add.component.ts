import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { TrainApplicationObject } from '@app/models';
import { AbstractTrainApplicationObject } from '../domain/abstract-train-application-object';

@Component({
    selector: "app-train-application-object-add",
    templateUrl: './train-application-object-add.component.html'
})
export class TrainApplicationObjectAddComponent extends AbstractTrainApplicationObject implements OnInit, OnDestroy {
    trainApplicationObject: TrainApplicationObject;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.trainApplicationObject = new TrainApplicationObject();
        this.trainApplicationObjectFormGroup = this.formBuilder.formGroup(this.trainApplicationObject) as IFormGroup<TrainApplicationObject>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
