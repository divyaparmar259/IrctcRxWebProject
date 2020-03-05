import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PassengerInvoice } from '@app/models';

export class AbstractPassengerInvoice extends RxHttp {
    passengerInvoiceFormGroup: IFormGroup<PassengerInvoice>
}
