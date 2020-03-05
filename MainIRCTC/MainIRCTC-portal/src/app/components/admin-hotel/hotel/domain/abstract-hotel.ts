import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Hotel } from '@app/models';

export class AbstractHotel extends RxHttp {
    hotelFormGroup: IFormGroup<Hotel>
}
