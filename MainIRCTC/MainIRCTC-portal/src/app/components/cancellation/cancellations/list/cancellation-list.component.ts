import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCancellation } from '../domain/abstract-cancellation';
import { EWallet } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-cancellation-list",
    templateUrl:'./cancellation-list.component.html'
})
export class CancellationListComponent extends AbstractCancellation implements OnInit, OnDestroy {
    cancellations: List<EWallet>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<EWallet>) => {
            this.cancellations = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
