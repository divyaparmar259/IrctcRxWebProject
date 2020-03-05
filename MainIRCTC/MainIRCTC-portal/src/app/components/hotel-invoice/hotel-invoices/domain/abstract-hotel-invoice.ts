import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vHotelInvoice } from '@app/models';

export class AbstractHotelInvoice extends RxHttp {
    hotelInvoiceFormGroup: IFormGroup<vHotelInvoice>
}
