import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { BookTrainResult } from '@app/models';
import { AbstractTrainBooking } from '../domain/abstract-train-booking';
import { http } from '@rxweb/http';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: "local",
    path: "api/SearchTrainSearch",
})
@anonymous()
@Component({
    selector: "app-train-booking-add",
    templateUrl: './train-booking-add.component.html'
})
export class TrainBookingAddComponent extends AbstractTrainBooking implements OnInit, OnDestroy {
    trainBooking: BookTrainResult;
    subscription: Subscription;
    result: any;  
    searchTrainList: any;
    StationStartingPoint: any;
    StationEndingPoint: any;
    TrainAvailableDay: Date;
    TrainApplicationObjectClassName: any;
    TrainformGroup: FormGroup;
    dataForm: FormGroup;

    constructor(private formBuilder: RxFormBuilder, private fromBuilder: FormBuilder) {
        super();
    }
    selectSourceHandler(event: any) {
        this.StationStartingPoint = event.target.value;
    }

    selectDestinationHandler(event: any) {
        this.StationEndingPoint = event.target.value;
    }

    selectDayHandler(event: any) {
        this.TrainAvailableDay = event.target.value;
    }
    selectClassHandler(event: any) {
        this.TrainApplicationObjectClassName = event.target.value;
    }

    ngOnInit(): void {
        // this.trainBooking = new BookTrainResult();
        // this.trainBookingFormGroup = this.formBuilder.formGroup(this.trainBooking) as IFormGroup<BookTrainResult>;

        this.TrainformGroup = this.formBuilder.group({
           
           
          });    
    }
    SearchTrain() {
        this.post({
            body: {
                StationSP:this.StationStartingPoint, StationEP: this.StationEndingPoint,

                day: this.TrainAvailableDay ,class: this.TrainApplicationObjectClassName
            }
        }).subscribe((res: any) => {
            this.result = JSON.parse(res)
            console.log(this.result);

        })

    }

    book(i: number) {

        this.post({
            path: "api/TrainBookings", body: {
                UserId: 3,
                TrainName: this.result[i].TrainName,
                StationStartingPoint: this.result[i].StationStartingPoint,
                StationEndingPoint: this.result[i].StationEndingPoint,
                StationDepartTime: this.result[i].StationDepartTime,
                StationArriveTime: this.result[i].StationArriveTime,
                TrainObjectTypeName: this.result[i].TrainObjectTypeName,
                TrainAvailableDay: this.result[i].TrainAvailableDay,
                TrainApplicationObjectClassName: this.result[i].TrainApplicationObjectClassName,
                FarePerPerson: this.result[i].FarePerPerson
            }
        }).subscribe((res: any) => { this.result = res })
        console.log(this.result)
    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
