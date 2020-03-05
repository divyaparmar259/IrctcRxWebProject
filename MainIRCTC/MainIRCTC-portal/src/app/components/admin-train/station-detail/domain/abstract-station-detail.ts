import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { StationDetail } from '@app/models';

export class AbstractStationDetail extends RxHttp {
    stationDetailFormGroup: IFormGroup<StationDetail>
}
