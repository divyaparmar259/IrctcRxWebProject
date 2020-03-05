import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { Abstractpnrsgeneration } from '../domain/abstract-pnrsgeneration';
import { PNRGeneration } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-pnrsgeneration-list",
    templateUrl:'./pnrsgeneration-list.component.html'
})
export class pnrsgenerationListComponent extends Abstractpnrsgeneration implements OnInit, OnDestroy {
    pnrsgeneration: List<PNRGeneration>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PNRGeneration>) => {
            this.pnrsgeneration = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
