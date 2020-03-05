import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { HotelBooking } from '@app/models';

export class AbstractHotelBooking extends RxHttp {
    hotelBookingFormGroup: IFormGroup<HotelBooking>
}
