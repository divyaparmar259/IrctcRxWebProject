import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractTrainBooking } from '../domain/abstract-train-booking';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { BookTrainResult } from '@app/models';
import { http } from '@rxweb/http';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey: "local",
    path: "api/TrainBookings",
})
@anonymous()

@Component({
    selector: "app-train-booking-edit",
    templateUrl: './train-booking-edit.component.html'
})
export class TrainBookingEditComponent extends AbstractTrainBooking implements OnInit, OnDestroy {
    trainBooking: BookTrainResult;
    subscription: Subscription;
    result:any;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.trainBookingFormGroup = this.formBuilder.formGroup(BookTrainResult,t) as IFormGroup<BookTrainResult>;
        })
    }
    bookTrain(){
        this.post({ body: { StationSP: "Ahmedabad", StationEP: "Surat",
            day: "Monday",class:"AC" } }).subscribe((res:any) => 
            {
           this.result= JSON.parse(res)
           console.log(this.trainBookingFormGroup);

       })
       
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
