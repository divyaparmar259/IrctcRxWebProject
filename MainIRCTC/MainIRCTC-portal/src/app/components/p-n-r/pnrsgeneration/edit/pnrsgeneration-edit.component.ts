import { Component, OnInit, OnDestroy } from "@angular/core"
import { Abstractpnrsgeneration } from '../domain/abstract-pnrsgeneration';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PNRGeneration } from '@app/models';

@Component({
    selector: "app-pnrsgeneration-edit",
    templateUrl: './pnrsgeneration-edit.component.html'
})
export class pnrsgenerationEditComponent extends Abstractpnrsgeneration implements OnInit, OnDestroy {
    pnrsgeneration: PNRGeneration;
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
            this.pnrsgenerationFormGroup = this.formBuilder.formGroup(PNRGeneration,t) as IFormGroup<PNRGeneration>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
