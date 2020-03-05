import { Component, OnInit, OnDestroy } from "@angular/core"
import { Abstractewalletrefund } from '../domain/abstract-ewalletrefund';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { EWallet } from '@app/models';

@Component({
    selector: "app-ewalletrefund-edit",
    templateUrl: './ewalletrefund-edit.component.html'
})
export class ewalletrefundEditComponent extends Abstractewalletrefund implements OnInit, OnDestroy {
    ewalletrefund: EWallet;
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
            this.ewalletrefundFormGroup = this.formBuilder.formGroup(EWallet,t) as IFormGroup<EWallet>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
