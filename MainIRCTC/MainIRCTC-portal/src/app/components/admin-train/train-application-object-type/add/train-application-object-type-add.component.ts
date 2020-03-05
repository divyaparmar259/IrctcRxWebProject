import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { TrainApplicationObjectType } from '@app/models';
import { AbstractTrainApplicationObjectType } from '../domain/abstract-train-application-object-type';

@Component({
    selector: "app-train-application-object-type-add",
    templateUrl: './train-application-object-type-add.component.html'
})
export class TrainApplicationObjectTypeAddComponent extends AbstractTrainApplicationObjectType implements OnInit, OnDestroy {
    trainApplicationObjectType: TrainApplicationObjectType;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.trainApplicationObjectType = new TrainApplicationObjectType();
        this.trainApplicationObjectTypeFormGroup = this.formBuilder.formGroup(this.trainApplicationObjectType) as IFormGroup<TrainApplicationObjectType>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
