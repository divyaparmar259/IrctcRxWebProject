import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { Abstractpnr } from '../domain/abstract-pnr';
import { vPNR } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-pnr-list",
    templateUrl:'./pnr-list.component.html'
})
export class pnrListComponent extends Abstractpnr implements OnInit, OnDestroy {
    pnrs: List<vPNR>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vPNR>) => {
            this.pnrs = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
