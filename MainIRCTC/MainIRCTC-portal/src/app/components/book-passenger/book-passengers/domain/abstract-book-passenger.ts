import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Passenger } from '@app/models';

export class AbstractBookPassenger extends RxHttp {
    bookPassengerFormGroup: IFormGroup<Passenger>
}
