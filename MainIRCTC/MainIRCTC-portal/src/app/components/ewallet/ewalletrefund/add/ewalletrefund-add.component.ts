import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { EWallet } from '@app/models';
import { Abstractewalletrefund } from '../domain/abstract-ewalletrefund';

@Component({
    selector: "app-ewalletrefund-add",
    templateUrl: './ewalletrefund-add.component.html'
})
export class ewalletrefundAddComponent extends Abstractewalletrefund implements OnInit, OnDestroy {
    ewalletrefund: EWallet;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.ewalletrefund = new EWallet();
        this.ewalletrefundFormGroup = this.formBuilder.formGroup(this.ewalletrefund) as IFormGroup<EWallet>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
