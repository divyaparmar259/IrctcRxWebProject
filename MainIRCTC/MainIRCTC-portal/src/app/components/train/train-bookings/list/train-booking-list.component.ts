import { Component, OnInit, OnDestroy ,Input} from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTrainBooking } from '../domain/abstract-train-booking';
import { BookTrainResult } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import { json } from '@rxweb/reactive-form-validators';
import { RxHttp, http } from "@rxweb/http";
import {HttpClientConfig} from '@rxweb/http';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormGroup } from "@angular/forms";



@Component({
    selector:"app-train-booking-list",
    templateUrl:'./train-booking-list.component.html'
})
export class TrainBookingListComponent extends AbstractTrainBooking implements OnInit, OnDestroy {
    trainBookings: List<BookTrainResult>;
   // public trainBookings = BookTrainResult;
    subscription: Subscription;
    cityFrom: string;
    cityTo: string;
    day: string;
    classn:string;
    result: any;
    searchTrainList:any;
   

  //  constructor(private formBuilder: RxFormBuilder) { super();}

    selectSourceHandler(event : any)
    {
        this.cityFrom = event.target.value;
    }

    selectDestinationHandler(event : any)
    {
        this.cityTo = event.target.value;
    }

    selectDayHandler(event : any)
    {
        this.day = event.target.value;
    }
    selectClassHandler(event : any)
    {
        this.classn = event.target.value;
    }

    ngOnInit(): void {
         this.subscription = this.get().subscribe((t: List<BookTrainResult>) => {
            this.trainBookings = t;
         })
         
    }

    
    Post()
    {
        this.post({ body: { StationSP: this.trainBookingFormGroup, StationEP: this.cityTo,
             day: this.day,class:this.classn } }).subscribe
        (res => {
            this.result= res;
            this.searchTrainList=JSON.parse(this.result);
            console.log(this.searchTrainList);

        })
    }
    SearchTrain()
    {
        this.Post();
    }

  
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
