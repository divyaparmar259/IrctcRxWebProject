import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vHotel } from '@app/models';

export class AbstractHotelList extends RxHttp {
    hotelListFormGroup: IFormGroup<vHotel>
}
