import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Passenger } from '@app/models';

export class AbstractPassengerDetail extends RxHttp {
    passengerDetailFormGroup: IFormGroup<Passenger>
}
