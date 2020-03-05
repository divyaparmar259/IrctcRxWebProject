import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { EWallet } from '@app/models';
import { AbstractCancellation } from '../domain/abstract-cancellation';

@Component({
    selector: "app-cancellation-add",
    templateUrl: './cancellation-add.component.html'
})
export class CancellationAddComponent extends AbstractCancellation implements OnInit, OnDestroy {
    cancellation: EWallet;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.cancellation = new EWallet();
        this.cancellationFormGroup = this.formBuilder.formGroup(this.cancellation) as IFormGroup<EWallet>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
