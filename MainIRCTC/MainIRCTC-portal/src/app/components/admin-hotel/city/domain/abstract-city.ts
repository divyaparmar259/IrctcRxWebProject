import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { City } from '@app/models';

export class AbstractCity extends RxHttp {
    cityFormGroup: IFormGroup<City>
}
