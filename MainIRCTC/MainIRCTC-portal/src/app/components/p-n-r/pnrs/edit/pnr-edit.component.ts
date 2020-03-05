import { Component, OnInit, OnDestroy } from "@angular/core"
import { Abstractpnr } from '../domain/abstract-pnr';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vPNR } from '@app/models';

@Component({
    selector: "app-pnr-edit",
    templateUrl: './pnr-edit.component.html'
})
export class pnrEditComponent extends Abstractpnr implements OnInit, OnDestroy {
    pnr: vPNR;
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
            this.pnrFormGroup = this.formBuilder.formGroup(vPNR,t) as IFormGroup<vPNR>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
