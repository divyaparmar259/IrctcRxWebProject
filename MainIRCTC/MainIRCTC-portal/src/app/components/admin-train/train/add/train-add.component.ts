import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Train } from '@app/models';
import { AbstractTrain } from '../domain/abstract-train';

@Component({
    selector: "app-train-add",
    templateUrl: './train-add.component.html'
})
export class TrainAddComponent extends AbstractTrain implements OnInit, OnDestroy {
    train: Train;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.train = new Train();
        this.trainFormGroup = this.formBuilder.formGroup(this.train) as IFormGroup<Train>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
