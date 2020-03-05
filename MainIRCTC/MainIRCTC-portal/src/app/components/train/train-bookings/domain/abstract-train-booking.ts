import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { BookTrainResult } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: "local",
    path: "api/SearchTrainSearch",
})
@anonymous()

export class AbstractTrainBooking extends RxHttp {
    trainBookingFormGroup: IFormGroup<BookTrainResult>
}
