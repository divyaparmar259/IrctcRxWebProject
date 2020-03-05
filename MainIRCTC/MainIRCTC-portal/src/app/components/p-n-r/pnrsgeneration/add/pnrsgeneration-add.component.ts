import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PNRGeneration } from '@app/models';
import { Abstractpnrsgeneration } from '../domain/abstract-pnrsgeneration';

@Component({
    selector: "app-pnrsgeneration-add",
    templateUrl: './pnrsgeneration-add.component.html'
})
export class pnrsgenerationAddComponent extends Abstractpnrsgeneration implements OnInit, OnDestroy {
    pnrsgeneration: PNRGeneration;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.pnrsgeneration = new PNRGeneration();
        this.pnrsgenerationFormGroup = this.formBuilder.formGroup(this.pnrsgeneration) as IFormGroup<PNRGeneration>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
