import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractTrainAvailable } from '../domain/abstract-train-available';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { TrainAvailable } from '@app/models';

@Component({
    selector: "app-train-available-edit",
    templateUrl: './train-available-edit.component.html'
})
export class TrainAvailableEditComponent extends AbstractTrainAvailable implements OnInit, OnDestroy {
    trainAvailable: TrainAvailable;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.trainAvailableFormGroup = this.formBuilder.formGroup(TrainAvailable,t) as IFormGroup<TrainAvailable>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
