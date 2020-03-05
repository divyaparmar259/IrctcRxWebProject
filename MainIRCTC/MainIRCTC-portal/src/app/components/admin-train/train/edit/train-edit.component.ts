import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractTrain } from '../domain/abstract-train';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Train } from '@app/models';

@Component({
    selector: "app-train-edit",
    templateUrl: './train-edit.component.html'
})
export class TrainEditComponent extends AbstractTrain implements OnInit, OnDestroy {
    train: Train;
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
            this.trainFormGroup = this.formBuilder.formGroup(Train,t) as IFormGroup<Train>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
