import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { Abstractewalletrefund } from '../domain/abstract-ewalletrefund';
import { EWallet } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-ewalletrefund-list",
    templateUrl:'./ewalletrefund-list.component.html'
})
export class ewalletrefundListComponent extends Abstractewalletrefund implements OnInit, OnDestroy {
    ewalletrefund: List<EWallet>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<EWallet>) => {
            this.ewalletrefund = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
