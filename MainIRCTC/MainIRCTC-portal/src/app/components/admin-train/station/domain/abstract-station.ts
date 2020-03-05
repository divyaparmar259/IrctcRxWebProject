import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Station } from '@app/models';

export class AbstractStation extends RxHttp {
    stationFormGroup: IFormGroup<Station>
}
