import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractTrainApplicationObject } from '../domain/abstract-train-application-object';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { TrainApplicationObject } from '@app/models';

@Component({
    selector: "app-train-application-object-edit",
    templateUrl: './train-application-object-edit.component.html'
})
export class TrainApplicationObjectEditComponent extends AbstractTrainApplicationObject implements OnInit, OnDestroy {
    trainApplicationObject: TrainApplicationObject;
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
            this.trainApplicationObjectFormGroup = this.formBuilder.formGroup(TrainApplicationObject,t) as IFormGroup<TrainApplicationObject>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
