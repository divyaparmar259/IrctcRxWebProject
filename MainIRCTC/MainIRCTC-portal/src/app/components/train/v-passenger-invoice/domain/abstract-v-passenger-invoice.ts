import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vPassengerInvoice } from '@app/models';

export class AbstractvPassengerInvoice extends RxHttp {
    vPassengerInvoiceFormGroup: IFormGroup<vPassengerInvoice>
}
