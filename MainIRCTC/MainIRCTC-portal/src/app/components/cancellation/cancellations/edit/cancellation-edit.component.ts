import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCancellation } from '../domain/abstract-cancellation';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { EWallet } from '@app/models';

@Component({
    selector: "app-cancellation-edit",
    templateUrl: './cancellation-edit.component.html'
})
export class CancellationEditComponent extends AbstractCancellation implements OnInit, OnDestroy {
    cancellation: EWallet;
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
            this.cancellationFormGroup = this.formBuilder.formGroup(EWallet,t) as IFormGroup<EWallet>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
