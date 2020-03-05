import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractTrainApplicationObjectType } from '../domain/abstract-train-application-object-type';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { TrainApplicationObjectType } from '@app/models';

@Component({
    selector: "app-train-application-object-type-edit",
    templateUrl: './train-application-object-type-edit.component.html'
})
export class TrainApplicationObjectTypeEditComponent extends AbstractTrainApplicationObjectType implements OnInit, OnDestroy {
    trainApplicationObjectType: TrainApplicationObjectType;
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
            this.trainApplicationObjectTypeFormGroup = this.formBuilder.formGroup(TrainApplicationObjectType,t) as IFormGroup<TrainApplicationObjectType>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
