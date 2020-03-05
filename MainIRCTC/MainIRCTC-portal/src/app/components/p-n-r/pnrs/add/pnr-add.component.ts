import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vPNR } from '@app/models';
import { Abstractpnr } from '../domain/abstract-pnr';

@Component({
    selector: "app-pnr-add",
    templateUrl: './pnr-add.component.html'
})
export class pnrAddComponent extends Abstractpnr implements OnInit, OnDestroy {
    pnr: vPNR;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.pnr = new vPNR();
        this.pnrFormGroup = this.formBuilder.formGroup(this.pnr) as IFormGroup<vPNR>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
